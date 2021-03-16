import express from 'express';
import helmet from 'helmet'
import morgan from 'morgan'
import Configurations from './configurations/Configurations.js'
import Middlewares from './src/middlewares/Middlewares.js'
import UserRoutes from './src/routes/User.route.js'
import cors from 'cors'

const application = express();
application.use(express.json())
application.use(cors({credentials: true}))
application.use(helmet())
application.use(morgan('common'))

UserRoutes.routes(application)
application.use(Middlewares.notFound)
application.use(Middlewares.errorHandler)

Configurations.connectToDatabase()
Configurations.connectToPort(application)

export default application