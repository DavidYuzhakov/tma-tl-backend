import { Router } from 'express'
import { ProjectController } from '../controllers/index.js'

const router = Router()
//api/projects/
router.get('/', ProjectController.getAll)
router.post('/', ProjectController.create)
router.delete('/:projectId', ProjectController.remove)

export default router
