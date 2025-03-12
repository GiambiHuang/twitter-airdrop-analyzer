import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { tweetScheduler } from '@/schedulers/tweet.scheduler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (request, response) => {
  response.json({ status: 'ok' });
});

app.listen(PORT, () => {
  tweetScheduler();
  console.log(`Server is running on port ${PORT}`);
});
