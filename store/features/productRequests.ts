import {createSlice} from "@reduxjs/toolkit";

import data from "../../data.json";

const productRequestSlice = createSlice({
  initialState: data.productRequests,
  name: "productRequests",
  reducers: {},
});

export default productRequestSlice.reducer;
