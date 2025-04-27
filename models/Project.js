import { model, Schema, Types } from 'mongoose'

const schema = Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
})

export default model('Project', schema)
