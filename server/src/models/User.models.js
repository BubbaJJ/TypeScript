import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = Schema({
    username: {
        type: String,
        unique: true,
        allowNull: false,
        required: true
    },
    age: {
        type: Number,
        min: [18, 'Too young, Kiddo'],
        max: [65, 'Come on now, Oldie...'],
        required: false
    },
    password: {
        type: String,
        required: false,
        minlength: 6
    }
}, {timestamps: true})

const userModel = model('user', userSchema)
export default userModel