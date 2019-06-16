module.exports.run = async(client, message, args) => {
    const Discord = require('discord.js')
    const config = require('../config/config.json')

    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("<@" + message.author.id + ">, \nYou need \`ADMINISTRATOR\` perm for using this command :stuck_out_tongue:")
        return;
      }
      let tokick = message.mentions.members.first()
      let reason = message.content.split(' ').slice(2).join(' ')
      if(!tokick) return message.reply('Please Mention a user you want to kick!\nUseage: '+config.prefix+'kick [user] [reason]')
      if(tokick.user.username === message.author.username) return message.reply('You want to kick yourself? dafu lol :joy:')
      if(tokick.user.username === client.user.username) return message.reply('You want to kick ME? dafu lol :joy:')
      tokick.kick()
  .then(() => {
        let embed = new Discord.RichEmbed()
        .setAuthor(tokick.user.username, tokick.user.avtartURL)
        .setTitle('User Kicked !')
        .setColor(0xFF0000)
        .setDescription(!reason?'Reason : Not Specified!' : 'Reason : '+reason)
        .setThumbnail('https://i.imgur.com/owAmKmL.gif')
      message.channel.send(embed)
    })
  .catch(() => message.reply(`Sorry But I Don't Have Permission to Kick that Member!`));
return;
};

module.exports.configs = {
    command : "kick"
};