var unirest = require('unirest');

unirest.get('http://localhost:8080/headers').headers({
host: "localhost:8080",
'user-agent': "Mozilla/5.0 (Linux; Intel Ubuntu) AppleWebKit/537.36 (KHTML, like Gecko) Internet Explorer 5",
accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
}).end(function(response) {
  console.log('Status:', response.statusCode);
  console.log('Headers: ', response.headers);
  console.log('Body:', response.body);
//  console.log(response);
});
