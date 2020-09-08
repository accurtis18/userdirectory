import axios from "axios";

export default {
  // Gets all posts
  getEmployees: function() {
    return axios.get("/employee/");
  },
};