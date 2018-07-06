const spmAgent = require('spm-agent-nodejs')
const Discord = require("discord.js");
const config = require('./config.json');
const auru = new Discord.Client({ disableEveryone: true});
const fsn = require("fs-nextra")
const fs = require('fs');
const readdir = (fs.readdir);
const chalk = require('chalk');
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-admin.json');

// Submodules
require('./modules/eventLoader.js')(auru);
require("./modules/function.js")(auru);
require("./modules/node-kitsu/main.js");



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://auru-datacore.firebaseio.com'
});


auru.on('warn', (e) => {
    console.log(chalk.bgYellow(e));
});
  
auru.on('error', (e) => {
    console.log(chalk.bgRed(e));
});

auru.login(process.env.BOT_TOKEN)