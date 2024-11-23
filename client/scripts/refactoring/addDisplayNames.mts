import { Project } from "ts-morph";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.tsx");

const files = project.getSourceFiles();

files.forEach((sourceFile) => {
  const FileName = sourceFile.getBaseNameWithoutExtension();
  const newCode = `${FileName}.displayName = "${FileName}";`;

  sourceFile.addStatements(newCode);
});

project.save();
