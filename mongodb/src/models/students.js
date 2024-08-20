import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    onDuty: {
        type: Boolean,
        default: false
    },
    // timestamps: true

});

const Student = mongoose.model("Student", studentSchema);
//Student -> (у нижній регістр) -> student -> (множина) -> students
export {Student}