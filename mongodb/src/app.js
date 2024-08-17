import express from 'express'
import studentsRoutes from './routes/students.js'
import {errorHandler} from './middlewares/errorHandler.js'
import {notFoundHandler} from './middlewares/notFoundHandler.js'

const app = express();


app.use('/students', studentsRoutes);

app.use(errorHandler)

app.use(notFoundHandler)
export default app;