import axios from "axios";

export const api = axios.create({
	baseURL: "https://rdstation-signup-psel.herokuapp.com/",
});
