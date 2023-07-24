import express, { Application } from 'express';
// import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
// import ApiError from './errors/ApiError'
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', routes);

//! Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
// throw new ApiError(400, 'Development e Error Message dea jay')
// throw new Error('Testing if the error handler is working')
// next('Next error generated')
// Promise.reject(new Error('Unhandled Promise Rejection'))
//   console.log(x)
// })

// globalErrorHandler
app.use(globalErrorHandler);

export default app;
