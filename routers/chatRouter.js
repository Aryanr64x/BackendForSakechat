import express from 'express'
import { protect } from '../controllers/authController.js';
import { createChat } from '../controllers/chatController.js';
const chatRouter = express.Router();

chatRouter.post('/', protect, createChat)



export default chatRouter;