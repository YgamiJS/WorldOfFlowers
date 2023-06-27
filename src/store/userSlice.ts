import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { IUser } from "@/types/types";

export const FetchLoginUser = createAsyncThunk(
  "user/FetchLoginUser",
  async function (user: IUser, { rejectWithValue }) {
    try {
      const userRes = await fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const result = userRes.json();

      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// 2 day for release sorry :(

export const FetchSingInUser = createAsyncThunk(
  "user/FetchSingInUser",
  async function (
    { login, password }: { login: string; password: string },
    { rejectWithValue }
  ) {
    try {
      const userRes = await fetch(
        `http://localhost:5000/api/user?login=${login}&password=${password}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ login, password }),
        }
      );
      const result = userRes.json();

      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: IUser = {
  id: null,
  email: null,
  name: null,
  surname: null,
  password: null,
  token: null,
  login: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.login = action.payload.login;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
      state.token = null;
      state.password = null;
      state.login = null;
      state.name = null;
      state.surname = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export const user = (state: RootState) => state.user;

export default userSlice.reducer;
