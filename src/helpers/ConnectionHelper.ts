import * as fs from 'fs';
import * as path from 'path';

class ConnectionHelper {
  private dbPath: string;
  private data: any;

  constructor() {
    this.dbPath = path.resolve(__dirname, '..', 'database/db.json');
    this.loadDatabase();
  }

  private loadDatabase(): void {
    if (fs.existsSync(this.dbPath)) {
      const fileContent = fs.readFileSync(this.dbPath, 'utf-8');
      this.data = JSON.parse(fileContent);
    } else {
      console.log('DB not found')
      this.data = {};
    }
  }

  public getData(): any {
    return this.data.news;
  }
}

export { ConnectionHelper };