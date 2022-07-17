const http = require('http');

const app = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  const user = {
    name: 'Wonmi',
    age: 23
  };
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(user));
});

app.listen(5500);
