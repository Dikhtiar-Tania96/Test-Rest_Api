import { getStudent, getStudents } from "../services/students";
import

export async function getStudentsController(req, res) {
        try {
          const students  = await getStudents();//повертає масив усіх студентів
          res.send({status:200, data: students})
        } catch (error) {
          console.error(error);
          res.status(500).send({message: 'Internal Server Error'})
        }
      }


export async function getStudentController(req, res) {
        try {
          const {id} = req.params;
          const studentId = await getStudent(id)
      
          if(studentId === null){
            return res.status(404).send({status:404, message:'Student not found'})
          }
          res.send({status:200, data: studentId})
      
        } catch (error) {
          console.error(error);
          res.status(500).send({message: 'Internal Server Error'})
      
        }
      }
