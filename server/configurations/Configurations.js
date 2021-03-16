import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const {DATABASE_URL, PORT} = process.env

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopolofy: true, useCreateIndex: true })
        console.log('✔️     Connected!')
    } catch (error) {
        console.error("❌ ERROR WHILE TRYING TO CONNECT TO DATABASE: " + error)
        process.exit()
    }
}

const connectToPort = (application) => {
    application.listen(PORT, () => {
        console.log('✔️     Servern är igång på port ' + PORT)
    })
}

export default {
    connectToDatabase,
    connectToPort
}