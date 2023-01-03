import axios from "axios";

export const api = axios.create({
  baseURL: "http://agprints.com.ng/api/",
});
