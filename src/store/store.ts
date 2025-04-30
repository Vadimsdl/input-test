import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filesSlice from "./filesSlice";

const rootReducer = combineReducers({
  files: filesSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
