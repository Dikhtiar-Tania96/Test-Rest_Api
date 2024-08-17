import createHttpError from 'http-errors'
import { getStudent, getStudents } from '../services/students.js';

export async function getStudentsController(req, res) {
  const students = await getStudents(); //повертає масив усіх студентів
  res.send({ status: 200, data: students });
}

export async function getStudentController(req, res, next) {
  const { id } = req.params;
  const student = await getStudent(id);

  if (student === null) {
    return next(createHttpError(404, "Student not found"));
  }
  res.send({ status: 200, data: student });
}
