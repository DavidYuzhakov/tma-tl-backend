import { configDotenv } from 'dotenv'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
configDotenv()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running')
})

const PORT = process.env.PORT
console.log(process.env.MONGO_URI)
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
