import express from 'express';
import {getStudentController} from '../controllers/students.js'
import {getStudentsController} from '../controllers/students.js'


const router = express.Router()

router.get('/', getStudentsController);

  router.get('/:id', getStudentController)
  
  export default router;