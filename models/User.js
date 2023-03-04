import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "It is mandatory to have a string"],
        minLength: 5,
        unique: true
    },
    chats:{
        type:[
        {
            chat_id: { type: String, required: [true, "A chatid is required"]},
            
            chatname: {type: String, required: [true, "A chatname is required"]}
        }
    ],
    default: []
    },

    password:{
        type: String,
        required: [true, "Please provide a password field"],
        minLength: 6,
        select: false
    },

    password_repeat:{
        type: String , 
        required: [true, "Password repeat is required"],
        select: false,
        validate:{
            validator:function(val){
                return (this.password === val)
            },
            message: "Password and Password Repeat should match"
        }
    }

})


const User = mongoose.model('User', userSchema)
export default User