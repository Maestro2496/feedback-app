import {configureStore} from "@reduxjs/toolkit";
import productRequestsReducer from "./features/productRequests";
export const store = configureStore({
  reducer: {
    productRequests: productRequestsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;