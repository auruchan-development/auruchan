const Discord = require("discord.js");
const superagent = require("superagent")
exports.run = async (auru, message, args) => {
    let {body} = await superagent
    .get("aws.random.cat/meow")
    var catembed = new Discord.RichEmbed()
    .setTitle('Here is your random cat!')
    .setColor("GREEN")
    .setImage(body.file)
    message.channel.send(catembed)
};

exports.help = {
    name: "neko",
    category: "fun",
    desc: "Random Neko Image",
    use: "dn..neko",
    param: "",
};

