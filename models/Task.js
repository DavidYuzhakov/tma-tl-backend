import { model, Schema, Types } from 'mongoose'

const schema = Schema({
  projectId: {
    type: Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  priority: {
    type: String,
    required: true,
    enum: ['high', 'middle', 'low'],
    default: 'low',
  },
  isCompleted: {
    type: Boolean,
    required: true,
    default: false,
  },
})

export default model('Task', schema)
