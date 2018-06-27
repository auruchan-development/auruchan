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
    var invitelink = args[0];
    var sevedatawa = {
        [guid]: {
            "name": `${message.guild.name}`,
            "owner": `${message.guild.owner.nickname}`,
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

    fetch('https://auru-database.firebaseio.com/guildDb.json', {
        method: 'PATCH',
        body: JSON.stringify(sevedatawa),
        headers: { 'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .then(coco => {
        message.channel.send("Database Updated!")
       console.log(coco)
    })


    snek.get(`https://auru-database.firebaseio.com/guildDb.json`)
        .then(r => {
            console.log("===RETURN-GET===")
            console.log(r);
            })
    /*
    let embed = new Discord.RichEmbed()
    
        .setTitle(`Server Registration | ${message.guild.name} `)
        .addField("Server Name:", json.name, true)
        .addField("Server Id:", json.Backend.guildid, true)
        .addField("Server Owner:", json.owner, false)
        .addBlankField()
        .addField("Verification Levels:", json.Backend.VLevels, true)
        .addField("Server Region:", json.Backend.region, true)
        .addField("Message Content Scan Level:", json.Backend.msgscan, true)
        .addField("AuruId:", "NOT YET IMPLEMENTED", true)
        .addBlankField()
        .addField("Channels size:", json.serversize.total, true)
        .addField("Text Channels size:", json.serversize.TChannel, true)
        .addField("Voice Channels size:", json.serversize.VChannel, true)
        .addField("Category Channels size:", json.serversize.CChannel, true)
        .addBlankField()
        .setFooter("Auruchan Database | Registration Server")
    message.channel.send(embed)
    */
}

