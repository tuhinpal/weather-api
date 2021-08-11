const axios = require("axios");
const search = require("./search");

async function auto(ip_addr) {
  var ip_info = (await axios.get(`https://ipapi.co/${ip_addr}/json/`))
    .data; /* Get the user's IP data */

  return await search(ip_info.city);
}

module.exports = auto;
