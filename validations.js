import { body } from 'express-validator'

export const taskValidation = [
  body('name', 'The name must be a min of 2 characters and a max of 30')
    .isLength({ min: 2, max: 30 })
    .optional(),
]

export const projectValidation = [
  body(
    'title',
    'The title must be a min of 1 characters and a max of 10'
  ).isLength({ min: 1, max: 10 }),
  body(
    'desc',
    'The description must be a min of 10 characters and a max of 100'
  ).isLength({ min: 10, max: 100 }),
]
