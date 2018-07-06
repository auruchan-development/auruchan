const Discord = require('discord.js');
const superagent = require("superagent")

exports.run = async (auru, message, args) => {
    let ummm = args.join(" ");
    let {body} = await superagent.get("https://nekos.life/api/v2/8ball")
    const embed = new Discord.RichEmbed()
        .setAuthor("AuruChan - Umm", "https://auruchan.pw/commands/user#umm")
        .addField("Question :", `${ummm}`)
        .setImage(body.url)
        .setColor("#688fff")
        .setFooter("Nekos.Life 4 layfe")
        message.channel.send(embed)
};

exports.help = {
    name: "umm",
    category: "fun",
    desc: "Give you some random question",
    use: "dn..umm (question)",
    param: "",
};