import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile, SortType, SortDirection } from "../types/file";
import { RootState } from "./store";
import { setLocalStorageItem } from "../helpers/localStorage";

interface FilesState {
  items: IFile[];
  sortBy: SortType;
  sortDirection: SortDirection;
}

const initialState: FilesState = {
  items: [],
  sortBy: "date",
  sortDirection: "desc",
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
    setSortDirection(state, action: PayloadAction<SortDirection>) {
      state.sortDirection = action.payload;
    },
  },
});

export const { setFiles, addFile, removeFile, setSortBy, setSortDirection } = filesSlice.actions;

export const useFileSelector = (state: RootState) => {
  const { items, sortBy, sortDirection } = state.files;

  const sortedItems = [...items].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case "name":
        comparison = a.name.localeCompare(b.name);
        break;
      case "size":
        comparison = a.size - b.size;
        break;
      case "type":
        comparison = a.type.localeCompare(b.type);
        break;
      case "date":
        comparison = new Date(b.lastModify).getTime() - new Date(a.lastModify).getTime();
        break;
      default:
        return 0;
    }

    return sortDirection === "asc" ? comparison : -comparison;
  });

  return { items: sortedItems, sortBy, sortDirection };
};

export default filesSlice.reducer;
