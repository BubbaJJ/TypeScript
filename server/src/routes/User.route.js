import UserController from '../controllers/User.controller.js'

const routes = application => {
    application.post('/user', UserController.createUser)
    application.get('/user', UserController.getAllUsers)
    application.delete('/user', UserController.deleteUser)
    application.put('/user/:userId', UserController.updateUser)
    application.get('/asd', UserController.queryUsername)
    application.get('/getUser/:id', UserController.getUserById)
}

export default {
    routes
}