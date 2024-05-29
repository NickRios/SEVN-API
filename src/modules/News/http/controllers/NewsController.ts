import { Request, Response } from 'express'
import { NewsService } from '../../services';

class NewsController {
  private service: NewsService

  constructor() {
    this.service = new NewsService();
    this.getNews = this.getNews.bind(this);
    this.getNewsById = this.getNewsById.bind(this);
    this.getHighlights = this.getHighlights.bind(this);
  }

  async getNewsById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const news = await this.service.getNewsById(Number(id));
      return res.status(200).json(news);
    } catch (error: any) {
      return res.status(error.statusCode).json({ message: error.message });
    }
  }

  async getNews(req: Request, res: Response): Promise<Response> {
    const list = await this.service.listNews();
    return res.status(200).json(list);
  }


  async getHighlights(req: Request, res: Response): Promise<Response> {
    const list = await this.service.listNewsByHighlights();
    return res.status(200).json(list);
  }

}

export { NewsController }