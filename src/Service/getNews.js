import axios from "axios";

export function getNews( category = 'Business') {
  const API_Key = `93037876736542a7891cdf0ca9acd583`;
  const API_Endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;

    return axios.get(`${API_Endpoint}&apiKey=${API_Key}`)
}
