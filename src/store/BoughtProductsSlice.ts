import { IBoughtProduct } from "@/types/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchAddBoughtProduct = createAsyncThunk(
  "favorilteProduct/FetchAddFavoriteProduct",
  async function (boughtProduct: IBoughtProduct[], { rejectWithValue }) {
    try {
      const response = await fetch("http://localhost:5000/api/boughtProducts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(boughtProduct),
      });

      const result = response.json();

      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface IState {
  boughtMerchandises: IBoughtProduct[];
}

const initialState: IState = {
  boughtMerchandises: [],
};

export const BoughtProductsSlice = createSlice({
  name: "boughtProducts",
  initialState,
  reducers: {
    loadBoughtProducts(state, action: PayloadAction<IBoughtProduct[]>) {
      state.boughtMerchandises.push(...action.payload);
    },
    checkBoughtProducts(state) {
      state.boughtMerchandises = state.boughtMerchandises.filter(
        (bougthProduct) =>
          !(new Date().getTime() == bougthProduct.date) && bougthProduct
      );
    },
  },
});

export const { loadBoughtProducts, checkBoughtProducts } =
  BoughtProductsSlice.actions;

export default BoughtProductsSlice.reducer;
