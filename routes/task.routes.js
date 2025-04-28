import { Router } from 'express'
import { TaskController } from '../controllers/index.js'

const router = Router()
//api/projects/
router.get('/:projectId', TaskController.getAll)
router.post('/:projectId', TaskController.create)
router.delete('/:taskId', TaskController.remove)
router.patch('/:taskId', TaskController.update)

export default router
