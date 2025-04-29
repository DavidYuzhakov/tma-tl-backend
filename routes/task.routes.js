import { Router } from 'express'
import { TaskController } from '../controllers/index.js'
import { taskValidation } from '../validations.js'
import validationErrors from '../utils/validationErrors.js'

const router = Router()
//api/tasks/
router.get('/:projectId', TaskController.getAll)
router.post(
  '/:projectId',
  taskValidation,
  validationErrors,
  TaskController.create
)
router.delete('/:taskId', TaskController.remove)
router.patch(
  '/:taskId',
  taskValidation,
  validationErrors,
  TaskController.update
)

export default router
