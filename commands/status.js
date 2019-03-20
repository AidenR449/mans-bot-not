const Discord = require("discord.js");
const fs = require("fs");



module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '174200708818665472') return;
    const statusMessage = args.join(" ");
  fs.writeFile("./status.json", statusMessage, (err) => {
    if (err) console.log(err)
  });

}

module.exports.help = {
  name: "status"
}
