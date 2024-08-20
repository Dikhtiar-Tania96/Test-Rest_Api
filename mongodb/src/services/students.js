import { Student } from '../models/students.js';


export function getStudents(){
    return Student.find();
}

export function getStudent(studentId){
    return Student.findById(studentId)
}


export function createStudent(payload){
    return Student.create(payload)
}

export function deleteStudent(studentId){
    return Student.findByIdAndDelete(studentId)//беремо модель

}

export function updateStudent(studentId, payload){
   return Student.findByIdAndUpdate(studentId, payload)
}