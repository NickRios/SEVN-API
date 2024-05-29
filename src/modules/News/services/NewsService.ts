import { AppError } from '../../../utils/AppError';
import { News } from '../models';
import { NewsRepository } from '../repositories/NewsRepository';
import { INewsRepository } from '../repositories/interfaces/INewsRepository';

class NewsService {
  private repository: INewsRepository;

  constructor() {
    this.repository = new NewsRepository();
  }

  async getNewsById(id: number): Promise<News | undefined> {
    const news = this.repository.findById(id);

    if (!news) {
      throw new AppError("News not found", 404);
    }
    
    return news;
  }

  async listNews(): Promise<News[]> {
    const news = this.repository.findAll();
    return news.filter(item => !item.highlights);
  }

  async listNewsByHighlights(): Promise<News[]> {
    const news = this.repository.findAll();
    return news.filter(item => item.highlights)
  }
}

export { NewsService };