import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import braxJson from '../braxJson.json';

// import brax-mastertag.min.js as file and send it as response
import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get('/hello-world', (req, res) => {
  res.send('Hello World!');
});

app.use('/brax-com-mt-75267', (req, res) => {
  const braxJs = fs.readFileSync(
    path.resolve(__dirname, '../brax-mastertag.min.js'),
    'utf8',
  );
  res.setHeader('Content-Type', 'application/x-javascript');
  res.send(braxJs);
});

app.use('/brax-com', (req, res) => {
  res.send(braxJson);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// ^https?:\/\/(?:[^\/]){0,}(ams[007C]creativecdn[007C]google[007C]googleapis[007C]sslwidget[007C]cleverpush[007C]mycleverpush).(?:[^\/]*)(?:\/)?(.*)$
