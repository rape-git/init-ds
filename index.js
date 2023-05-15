const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// create connection to MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_expert',
});

app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  // connect to MySQL database
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to MySQL database');
  });

  console.log(`running on port ${PORT}`);
});

// middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/process', (req, res) => {
  if (!req.body.evidence && req.body.evidence?.length < 2) {
    return res.status(400).send('Pilih minimal 2 gejala');
  }

  // Write Code
});
