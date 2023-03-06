import asyncHandler from 'express-async-handler'
import Chat from '../models/Chat.js'
import User from '../models/User.js'

export const createChat = asyncHandler(async(req, res)=>{
    const chat = await Chat.create({
        name: req.body.name,
        totalMembers: req.body.users.length + 1,
        members: [... req.body.users, req.body.user._id]
    })

    // Lets SKIP UPDATING THE USERS FOR NOW 
    res.json({chat})


})