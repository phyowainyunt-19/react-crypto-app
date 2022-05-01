//* To connect API to store

import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
  reducer: {
      [cryptoApi.reducerPath] : cryptoApi.reducer
  },
});
