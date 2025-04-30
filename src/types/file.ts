export interface IFile {
  id: number;
  name: string;
  type: string;
  lastModify: Date;
  size: number;
  path: string;
}

export type SortType = "name" | "size" | "type" | "date";
