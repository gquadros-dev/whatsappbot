import { Client } from 'whatsapp-web.js';

class Bot {
  constructor(
    public readonly client?: Client,
  ) {
    this.client = new Client({});
  }

  on(event: string, callback: any) {
    this.client.on(event, callback);
  }
}

export default new Bot();
