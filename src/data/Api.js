import axios from "axios";

const Api = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/products",
  timeout: 10000,
});

export default Api;
