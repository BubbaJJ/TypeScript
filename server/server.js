import express from 'express';
import helmet from 'helmet'
import morgan from 'morgan'
import Configurations from './configurations/Configurations.js'
import Middlewares from './src/middlewares/Middlewares.js'
import UserRoutes from './src/routes/User.route.js'

const application = express();
application.use(express.json())
application.use(helmet())
application.use(morgan('common'))

UserRoutes.routes(application)
application.use(Middlewares.notFound)
application.use(Middlewares.errorHandler)

Configurations.connectToDatabase()
Configurations.connectToPort(application)