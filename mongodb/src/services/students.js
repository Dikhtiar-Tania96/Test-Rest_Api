import { Student } from '../models/students.js';


export function getStudents(){
    return Student.find();
}

export function getStudent(studentId){
    return Student.findById(studentId)
}