import { ConnectionHelper } from '../../../helpers/index';
import { News } from '../models/News'

class NewsRepository {
  private db: ConnectionHelper;
  private newsData: News[];

  constructor() {
    this.db = new ConnectionHelper();
    this.newsData = this.db.getData();
  }

  public findAll(): News[] {
    return this.newsData;
  }

  public findById(id: number): News | undefined {
    return this.newsData.find(item => item.id === id);
  }
}

export { NewsRepository };