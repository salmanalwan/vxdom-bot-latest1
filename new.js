module.exports.run = async(client, message, args) => {
    const config = require('../config/config.json');
    const Discord = require("discord.js");

    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.some(x => x.name === "Supporter")) return message.reply(`\nThis server doesn't have a \`Supporter\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
    if (message.guild.channels.some(y => y.name === `ticket-${message.author.username.toLowerCase()}`)) return message.reply(`:no_entry_sign: You already have a ticket open.`);
  
    message.guild.createChannel(`ticket-${message.author.username}`, { type: 'text' }).then(c => {
        let role = message.guild.roles.find(x => x.name === "Supporter");
        let role2 = message.guild.roles.find(z => z.name === "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.reply(`:white_check_mark: Your ticket has been created, ${c}`)
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(0x00B6FF)
        .addField('Thanks for creating a Support Ticket!\nOur **Support Team** will be here soon to help.',!reason ? 'Reason : Not specified!':'Reason : '+reason)
        .setTimestamp();
        c.send(embed);
        return;
    }).catch(console.error);

};

module.exports.configs = {
    command : "new"
};