import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import covidData from "./apiCovid.json";

const apiUrl = "http://localhost:6001/api/get";

type COVIDDATA = typeof covidData;

type covidState = {
  data: COVIDDATA;
  prefecture: string;
};

const initialState: covidState = {
  data: covidData,
  prefecture: "Mie",
};

export const fetchAsyncGetData = createAsyncThunk(
  "covid/getData",
  async (prefecture: string) => {
    const { data } = await axios.get<COVIDDATA>(`${apiUrl}`,{params: {prefecture: prefecture}});
    return { data: data, prefecture: prefecture };
  }
);

const covidSlice = createSlice({
  name: "covid",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetData.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload.data,
        prefecture: action.payload.prefecture,
      };
    });
  },
});

export const selectData = (state: RootState) => state.covid.data;
export const selectPrefecture = (state: RootState) => state.covid.prefecture;

export default covidSlice.reducer;
