const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const blue = botconfig.blue;

module.exports.run = async (bot, message, args) => {

    let cmdsEmbed = new Discord.RichEmbed()
    .setDescription("Commands")
    .setColor(blue)
    //     .addField("", "")
    .addField("addrole", "Gives a user a role")
    .addField("ban", "Bans a user")
    .addField("botinfo", "Gives information about the bot")
    .addField("clear", "Clears the chat")
    .addField("commands", "Shows this list")
    .addField("cmds", "Shows this list")
    .addField("kick", "Kicks a user from server")
    .addField("level", "Shows chat level")
    .addField("log", "Imputs a message into log")
    .addField("prefix", "Changes bot prefix")
    .addField("removerole", "Removes a role from a user")
    .addField("report", "Reports a user")
    .addField("say", "Makes the bot say a phrase")
    .addField("serverinfo", "Gived information about the server")
    .addField("tempmute", "Temporarily mutes a user")
    .addField("warn", "Warns a user")
    .addField("warnlevel", "Checks a user's warning level")
      message.delete().catch();
      message.channel.send(cmdsEmbed);

}

module.exports.help = {
  name: "cmds"
}
