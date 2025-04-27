import Project from '../models/Project.js'

export const create = async (req, res) => {
  try {
    const { title, desc } = req.body
    const project = new Project({
      title,
      desc,
    })
    await project.save()
    res.status(201).json({ project })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to create project',
    })
  }
}

export const remove = async (req, res) => {
  try {
    const projectId = req.params.projectId
    console.log('42', projectId)
    const deletedProject = await Project.findOneAndDelete(projectId)
    if (!deletedProject) {
      res.status(404).json({
        message: 'The project is not found',
      })
    }
    res.status(200).json({
      message: 'The project was successfully deleted ',
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Failed to remove project' })
  }
}

export const getAll = async (_, res) => {
  try {
    const projects = await Project.find().populate('tasks')
    console.log(projects)
    res.status(200).json({ projects })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get all projects',
    })
  }
}
