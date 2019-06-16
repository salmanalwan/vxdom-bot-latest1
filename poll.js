module.exports.run = async(client, message, args) => {
    const Discord = require("discord.js");
    const config = require('../config/config.json');
    const channels = require('../config/channels.json');
    const fs = require('fs')

    if(!message.member.hasPermission("ADMINISTRATOR")) {
      let embed = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .addField('ERROR!', "You need \`ADMINISTRATOR\` perm for using this command")
        .setThumbnail('https://imgur.com/hIumbvN.gif')
        return message.channel.send(embed);
      }

      
      if(message.member.hasPermission("ADMINISTRATOR")){
        var array = message.content.split(" ");
        var msg = array[1];
        if(!msg){
          let embed = new Discord.RichEmbed()
          .setColor(0xFF0000)
          .addField('ERROR!', `Please Specify what i have to Poll!\nUseage:${config.prefix}poll [message]`)
          .setThumbnail('https://imgur.com/hIumbvN.gif')
          return message.channel.send(embed);
        }
        if(msg.toLowerCase() === 'channel'){
          if (!message.guild.channels.has(array[2])){
            let embed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .addField('ERROR!', `The Specifed Channel Didn't Found in The Server!\n${config.prefix}poll channel [Channel ID]`)
            .setThumbnail('https://imgur.com/hIumbvN.gif')
            return message.channel.send(embed);
          }
          else if (message.guild.channels.has(array[2])){
            channels.poll = array[2]
            fs.writeFile ("./config/channels.json", JSON.stringify (channels, null, 4), err =>{
              if(err) throw err;
              return message.reply('Alright, Poll channel is set to '+array[2]+" !");
            });
          }
        return;
        }

        let channel2 = message.guild.channels.find(channel => channel.id === channels.poll);
        if(!channel2){
          let embed = new Discord.RichEmbed()
          .setColor(0xFF0000)
          .addField('ERROR!', `Poll Channel Didn't Found!\nPlease Specify one with\n${config.prefix}poll channel [Channel ID]`)
          .setThumbnail('https://imgur.com/hIumbvN.gif')
          return message.channel.send(embed);
        }
        const embed = new Discord.RichEmbed()
        .setTitle(args.join(' '))
        .setColor(0x36393e)
        .setAuthor("A new Voting Poll !", message.author.avatarURL)
        .setDescription("React with :thumbsup::skin-tone-1: for YES or :thumbsdown::skin-tone-1: for NO")
        .setThumbnail("https://imgur.com/rmZ3Zz0.gif")
        .setTimestamp()
        channel2.send(embed).then(function (message) {
            message.react("👍")
            setTimeout(message.react("👎"), 50);
            })
            message.reply("Done! a new Poll was posted on "+message.guild.channels.find(channel => channel.id === channels.poll).toString());
            return;
        }

}
module.exports.configs = {
  command : "poll"
}
