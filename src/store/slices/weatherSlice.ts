import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API_URLS from "../../config/apiUrls";

export type DailyWeatherData = {
  time: number;
  temperatureMin: number;
  temperatureMax: number;
  icon: string;
  classIcon: string;
  precipProbability: number;
  windSpeed: number;
  currentlyTemperature: number;
};

// Sítio Maravilhoso
const lat = -20.646897;
const lng = -41.085943;

export const fetchWeather = createAsyncThunk<DailyWeatherData[]>(
  "weather/fetchWeather",
  async () => {
    const response = await fetch(`${API_URLS.WEATHER}?lat=${lat}&lng=${lng}`);
    if (!response.ok) throw new Error("Erro ao buscar previsão do tempo");

    const data = await response.json();
    const currentlyTemperature = data?.data?.currently.temperature || 0;
    const responseData = data?.data?.daily?.data || [];

    // Se houver previsões diárias, adicionamos a temperatura atual ao primeiro item
    if (responseData.length > 0) {
      responseData[0] = { ...responseData[0], currentlyTemperature };
    }

    return responseData;
  },
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null as DailyWeatherData[] | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Erro ao carregar previsão do tempo";
        state.data = null;
      });
  },
});

export default weatherSlice.reducer;
