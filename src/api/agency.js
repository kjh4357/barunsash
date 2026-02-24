const axios = require("axios");

async function getAgencies(region, city, agency, page = 1) {
  const url =
    "http://barunsash.com:3002/agencies?page=" +
    page +
    "&region=" +
    region +
    "&city=" +
    city +
    "&agency=" +
    agency;
  return await axios.get(url);
}

async function createAgency(data) {
  const url = "http://barunsash.com:3002/agency";
  return await axios.post(url, data);
}

export { getAgencies, createAgency };
