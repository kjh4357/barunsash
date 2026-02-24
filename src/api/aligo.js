const axios = require('axios');

async function sendMessage(params) {
  return await axios.post('http://barunsash.co.kr:3002/send', params, {
    headers: { 'Content-Type': `application/json` },
  });
}

export { sendMessage };
