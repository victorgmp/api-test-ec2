const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// root
app.get('/', (req, res) => {
  res.send('it works');
});

app.get('/hello', async (req, res) => {
  res.json('hello world');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});