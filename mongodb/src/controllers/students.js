import createHttpError from 'http-errors';

import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

import {
  getStudent,
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent,
} from '../services/students.js';

//код для пагінації
export async function getStudentsController(req, res) {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  const students = await getStudents({ page, perPage, sortBy, sortOrder }); //повертає масив усіх студентів
  res.send({ status: 200, data: students });
}

export async function getStudentController(req, res, next) {
  const { id } = req.params;
  const student = await getStudent(id);
  if (student === null) {
    // return next(createHttpError(404, "Student not found"));
    return next(createHttpError[404]('Student not found'));
  }
  res.send({ status: 200, data: student });
}

export async function createStudentController(req, res) {
  const student = {
    name: req.body.name,
    gender: req.body.gender,
    year: req.body.year,
    email: req.body.email,
  };

  console.log({ result });

  const createdStudent = await createStudent(student);
  res
    .status(201)
    .send({ status: 201, message: 'Student created', data: createdStudent });
}

export async function deleteStudentController(req, res, next) {
  const { id } = req.params;

  const deletedStudent = await deleteStudent(id);
  if (deletedStudent === null) {
    return next(createHttpError.NotFound('Student not found'));
  }
  res.status(204).end();
}

export async function updateStudentController(req, res) {
  const { id } = req.params;

  const student = {
    name: req.body.name,
    gender: req.body.gender,
    year: req.body.year,
    email: req.body.email,
  };

  const result = await updateStudent(IDBCursorWithValue);
  console.log(result);
  res.send('Update student');
}
