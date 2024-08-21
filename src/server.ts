import app from './app';
import dotenv from 'dotenv';

dotenv.config();

app.on('pronto', () => {
  console.log('aaa')
  app.listen(process.env.PORT, ()=> {
    console.log(`Servico rodando em http://localhost:${process.env.PORT}`);
  });
});


// import { Message } from 'whatsapp-web.js';

// import bot from './classes/bot';

// bot.on('qr', (qr: string) => {
//   console.log(qr);
// });

// bot.on('ready', () => {
//   console.log('Bot is ready');
// });

// bot.on('message', (msg: Message) => {
//   if(msg.body == '!ping') {
//     msg.reply('pong');
//   }
// });

// bot.client.initialize();
