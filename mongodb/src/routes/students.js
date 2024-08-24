import express from 'express';
import {
  getStudentsController,
  getStudentController,
  createStudentController,
  deleteStudentController,
  updateStudentController
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {validateBody} from '../middlewares/validateBody.js';
import {studentSchema} from '../validation/student.js';
import {isValidId} from '../middlewares/isValidId.js'

const router = express.Router();
const jsonParser = express.json();

router.get('/', ctrlWrapper(getStudentsController));

router.get('/:id', isValidId, ctrlWrapper(getStudentController));

router.post('/', isValidId, jsonParser, validateBody(studentSchema), ctrlWrapper(createStudentController));

router.delete(':id', isValidId, ctrlWrapper(deleteStudentController));

router.put(':id',isValidId,  jsonParser, validateBody(studentSchema),ctrlWrapper(updateStudentController))

export default router;
