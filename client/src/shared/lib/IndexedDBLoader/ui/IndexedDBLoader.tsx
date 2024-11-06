import { UseIndexedDB } from "@/shared/utils/hooks/UseIndexedDB";
import { memo, useCallback, useEffect } from "react";
import { IndexedDBStores } from "@/shared/const/app";
import { IndexedDBName } from "@/shared/const/app";
import { isUnit } from "@/shared/const/global";
import { IndexedDBLoaderProps } from "../model/types";

// Инстанс IndexedDB
const UseIndexedDBInstance = new UseIndexedDB();

export const IndexedDBLoader: React.FC<IndexedDBLoaderProps> = memo(
  ({
    children,
    setFiles,
    indexedDB,
    indexedDBStoreName,
  }): React.JSX.Element => {
    // Функция для получения файлов из IndexedDB
    const loadFiles = useCallback(
      async (db: IDBDatabase) => {
        const fetchedFiles = await UseIndexedDBInstance.fetchLoadedFiles(
          db,
          indexedDBStoreName
        );

        if (fetchedFiles) setFiles(fetchedFiles.map((file) => file.file));
      },
      [indexedDBStoreName, setFiles]
    );

    // Инициалиазация базы данных и загрузка данных из IndexedDB
    useEffect(() => {
      if (!isUnit) {
        const initializeDatabase = async () => {
          indexedDB.current = await UseIndexedDBInstance.openDatabase(
            IndexedDBName,
            1,
            IndexedDBStores.map((store) => store.name)
          );

          loadFiles(indexedDB.current);
        };

        initializeDatabase();
      }
    }, [indexedDB, loadFiles]);

    return <>{children}</>;
  }
);
