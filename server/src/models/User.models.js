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
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, {timestamps: true, versionKey: false})

const userModel = model('user', userSchema)
export default userModel