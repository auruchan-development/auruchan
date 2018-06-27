const Discord = require('discord.js');
const chalk = require('chalk');
const fsn = require('fs-nextra');
const config = require('../config.json');

module.exports = async function(message) {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let msg = message.content.toLowerCase();
    let args = message.content.slice(config.prefixes.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let auru = message.client;

    const permissions = [
        "MANAGE_GUILD"
      ];

    if (message.content.startsWith(config.prefixes)) {
        try {
            let dafile = require(`../commandos/serverop/${cmd}.js`)
            let dnfile = require(`../commandos/user/${cmd}.js`)
            let dofile = require(`../commandos/owner/${cmd}.js`)
            dafile.run(auru, message, args)
            dnfile.run(auru, message, args)
            dofile.run(auru, message, args);
        } catch (e) {
            console.log(e.message)
        }
    }
    if (message.content.startsWith(`<@${config.botid}>`) || message.content.startsWith(`<@!${config.botid}>`)) {
        message.channel.send("Feel free to acces my http://auru.vzrenggamani.tk")
    };

    if (!message.content.startsWith(config.prefix)) {
    if (!message.content.startsWith(config.aprefix)) {
    if (!message.content.startsWith(config.oprefix)) {
	return;
	}}}

    
    if (message.content.startsWith(config.prefix)) {
        try {
            let dnfile = require(`../commandos/user/${cmd}.js`);
            dnfile.run(auru, message, args);
        } catch (e) {
            console.log(e.message)
        }
    }

    if (message.content.startsWith(config.aprefix) && message.member.hasPermission(permissions)) {
        try {
            let dafile = require(`../commandos/serverop/${cmd}.js`);
            dafile.run(auru, message, args);
        } catch (e) {
            console.log(e.message)
        }
    }

    if (message.content.startsWith(config.oprefix) && message.author.id === '303011486916411392') {
        try {
            let dofile = require(`../commandos/owner/${cmd}.js`);
            dofile.run(auru, message, args);
        } catch (e) {
            console.log(e.message)
        }
    }
}