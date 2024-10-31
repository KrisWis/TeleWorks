import { FileData } from "..";

export class UseIndexedDB {
  openDatabase = (
    dbName: string,
    version: number,
    stores: string[]
  ): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, version);

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;

        for (const store of stores) {
          db.createObjectStore(store, { keyPath: "id" });
        }
      };

      request.onsuccess = (event: Event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        resolve(db);
      };

      request.onerror = (event: Event) => {
        console.error(
          "Ошибка при открытии базы данных:",
          (event.target as IDBOpenDBRequest).error
        );

        reject((event.target as IDBOpenDBRequest).error);
      };
    });
  };

  saveLoadedFile = (db: IDBDatabase, storeName: string, file: File) => {
    const transaction = db.transaction([storeName], "readwrite");
    const objectStore = transaction.objectStore(storeName);

    const fileBlob = new Blob([file], { type: file.type });

    const fileData: FileData = {
      id: file.name,
      file: {
        FileData: fileBlob,
        FileName: file.name,
        FileSize: file.size,
        FileType: file.type,
      },
    };

    const request = objectStore.add(fileData);

    request.onerror = (event: Event) => {
      console.error(
        `Ошибка при сохранении файла ${file.name}:`,
        (event.target as IDBRequest).error
      );
    };
  };

  fetchLoadedFiles = (
    db: IDBDatabase,
    storeName: string
  ): Promise<FileData[]> => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storeName], "readonly");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.getAll();

      request.onsuccess = (event: Event) => {
        resolve((event.target as IDBRequest).result);
      };

      request.onerror = (event: Event) => {
        console.error(
          "Ошибка при извлечении файлов:",
          (event.target as IDBRequest).error
        );
        reject((event.target as IDBRequest).error);
      };
    });
  };

  deleteDB = (DBname: string) => {
    const request = indexedDB.deleteDatabase(DBname);

    request.onsuccess = function () {
      console.log(`База данных ${DBname} успешно удалена`);
    };

    request.onerror = function (event) {
      console.error(`Ошибка при удалении базы данных ${DBname}:`, event);
    };

    request.onblocked = function () {
      console.warn(`Удаление базы данных ${DBname} заблокировано`);
    };
  };

  deleteFileFromIndexedDB = (
    dbName: string,
    storeName: string,
    fileKey: string | number
  ): void => {
    const request = indexedDB.open(dbName);

    request.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);

      const deleteRequest = store.delete(fileKey);

      deleteRequest.onerror = () => {
        console.error(`Ошибка при удалении файла с ключом ${fileKey}.`);
      };

      transaction.oncomplete = () => {
        db.close();
      };
    };

    request.onerror = () => {
      console.error(`Ошибка при открытии базы данных ${dbName}.`);
    };
  };
}
