const Discord = require("discord.js");

exports.run = async (auru, message, args, prefixes) => {
    const waaa = args[0];
    var target = message.mentions.members.first() || message.guild.members.get(args[1]);
    var reason = args.splice(2, args.length - 2).join(" ");

    if (!message.member.hasPermission("KICK_MEMBERS,", "BAN_MEMBERS"))
    return;
    let papa, tutu, tuwawa;

        const warn = new Discord.RichEmbed()
            .setTitle("AuruChan Moderation Module")
            .addField("Target: ", `${target}`, true)
            .addField(`${papa} by: `, `${message.author}`, true)
            .addField("REASON:", `${reason}`, false)
            .setColor("RANDOM")
            .setFooter("Sakura Project | AuruChan Moderation Modules")
            .setThumbnail(`${auru.user.displayAvatarURL}`)
            .setAuthor(`${auru.user.username}`, "", `${auru.user.displayAvatarURL}`)
        message.channel.send(warn)
        
}

let papa, tutu, tuwawa, papaa, tutuu, tuwawaa;

!args[0] ? (description = alonedesc) : (description = `wordAnswer`);
