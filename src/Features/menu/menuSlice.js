// store/menuSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMenu } from "../../services/menuApi";

// Асинхронно действие за извличане на менюто
export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  const response = await getMenu();
  return response; // Предполагаме, че getMenu връща масив от обекти
});

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
