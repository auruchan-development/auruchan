const Discord = require("discord.js");

exports.run = async (auru, message, args, oprefix) => {
    if (message.author.id !== '303011486916411392' && message.author.id !== '303011486916411392') return;
    let embed = new RichEmbed()
        .setColor("#ff1d00")
        .setDescription("Jaa, Mata Nee")
    message.channel.send(embed)

    .then(msg => auru.destroy(0))
    .then(() => auru.login(process.env.BOT_TOKEN))
}