import { Router, request, response } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import multer from 'multer';
import uploadConfig from '@config/upload';

import PublicsController from '../controllers/PublicsController';

const upload = multer(uploadConfig.multer);
const publicsRouter = Router();
const publicsController = new PublicsController();

publicsRouter.post('/items', celebrate({
  [Segments.BODY]: {
    title: Joi.string().required(),
    value: Joi.number().required(),
  },
}), upload.single('image'), publicsController.createItem);

publicsRouter.post('/contacts', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().required(),
    message: Joi.string().required()
  },
}), publicsController.createContact);

publicsRouter.get('/items', publicsController.findAllItems)

export default publicsRouter;
