const Discord = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (auru, message, args) => {
    var guid = message.guild.id;
    fetch(`https://auru-datacore.firebaseio.com/guildDb/${message.guild.id}.json`)
	.then(res => res.json())
	.then(json => {
		let embed = new Discord.RichEmbed()
		.setDescription(`OFFICIAL SERVER INVITE LINK : ${json.social.invite}`)
	message.channel.send(embed)
	})
 
};

exports.help = {
    name: "serinvlink",
    category: "utility",
    desc: "Display Server Official Invite Link. (Can be executed if server has been registered to the AuruDatabase)",
    use: "dn..serinvlink",
    param: "",
};