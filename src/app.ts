import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userServices from './app/modules/users/user.services'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//! Testing
app.get('/', async (req: Request, res: Response) => {
  await userServices.createUser({
    id: '999',
    password: '1234',
    role: 'student',
  })
  res.send('Hello World!')
})

export default app
