const Discord = require('discord.js');
const kitsu = require('../../modules/node-kitsu/main.js');

exports.run = async (auru, message, args) => {
    let anime = args[0].join(" ");

    kitsu.searchAnime(anime, 0).then(results => {
        let mylife = new Discord.RichEmbed ()
        
    });
}