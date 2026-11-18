import express from 'express';
import * as ClassController from '../controller/ClassController.js';
import { validate } from '../middleware/validate.js';
import { createClassSchema, updateClassSchema } from '../validations/class.validation.js';
const ClassRoute = express.Router();

ClassRoute.get('/', ClassController.getAllClass);
ClassRoute.get('/:id', ClassController.getClassById);
ClassRoute.post('/', validate(createClassSchema), ClassController.createClass);
ClassRoute.put('/:id', validate(updateClassSchema), ClassController.updateClass);
ClassRoute.patch('/:id', validate(updateClassSchema), ClassController.updateClass);
ClassRoute.delete('/:id', ClassController.deleteClass);

export default ClassRoute;
