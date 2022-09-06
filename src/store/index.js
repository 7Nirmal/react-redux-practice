import { configureStore } from "@reduxjs/toolkit";
import authslice from "./auth-slice";
import cartslice from "./cart-slice";
import createslice from "./cart-slice"


export const store = configureStore({
    reducer:{auth:authslice.reducer,
              cart:cartslice.reducer}
})