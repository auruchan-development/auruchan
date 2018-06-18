const Discord = require("discord.js");

exports.run = async (auru, message, args, prefix) => {
    if (message.author.id !== '303011486916411392' && message.author.id !== '303011486916411392') return;
    let embed = new RichEmbed()
        .setColor("#ff1d00")
        .setDescription("Bot is shutting down!")
    message.channel.send(embed)
    process.exit(0);
}