import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const carAdapter = createEntityAdapter({
  selectId: (car) => car.id,
});

const initialState = carAdapter.getInitialState({
  loading: false,
  error: null,
});

export const GetAllCars = createAsyncThunk(
  "getcars",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/");
      return response.data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

const carReduces = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: {
    [GetAllCars.pending]: (state) => {
      state.loading = true;
    },
    [GetAllCars.fulfilled]: (state, action) => {
      state.loading = false;

      carAdapter.upsertMany(state, action.payload);
    },
    [GetAllCars.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { selectAll: selectAllCars, selectById: selectCarById } =
  carAdapter.getSelectors((state) => state.cars);
export default carReduces.reducer;
