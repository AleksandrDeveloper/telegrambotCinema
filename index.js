const Telegram = require('node-telegram-bot-api')
const mongoose = require('mongoose')
const config = require('./config/index');
const helper = require('./utils/index')
const keyboard = require('./src/keyboard');
const key_board = require('./src/key_board');
const db = require('./data.json');
const Film = require('./model/films')

const bot = new Telegram(config.TOKEN,{
    polling:true, 
})
mongoose.connect(config.MongoUrl,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('\x1b[32m%s\x1b[0m', 'Mongo ok !'))
.catch(e=>console.log(e))

db.forEach(i=>{
    new Film(i).save() 
})

 
bot.onText(/\/start/,(mes,other)=>{
    console.log(mes);
    const nameUser = `Hello ${mes.from.username} \nВыберите команду для начала работы`;

    bot.sendMessage(helper.getIdFromChat(mes),nameUser,{
        reply_markup:{
            keyboard:keyboard.home
        }
    })
})



//e480f4ef

bot.on('message',mes=>{
    const {text} = mes;
    switch (text) {
        case key_board.home.films:
            bot.sendMessage(helper.getIdFromChat(mes),'Films',{
                reply_markup:{
                    keyboard:keyboard.films
                }
            })
            break;
        case key_board.home.cinema:
            break;
        case key_board.home.favorite:
            break;
        case key_board.back:
            bot.sendMessage(helper.getIdFromChat(mes),'Home menu ',{
                reply_markup:{keyboard:keyboard.home}
            })
            break;
        default:
            console.log('message success');
            break;
    }
})


bot.on("polling_error", console.log);