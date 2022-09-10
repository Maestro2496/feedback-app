import {loadState, saveState} from "./storage";
import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productRequestsReducer from "./features/productRequests";
import sideBarReducer from "./features/sidebar";
const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  productRequests: productRequestsReducer,
  sideBar: sideBarReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
