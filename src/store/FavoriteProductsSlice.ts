import { IFavoriteProduct } from "@/types/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchAddFavoriteProduct = createAsyncThunk(
  "favorilteProduct/FetchAddFavoriteProduct",
  async function (favoriteProduct: IFavoriteProduct, { rejectWithValue }) {
    try {
      const response = await fetch(
        "http://localhost:5000/api/favoriteProducts",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(favoriteProduct),
        }
      );

      const result = response.json();

      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const FetchIncremenetFavoriteProduct = createAsyncThunk(
  "favorilteProduct/Incremenet",
  async function (favoriteProduct: IFavoriteProduct, { rejectWithValue }) {
    try {
      const response = await fetch(
        "http://localhost:5000/api/favoriteProducts/increment",
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(favoriteProduct.id),
        }
      );

      const result = response.json();

      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const FetchDecremenetFavoriteProduct = createAsyncThunk(
  "favorilteProduct/decremenet",
  async function (favoriteProduct: IFavoriteProduct, { rejectWithValue }) {
    try {
      const response = await fetch(
        "http://localhost:5000/api/favoriteProducts/decrement",
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(favoriteProduct.id),
        }
      );

      const result = response.json();

      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const FetchRemoveFavoriteProduct = createAsyncThunk(
  "favorilteProduct/FetchRemoveFavoriteProduct",
  async function (favoriteProduct: IFavoriteProduct, { rejectWithValue }) {
    try {
      const response = await fetch(
        "http://localhost:5000/api/favoriteProducts",
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(favoriteProduct),
        }
      );

      const result = response.json();

      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface IState {
  merchandises: IFavoriteProduct[];
}

const initialState: IState = {
  merchandises: [],
};

export const FavoriteProductSlice = createSlice({
  name: "favorilteProduct",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<IFavoriteProduct>) {
      state.merchandises.push(action.payload);
    },

    removeFavorite(state, action: PayloadAction<string>) {
      state.merchandises = state.merchandises.filter(
        (merchandise) => merchandise.id !== action.payload
      );
    },

    clearFavorite(state) {
      state.merchandises = [];
    },

    incrementCount(state, action: PayloadAction<string>) {
      const item = state.merchandises.find(
        (merchandi) => merchandi.id === action.payload
      )!;

      ++item.count;

      item.totalPrice = item.price * item.count;
    },

    decrementCount(state, action: PayloadAction<string>) {
      const item = state.merchandises.find(
        (merchandi) => merchandi.id === action.payload
      )!;

      if (item.count <= 1) return;

      --item.count;

      item.totalPrice -= item.price;
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
  clearFavorite,
  incrementCount,
  decrementCount,
} = FavoriteProductSlice.actions;

export default FavoriteProductSlice.reducer;
