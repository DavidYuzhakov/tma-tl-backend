import { configDotenv } from 'dotenv'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import projectRoutes from './routes/project.routes.js'
import taskRoutes from './routes/task.routes.js'

const app = express()
configDotenv()

app.use(cors())
app.use(express.json())

app.use('/api/projects', projectRoutes)
app.use('/api/tasks', taskRoutes)

const PORT = process.env.PORT
async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}...`)
    )
  } catch (e) {
    console.log('DB error', e.message)
    process.exit(1) // выход из процесса
  }
}

start()
