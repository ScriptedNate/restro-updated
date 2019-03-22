const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**List of commands & additional Information!**")
    .setColor("#f4d742")
    .setThumbnail(bicon)
    .setFooter(`Commmands •`)
    .addField("Join our discord server for more info", "https://discord.gg/SDvdseP")
    .addField("**!help**", "List of commands and additional info")
    .addField("**!info**", "Information on the bot")
    .addField("**!suggestion**","Puts a sugggestion that you made. ")
    .addField("**!clear**", "Clears a 1-100 word interval.")
    .addField("**!kick**", "Kicks someone")
    .addField("**!ban**", "Bans someone.")
    .addField("**!announce**","Announces a message to a specific channel")
    .addField("**!poll**", "Starts a poll.")
    .addField("**!google**", "Google something.")
    .addField("**!8ball**", "Ask the bot a question.");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"help"
}
