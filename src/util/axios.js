import axios from "axios";
const request = axios.create({
  baseUrl: "http://http://120.76.142.160:9999",
  timeout: 6000,
});
export default request;
