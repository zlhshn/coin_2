import "./scss/style.scss";

import { apiRequest } from "./src/apiRequest";



const form = document.querySelector("header form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getCoinData();
  e.target.reset();
});

const getCoinData = async () => {
  const input = document.querySelector("header form input").value;
  if (!input.trim()) {
    alert("input cannot be blank");
  } else {
    apiRequest(input);
  }
};
