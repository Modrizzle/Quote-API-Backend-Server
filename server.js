import express from 'express';
import { quotes } from './data.js';
import { getRandomElement } from './utils.js';

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

// Route to get a random quote
app.get('/api/quotes/random', (req, res) => {
  const randomQuote = getRandomElement(quotes);
  res.send({ quote: randomQuote });
});

// Route to get all quotes
app.get('/api/quotes', (req, res) => {
  res.send({ quotes: quotes });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
