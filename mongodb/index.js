import 'dotenv/config';

import express from 'express';
import { initDBConnection } from './db.js';
import { Student } from './models/students.js';

const app = express();

app.get('/students', async (req, res) => {
  try {
    const students  = await Student.find();//повертає масив усіх студентів
    res.send({status:200, data: students})
  } catch (error) {
    console.error(error);
    res.status(500).send({message: 'Internal Server Error'})
  }
})

app.get('/students/:id', (req, res) => {
  const {id} = req.params;
  
})

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
