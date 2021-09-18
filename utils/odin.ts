import axios from "axios";

export default axios.create({
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentials": true,
    Authorization: "Bearer " + process.env.CORS_TOKEN,
  },
});
