import userModel from '../models/User.models.js';

const createUser = async (request, response) => {
    const user = new userModel({
        username: request.body.username,
        password: request.body.password,
        age: request.body.age,
    })
    try {
        const databaseResponse = await user.save()
        response.status(201).send(databaseResponse)
    } catch (error) {
        response.status(500).send({
            message: 'Error while trying to create user', 
            stack: error
        })
    }
}

const updateUser = async (request, response) => {
    try {
        const newData = {
            username: request.body.username,
            password: request.body.password,
            age: request.body.age
        }
        const userId = request.params.userId
        const databaseResponse = await userModel.findByIdAndUpdate(userId, newData, {new: true})
        response.status(200).send(databaseResponse)
        //const databaseResponse = await userModel.findOneAndUpdate({ username: request.body.username }, newData)
    }
    catch (error) {
        response.status(500).send({message: error.message})
    }
}

const deleteUser = async (request, response) => {
    try {
        // const userId = request.params.userId
        // const databaseResponse = await userModel.findByIdAndRemove(userId)
        const databaseResponse = await userModel.findOneAndRemove({ username: request.body.username })
        response.status(200).send(databaseResponse)
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}

const getAllUsers = async (request, response) => {
    try {
        const databaseResponse = await userModel.find()
        response.status(200).send(databaseResponse)
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}

const queryUsername = async (request, response) => {
    try {
        const databaseResponse = await userModel.find({ username: request.body.username })
        response.status(200).send(databaseResponse)
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}

const getUserById = async (request, response) => {
    try {
        const databaseResponse = await userModel.find({ _id: request.params.id })
        response.status(200).send(databaseResponse)
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}

export default {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    getUserById,
    queryUsername,
}