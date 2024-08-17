import express from 'express';
import {getStudentController} from '../controllers/students.js'
import {getStudentsController} from '../controllers/students.js'
import {ctrlWrapper} from '../utils/ctrlWrapper.js'

const router = express.Router()

router.get('/', ctrlWrapper(getStudentsController));

router.get('/:id', ctrlWrapper(getStudentController))
  
  export default router;