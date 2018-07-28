const Discord = require("discord.js");
module.exports.run = async (auru, message, args) => {
	//try {
	//	if (!args[0]) {
            const embed = new Discord.RichEmbed()
            .setTitle("AuruChan - User Commands List")
            .setColor("RANDOM")
            .addField("Fun", "`hug` `gimmequest` `kiss` `neko` `nekofact` `pat` `poke` `umm`")
            .addField("Utility", "`avatar` `about` `userinfo` `ping`")
            .addField("Misc", "`auruprofile` `creator`")
            .setFooter("https://auru.vzrenggamani.tk/commands")
            message.channel.send(embed);
            /*
		} else {
			let cmdName = require(`./${args[0]}.js`).help;
			message.channel.send(```\`\nCommand      : ${cmdName.name}\nCategory     : ${cmdName.category}\nDescription  : ${cmdName.desc}\nUsage        : ${cmdName.use}\nParameter(s) : ${cmdName.param}\`\`\``);
			
			const coman = args[0];
            let comanlist = require(`./${coman}.js`).help;
            const wawa = new Discord.RichEmbed()
            .setTitle(`Command Details | ${args[0]}`, false)
            .addField("Command", `${comanlist.name}`, false)
            .addField("Category", `${comanlist.category}`, false)
            .addField("Usage", `${comanlist.use}`, false)
            .addField("Params", `${comanlist.param}`, false)
            .setDescription(`${comanlist.desc}`)
            .setFooter("AuruChan Handbook!")
            message.channel.send(wawa);
			
		}
	} catch (err) {
		message.reply(err);
    }
    */
};

module.exports.help = {
    name: "help",
    category: "utility",
    desc: "Display AuruChan Cheatsheet",
    use: "dn..help [helpcommands]",
    param: "",
};
