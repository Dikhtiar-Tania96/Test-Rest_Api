import express from 'express';
import { initDBConnection } from './db';

const app = express();

async function bootstrap() {
  try {
    await initDBConnection();
    app.listen(8080, () => {
      console.log('Server started on port 8080');
    });
  } catch (error) {
    console.error(error);
  }
}
bootstrap();
