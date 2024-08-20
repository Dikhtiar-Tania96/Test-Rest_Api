import express from 'express'
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
  });


  
  app.get('/students/:id', async (req, res) => {
    try {
      const {id} = req.params;
      const studentId = await Student.findById(id)
  
      if(studentId === null){
        return res.status(404).send({status:404, message:'Student not found'})
      }
      res.send({status:200, data: studentId})
  
    } catch (error) {
      console.error(error);
      res.status(500).send({message: 'Internal Server Error'})
  
    }
  })
  
  export default app;