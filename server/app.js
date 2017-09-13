import express from 'express';

const app = express();

const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(port, () => {
  console.log(`Running on PORT: ${port}`);
});

export default app;
