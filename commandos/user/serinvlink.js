const Discord = require('discord.js');
const fetch = require('node-fetch');
const snek = require("snekfetch");

exports.run = async (auru, message, args) => {
    const guid = message.guild.id;
    snek.get(`https://auru-database.firebaseio.com/guildDb/${guid}/social.json`)
    .then(inv => {
        var embed = new Discord.RichEmbed()
        .setTitle("Server Invite Link")
        .setDescription(inv.body.invite)
        .setFooter("AuruChan Server Database")
        message.channel.send(embed);
    })
}