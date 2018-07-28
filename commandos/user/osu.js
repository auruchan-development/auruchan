const Discord = require('discord.js');
const snek = require("snekfetch");
const osuconfig = require('../../config.json')

exports.run = async (auru, message, args) => {

    blocked();

    let usn = args[1];
    let mode = args[2];

    if (args[0] == "user") {
        try {

        snek.get(`https://osu.ppy.sh/api/get_user?u=${usn}&k=${osuconfig.osuAPI["apiKey"]}`)
        .then(r => {
            var osudata = new Discord.RichEmbed()
            .setTitle(`${usn}'s osu! profile | Auruchan osu!`)
            .addField("Username", r.body[0].username, true)
            .addField("User ID", r.body[0].user_id, true)
            .addField("Ranked Score", r.body[0].ranked_score, true)
            .addField("Total Score", r.body[0].total_score, true)
            .addField("PP Rank", r.body[0].pp_rank, true)
            .addField("RAW PP", r.body[0].pp_raw, true)
            .addField("Playcount", r.body[0].playcount, true)
            .addField("Level", r.body[0].level, true)
            .addField("osu! profile page", `https://osu.ppy.sh/u/${r.body[0].user_id}`)
            .setImage(`http://lemmmy.pw/osusig/sig.php?colour=hexff66aa&uname=${usn}&pp=0&countryrank&opaqueavatar&onlineindicator=undefined&xpbar`)
            .setFooter(`AuruChan osu! module`)
            message.channel.send(osudata);
            })
        } catch (e) {
            console.log(e.message)
        }

        
    }
    
    if (args[0] !== "user") {
        message.channel.send("UMAAAAAAAAA!!!!!")
        console.log("UMAAAAAAA!!!!!!!!!!")
    };
}
