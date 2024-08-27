import express from 'express'
import studentsRoutes from './routes/students.js'
import {errorHandler} from './middlewares/errorHandler.js'
import {notFoundHandler} from './middlewares/notFoundHandler.js'
import authRoutes from './routes/auth.js'

const app = express();



// app.use(express.json()) перекинули у файл routes
//!!!!самостійно прописати!!!цей middleware потрібен щоб з body розпарсити дані у форматі json(отримання даних нового студента з Postman)
app,use('/auth', authRoutes);
app.use('/students', studentsRoutes);

app.use(errorHandler)

app.use(notFoundHandler)
export default app;