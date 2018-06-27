const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    
    let user;
    if (message.mentions.users.first()) {
    user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    var member = message.guild.member(user)
    let embed = new Discord.RichEmbed()
    .setAuthor(user.tag, "", user.displayavatarURL)
    .setThumbnail(user.avatarURL)
    .setFooter("Auruchan | userinfo")
    .setColor("random")
    .addField("ID", user.id)
    .addField("Nickname", message.guild.member(user).nickname)
    .addField("Join at", message.guild.member(user).joinedAt)
    .addField("Roles", member.roles.map(roles => `${roles.name}`).join(', '))
    message.channel.send(embed)

}