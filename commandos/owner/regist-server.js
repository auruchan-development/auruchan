const Discord = require('discord.js');
const fetch = require('node-fetch');
const superagent = require('superagent')
const snek = require('snekfetch')

exports.run = async (auru, message, args) => {
    if (!args[0]) {
        message.reply("Please provide Permanent server invite link!")
        return;
    }
    var guid = message.guild.id;
	var oid = message.guild.owner.id;
	var wawa = auru.users.get(`${oid}`)
    var invitelink = args[0];
    var sevedatawa = {
        [guid]: {
            "name": `${message.guild.name}`,
            "owner": `${wawa.username}#${wawa.discriminator}`,
            "members": {
                "users": "usershuman",
                "bot": "botusers",
                "total": `${message.guild.memberCount}`},
            "serversize": {
                "Channels": {
                    "TChannel": `${message.guild.channels.filter(e => e.type !== 'voice').size}`,
                    "VChannel": `${message.guild.channels.filter(e => e.type == 'voice').size}`,
                    "CChannel": `${message.guild.channels.filter(e => e.type === 'category').size}`,
                    "total": `${message.guild.channels.size}`},
                "rolescount": `${message.guild.roles.size}`},
            "Backend": {
                "VLevels": `${message.guild.verificationLevel}`,
                "region": `${message.guild.region}`,
                "roles": `${message.guild.roles.size}`,
                "msgscan": `${message.guild.explicitContentFilter}`,
                "guildid": `${message.guild.id}`
            },
            "social": {
                "invite": `${invitelink}`,
                "avaliabe": `${message.guild.avaliable}`
            },
            "guildUI": "TEXTHERE",
        }
    };

    fetch('https://auru-datacore.firebaseio.com/guildDb.json', {
        method: 'PATCH',
        body: JSON.stringify(sevedatawa),
        headers: { 'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .then(coco => {
        message.channel.send("Database Updated!")
       console.log(coco)
    })


    fetch(`https://auru-datacore.firebaseio.com/guildDb/${message.guild.id}.json`)
	.then(res => res.json())
	.then(json => {
		let embed = new Discord.RichEmbed()
		.setColor("#ffe5ee")
		.addBlankField()
        .setTitle(`Server Registration | ${message.guild.name} `)
        .addField("Server Name:", json.name, false)
        .addField("Server Id:", json.Backend.guildid, false)
        .addField("Server Owner:", json.owner, false)
        .addBlankField()
        .addField("Verification Levels:", json.Backend.VLevels, false)
        .addField("Server Region:", json.Backend.region, false)
        .addField("Message Content Scan Level:", json.Backend.msgscan, false)
        .addField("AuruId:", "PapaTutuTuwawa", false)
        .addBlankField()
        .addField("Channels size:", json.serversize.Channels.total, false)
        .addField("Text Channels size:", json.serversize.Channels.TChannel, false)
        .addField("Voice Channels size:", json.serversize.Channels.VChannel, false)
        .addField("Category Channels size:", json.serversize.Channels.CChannel, false)
        .addBlankField()
        .setFooter("Auruchan Database | Registration Server")
		message.channel.send(embed)
    });
}
