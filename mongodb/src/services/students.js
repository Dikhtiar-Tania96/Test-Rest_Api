import { Student } from '../models/students.js';

//пагінація
export async function getStudents({page, perPage}){
const skip = page > 0 ? (page - 1) * perPage : 0;

const [students, count] = await Promise.all([
    Student.find().skip(skip).limit(perPage),
    Student.countDocuments() 
]);

//пагінація на сторінки
const totalPages = Math.ceil(count/perPage);

    return {
        students,
        page,
        perPage,
        totalItems: count,
        hasNextPage: totalPages - page > 0,
        hasPreviousPage: page > 1,
    }
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