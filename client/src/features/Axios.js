import axios from "axios";
export default axios.create({
  // baseURL: "https://wild-discovery.herokuapp.com/",
  baseURL: "http://localhost:5000/",
  // headers: {
  //   "Content-type": "application/json"
  // }
});