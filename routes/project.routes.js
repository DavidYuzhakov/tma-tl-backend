import { Router } from 'express'
import { ProjectController } from '../controllers/index.js'
import { projectValidation } from '../validations.js'
import validationErrors from '../utils/validationErrors.js'

const router = Router()
//api/projects/
router.get('/', ProjectController.getAll)
router.post('/', projectValidation, validationErrors, ProjectController.create)
router.delete('/:projectId', ProjectController.remove)

export default router
