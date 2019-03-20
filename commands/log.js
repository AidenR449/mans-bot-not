const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    const logMessage = args.join(" ");
    message.delete().catch();
    console.log(logMessage)

}

module.exports.help = {
  name: "log"
}
