import mongoose from 'mongoose'


const chatSchema = new mongoose.Schema({
    name:{
       type: String,   
       required: [true, "The chat should have a name"]
    },
    
    totalMembers:{
        type: Integer,
        default: 0
    },

    members: {
        type: [
            {
                type: String
            }
        ],
        validate: [
            function(val){
                return val.length >= 2
            }, 
            "Please atleast 2 members to this group"
        ]
    }

})

const Chat = mongoose.model('Chat', chatSchema)
export default Chat;


