import axios from "axios";
export default axios.create({
  //baseURL: "http://localhost:5000/",
  baseURL:"https://wild-discovery.herokuapp.com/"
  // headers: {
  //   "Content-type": "application/json"
  // }
});