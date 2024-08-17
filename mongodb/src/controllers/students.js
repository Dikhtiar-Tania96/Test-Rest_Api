import { getStudent, getStudents } from '../services/students.js';

export async function getStudentsController(req, res) {
  const students = await getStudents(); //повертає масив усіх студентів
  res.send({ status: 200, data: students });
}

export async function getStudentController(req, res) {
  const { id } = req.params;
  const studentId = await getStudent(id);

  if (studentId === null) {
    return res.status(404).send({ status: 404, message: 'Student not found' });
  }
  res.send({ status: 200, data: studentId });
}
