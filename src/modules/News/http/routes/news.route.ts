import { Router } from 'express';
import { NewsController } from '../controllers'

const newsRouter = Router();

const controller = new NewsController();

newsRouter.get('/', controller.getNews);
newsRouter.get('/highlights', controller.getHighlights);
newsRouter.get('/:id', controller.getNewsById);


export { newsRouter }