import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test } from 'mocha'
import application from '../server.js'
import StatusCode from '../configurations/StatusCode.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)
var newUser = ""

const testingNonExistingRoute = () => {
    test('HTTP Call against a route that does not exist in the API', done => {
        Chai.request(application)
            .get(`/${randomString}`)
            .end((req, res) => {
                // Should return error 404, URL not found
                res.should.have.a.status(StatusCode.NOT_FOUND)
                done()
            }
            )
    })
}

const getAllUsers = () => {
    test('Expecting a return of all users in the database', done => {
        Chai.request(application)
            .get('/user')
            .end((req, res) => {
                // Should be able to talk to the database
                res.should.have.a.status(StatusCode.OK)
                // Should be an array, not null
                res.body.should.a('array')
                // Checks if there is a set amount of users in the database
                res.body.length.should.eq(2)
                // Added to tell the test that we are done
                done()
            })
    })
}

const updateUser = () => {
    const userId = '605094689734121824d91a2c'
    test('Should manipulate data of a current user in the database', done => {
        Chai.request(application)
            .put(`/user/${userId}`)
            .send({ username: 'Jim', password: "p4ssw0rd", age: 32})
            .end((req, res) => {
                res.should.have.a.status(StatusCode.OK)
                // Should be an object
                res.body.should.be.a('object')
                // Id in the object should be the same as the submitted userId
                res.body.should.have.property('_id').eq(userId)
                // Username should be the same as the submitted username
                res.body.should.have.property('username').eq('Jim')
                done()
            })
    })
}

const createUser = () => {
    test('Should create a user in the database', done => {
        Chai.request(application)
            .post('/user')
            .send({ username: 'TestUser', password: 'TestPassword', age: 22 })
            .end((req, res) => {
                // Should return status 201 to show that user has been created
                res.should.have.a.status(StatusCode.CREATED)
                res.body.should.be.a('object')
                res.body.should.have.property('username').eq('TestUser')
                // set newUser to created Id for usage in deleteUser
                newUser = res.body._id
                done()
            })
    })
}

const deleteUser = () => {
    test('Should deleta a user in the database', done => {
        Chai.request(application)
            .delete(`/user/${newUser}`)
            .end((req, res) => {
                res.should.have.a.status(StatusCode.OK)
                done()
            })
    })
}

describe('TESTING THE API', () => {
    testingNonExistingRoute()
    getAllUsers()
    updateUser()
    createUser()
    deleteUser()
})