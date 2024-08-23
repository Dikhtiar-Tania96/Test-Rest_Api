import createHttpError from 'http-errors';
import {
  getStudent,
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent,
} from '../services/students.js';
import { studentSchema } from '../validation/student.js';

export async function getStudentsController(req, res) {
  const students = await getStudents(); //повертає масив усіх студентів
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
  // if(
  //   typeof req.body.name === "undefined" ||
  //   typeof req.body.gender === "undefined" ||
  //   typeof req.body.year === "undefined" ||
  //   typeof req.body.email === "undefined"
  // ) {
  //   return res.status(400).send({status: 400, message :'Invalid body'});
  // };

  // if(['male', 'female'].includes(req.body,gender) != true){
  //   return res.status(400).send({status: 400, message :'Incorrect gender'});
  // };

  const student = {
    name: req.body.name,
    gender: req.body.gender,
    year: req.body.year,
    email: req.body.email,
  };
  const result = studentSchema.validate(student, { abortEarly: false });

  
  console.log({ result });

  const createdStudent = await createStudent(student.value);
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
