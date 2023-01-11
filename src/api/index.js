import axios from "axios";

export const api = axios.create({
  baseURL: "https://agprints.com.ng/api/",
});
