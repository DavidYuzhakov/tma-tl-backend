import Task from '../models/Task.js'

export const getAll = async (req, res) => {
  try {
    const tasks = await Task.find({ projectId: req.params.projectId })
    res.status(200).json({ tasks })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get all tasks',
    })
  }
}

export const create = async (req, res) => {
  try {
    const { name } = req.body
    const task = new Task({
      name,
      projectId: req.params.projectId,
    })
    await task.save()
    res.status(201).json({ task })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to create task',
    })
  }
}

export const remove = async (req, res) => {
  try {
    const taskId = req.params.taskId
    const deletedTask = await Task.findOneAndDelete(taskId)
    if (!deletedTask) {
      res.status(404).json({
        message: 'The task is not found',
      })
    }
    res.status(200).json({ success: true })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Failed to remove task' })
  }
}

export const update = async (req, res) => {
  try {
    const taskId = req.params.taskId
    await Task.findByIdAndUpdate(taskId, {
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      priority: req.body.priority,
      isCompleted: req.body.isCompleted,
    })
    res.status(200).json({ success: true })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to update task',
    })
  }
}
