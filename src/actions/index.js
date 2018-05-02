import {FETCH_WEATHER} from "./types"
import axios from 'axios'
const API_KEY = "3d7de2b3aba9499d6a65deea0d5a630d";
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&`

export function fetchWeather(city) {

  const url = `${BASE_URL}q=${city},us`
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
