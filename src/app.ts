import dotenv from 'dotenv';

dotenv.config();

import express, { urlencoded, json } from 'express';
import flash from 'connect-flash';

class App {
  public readonly app: any;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();

    this.start();
  }

  private middlewares(): void {
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
    this.app.use(flash());
  }

  private routes(): void {
    this.app.use('/', () => {});
  }

  private start(): void {
      this.app.emit('pronto');
  }
}

export default new App().app;
