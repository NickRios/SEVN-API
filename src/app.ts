/* eslint-disable no-new */
import express from 'express';
import cors from 'cors'

import { newsRouter } from './modules/News/http/routes'

export default class App {
  express: any;
  controllers: any;

  start() {
    this.setupExpress();
    this.startServer();
  }

  setupExpress() {
    this.express = express();
    this.setupMiddlewares();
    this.setupRoutes();
  }

  setupMiddlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  setupRoutes() {
    this.express.use('/news', newsRouter)
  }

  startServer() {
    const expressPort = parseInt(process.env.EXPRESS_PORT || '3000', 10);
    this.express.listen(expressPort, () => {
      console.log(`Server started on port ${expressPort}`);
    });
  }
}
