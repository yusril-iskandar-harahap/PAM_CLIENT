import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
const API_URL = "http://localhost:8000/arsip_surat/";

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      return response.data;
    });
};

const logout = () => {
  AsyncStorage.removeItem('token')
};

const whoami = () => {
  return axios.get(API_URL + "whoami", {withCredentials: true})
	.then((response) => {
		return response.data;
	});
}

// eslint-disable-next-line
export default {
  login,
  logout,
  whoami,
};
