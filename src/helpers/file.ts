import { IFile } from "../types/file";

export const extractFileInfo = (file: File): IFile => {
  const name = file.name.substring(0, file.name.lastIndexOf("."));
  const type = file.type.split("/")[1];

  return {
    id: Date.now(),
    name,
    type,
    lastModify: new Date(file.lastModified),
    size: file.size / 1024 / 1024,
    path: file.name,
  };
};
