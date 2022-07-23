import axios from "axios";

//uncomment for local backend setup
//let baseUrl = 'http://localhost:5004';
let baseUrl = "http://localhost:8001/api/v1";

export function getMyBasket() {
  return axios.get(baseUrl + "/Basket/asingh", {
    withCredentials: true,
  });
}
