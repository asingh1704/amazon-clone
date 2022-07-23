import axios from "axios";

//let baseUrl = 'http://localhost:5283';
let baseUrl = "http://localhost:8000/api/v1";

export function getAllItems() {
  return axios.get(baseUrl + "/Catalog", {
    withCredentials: true,
  });
}
