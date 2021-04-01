import express from 'express';

let app = express();

app.get('/api/hello', function(req, res) {
  res.send('hello world');
})

app.listen(8080, () => {
  console.log('server is listening 8080');
});