import express from 'express';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import routes from './routes';

// Config ENV
dotenv.config();

const app = express();
// Hide header Information
app.use(helmet());

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  return res.send('Hello World App');
});

app.post('/api/v1', (req, res) => {
  const data = req.body;
  res.status(200).jsonp({
    message: 'Hi Dev. Hello World App',
    data,
  });
});

// Call Route
routes(app);

app.listen(PORT, () => {
  console.log(`Server is running under http://localhost:${PORT}`);
});
