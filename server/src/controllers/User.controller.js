import userModel from '../models/User.models.js';
import StatusCode from '../../configurations/StatusCode.js'

const createUser = async (request, response) => {
    const user = new userModel({
        username: request.body.username,
        password: request.body.password,
        age: request.body.age,
    })
    try {
        const databaseResponse = await user.save()
        response.status(StatusCode.CREATED).send(databaseResponse)
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error while trying to create user' + request.body.username, 
            stack: error
        })
    }
}

const updateUser = async (request, response) => {
    const userId = request.params.userId
    const newData = {
        username: request.body.username,
        password: request.body.password,
        age: request.body.age
    }
    try {
        const databaseResponse = await userModel.findByIdAndUpdate(userId, newData, {new: true})
        response.status(StatusCode.OK).send(databaseResponse)
        //const databaseResponse = await userModel.findOneAndUpdate({ username: request.body.username }, newData)
    }
    catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'An error occurred while trying to update user with ID ',
            error: error.message
        })
    }
}

const deleteUser = async (request, response) => {
    const userId = request.params.userId
    try {
        const databaseResponse = await userModel.findByIdAndRemove(userId)
        response.status(StatusCode.OK).send({ message: `Successfully deleted user ${userId}`, data: databaseResponse })
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error while trying to delete user with ID: ${userId}`,
            error: error.message
        }
        )}
}

const getAllUsers = async (request, response) => {
    try {
        const databaseResponse = await userModel.find()
        response.status(StatusCode.OK).send(databaseResponse)
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
    }
}

const queryUsername = async (request, response) => {
    try {
        const databaseResponse = await userModel.find({ username: request.query.username })
        response.status(StatusCode.OK).send(databaseResponse)
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
    }
}

const getUserById = async (request, response) => {
    const id = request.params.id
    try {
        const databaseResponse = await userModel.findById({ _id: id }) 
        response.status(StatusCode.OK).send(databaseResponse)
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `An error occurred while trying to retrieve user with ID: ${id}`,
            error: error.message
        })
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