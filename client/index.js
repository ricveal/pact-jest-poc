"use strict";

const axios = require("axios");

exports.getProducts = endpoint => {
  const url = endpoint.url;
  const port = endpoint.port;

  return axios.request({
    method: "GET",
    baseURL: `${url}:${port}`,
    url: "/products",
    headers: { Accept: "application/json" }
  });
};
