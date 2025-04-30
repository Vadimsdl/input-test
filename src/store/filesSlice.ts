import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile, SortType } from "../types/file";
import { RootState } from "./store";
import { setLocalStorageItem } from "../helpers/localStorage";

interface FilesState {
  items: IFile[];
  sortBy: SortType;
}

const initialState: FilesState = {
  items: [],
  sortBy: "date",
};

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    setFiles(state, action: PayloadAction<IFile[]>) {
      state.items = action.payload.map((item) => {
        return { ...item, lastModify: new Date(item.lastModify) };
      });
    },
    addFile(state, action: PayloadAction<IFile>) {
      const files = [...state.items, action.payload];
      setLocalStorageItem({
        key: "Files",
        value: files,
      });
      state.items = files;
    },
    removeFile(state, action: PayloadAction<number>) {
      const files = state.items.filter((file) => file.id !== action.payload);
      setLocalStorageItem({
        key: "Files",
        value: files,
      });
      state.items = files;
    },
    setSortBy(state, action: PayloadAction<SortType>) {
      state.sortBy = action.payload;
    },
  },
});

export const { setFiles, addFile, removeFile, setSortBy } = filesSlice.actions;

export const useFileSelector = (state: RootState) => {
  const { items, sortBy } = state.files;

  const sortedItems = [...items].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "size":
        return a.size - b.size;
      case "type":
        return a.type.localeCompare(b.type);
      case "date":
        return (
          new Date(b.lastModify).getTime() - new Date(a.lastModify).getTime()
        );
      default:
        return 0;
    }
  });

  return { items: sortedItems, sortBy };
};

export default filesSlice.reducer;
