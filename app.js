import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { errorHandler } from './controllers/errorController.js';
import authRouter from './routers/authRouter.js';
import chatRouter from './routers/chatRouter.js';

const app = express();
app.use(express.json())
app.use(cors())


app.use('/api', authRouter);
app.use('/api/chat', chatRouter)

app.use(
    errorHandler
);


mongoose.connect('mongodb+srv://saket:annesha@cluster0.d5czosp.mongodb.net/?retryWrites=true&w=majority')

app.listen(8000, ()=>{
    console.log("The server is now running at port 8000")
});