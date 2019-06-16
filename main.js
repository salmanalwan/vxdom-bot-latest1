const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config/config.json");
const prefix = config.prefix;
const fs = require("fs");

client.on('ready', () => {
    client.user.setActivity("for "+config.prefix+"help", {type: 3});
    client.user.setStatus('online');
    console.log(`${client.user.username} BOT is online in ${client.guilds.size} servers!`);
});

client.commands = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
    if(err) console.error(err);
    var jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if(jsfiles.length <= 0){return console.log('No commands found.')}
    else {console.log(jsfiles.length +'commands found...')}

    jsfiles.forEach((f, i) => {
        var cmds = require(`./commands/${f}`);
        console.log(`Command ${f} is loading...`);
        client.commands.set(cmds.configs.command, cmds);

    })

});

client.on("message", (message)=> {
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) {return}
    if(message.author.bot)return;
    let cont = message.content.slice(config.prefix.length).split(" ");
    let args = cont.slice(1);
    var cmd = client.commands.get(cont[0].toLowerCase());
    if(cmd) cmd.run(client, message, args);
});

client.on('message', (message) => {
    if(message.channel.type === "dm") return;
    let command = message.content.toLowerCase()

    if(command === prefix+'help'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'Help', message.author.avatarURL)
        .setColor(0x23272A)
        .setTitle('**Useable Commands!**')
        .setDescription('You can use th following commands:')
        .addField(config.prefix+'help', 'Shows This message.',true)
        .addField(config.prefix+'donate', 'DMs you donate link',true)
        .addField(config.prefix+'shop', `DMs you VxDom shop's link`,true)
        .addField(config.prefix+'checker', 'DMs Fortnite checkers links',true)
        .addField(config.prefix+'socialmedia', 'DMs you VxDom socialmedia links.',true)
        .addField(config.prefix+'proxy', 'DMs you Free Proxies.',true)
        .addField(config.prefix+'combo', 'DMs you Free Combo.',true)
        .addField(config.prefix+'group', 'DMs you our Whatsup Group link.',true)
        .addField(config.prefix+'vxdom', 'DMs you our vxdom invite link.',true)
        .setFooter('Made by BlazerHeat#5947', client.user.avatarURL)
        return message.channel.send(embed);

    }

    if(command === prefix+'donate'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'Donate', message.author.avatarURL)
        .setColor(0x23272A)
        .setThumbnail('https://imgur.com/Sd5N1Br.gif')
        .setTitle('__Click here to donate me!__')
        .setURL('https://www.paypal.me/YouTubeVxDoM')
        return message.author.send(embed);
    }

    if(command === prefix+'shop'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'Shop', message.author.avatarURL)
        .setColor(0x23272A)
        .setTitle('Go To My Shop in The infinit.vps server')
        return message.channel.send(embed);

    }

    if(command === prefix+'checker'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'Checker', message.author.avatarURL)
        .setColor(0x23272A)
        .addField('Fortnite_Keker:', 'https://mega.nz/#F!iF5QWCDY!GfMBaeO-DUwVtas2Pood3A')
        .addField('TCM checker:', 'https://mega.nz/#F!nVhmnQRD!ulm-V-41cp8eMcqDiQyC3A')
        return message.author.send(embed);

    }

    if(command === prefix+'socialmedia'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'SocialMedia', message.author.avatarURL)
        .setColor(0x23272A)
        .setThumbnail('https://imgur.com/EfaTkR5.gif')
        .addField(':red_circle: Youtube', 'https://www.youtube.com/channel/UCeii_THlqMGMcrMlislWNFg?view_as=subscriber')
        .addField(':camera: Instagram', 'https://www.instagram.com/vxdom_yt')
        .addField(':ghost: Snapchat', 'Salman alwan')
        .addField(':floppy_disk: Twitch', 'https://www.twitch.tv/vxdom')
        .addField(':microphone2:️ Discord', '⪓⚡𝓥𝔁𝓓𝓸𝓜⚡⪔#1041')
        .addField(':microphone: Discord Server Link', 'https://discord.gg/MHFndBK')
        return message.author.send(embed);
    }

    if(command === prefix+'proxy'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'Proxy', message.author.avatarURL)
        .setColor(0x23272A)
        .setTitle('Click Here, For Free Proxies!')
        .setURL('https://proxyscrape.com')
        return message.author.send(embed);

    }

    if(command === prefix+'combo'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'Combo', message.author.avatarURL)
        .setColor(0x23272A)
        .setTitle('Click Here, They Post Daily Free Combos')
        .setURL('https://hackinglounge.net')
        return message.author.send(embed);

    }

    if(command === prefix+'group'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'Group', message.author.avatarURL)
        .setColor(0x23272A)
        .setTitle('Click Here, to Join My Group For Daily Giveaways')
        .setURL('https://chat.whatsapp.com/BRVXoqYsj7hLWZSGiHYwkh')
        return message.author.send(embed);
    }

    if(command === prefix+'vxdom'){
        let adv = new Discord.RichEmbed()
            .setAuthor('|>vxdom<|', 'https://imgur.com/a/GQgy1vY.png')
            .setColor(0xFF0000)
            .setTitle('Click Here to Join now !')
            .setURL('https://discord.gg/wUBEQG')
            .setThumbnail('https://imgur.com/JfjGWIv.gif')
            .setImage('https://imgur.com/XGExko3.jpg')
            .setTimestamp()
            .addField('__| LOOKING FOR SOME PRENIUM ACCOUNTS?? |__ ', ':fire: **WE BUY/SELL AND TRADE THEM !** :fire:')
            .addField('**CUSTOM BOTS, CUSTOM ROLES, POLLS,\nINVITE REWARS, AND MUCH MORE** !', '**[!] JOIN BEFORE YOU GET LATE [!]** \n**:fire: STAY HYPED :fire:**')
            .setFooter('Made by BlazerHeat#5947', client.user.avatarURL)
        message.author.send(adv);
        return;
    }


    
    if(message.isMentioned('572143297242333214')){
        if(message.author.id === client.user.id) return;
        return message.channel.send('Stop pinging VxDom you fuck!');
    }

    if(message.isMentioned('393837287948943360')){
        if(message.author.id === client.user.id) return;
        return message.channel.send('Stop pinging Dynasty you fuck!');
    } 

    if(message.isMentioned('502754389539291136')){
        if(message.author.id === client.user.id) return;
        return message.channel.send('Stop pinging Blazer you fuck!');
    }
   return; 
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find(channel => channel.name === '🙃welcome-nibbas🙃');
    if (!channel) return;   
    let memberavatar = member.user.avatarURL;
    let WEmebed = new Discord.RichEmbed()
        .setColor(0x36393F)
        .setThumbnail(memberavatar)
        .setThumbnail(!member.user.avatarURL ? "https://i.imgur.com/Pjvn4E9.png" : memberavatar)
        .addField(':tada: | > Welcome < | :tada:', `Welcome ${member} to ${member.guild.name} Server!\nWe Post Daily Combos And Proxies,\nCurrently we have ${member.guild.memberCount} Members!\n Enjoy your Stay:grin:`)
        .setImage("https://imgur.com/6z1xia9.gif")
    channel.send(WEmebed);
    setTimeout(function() {
        let adv = new Discord.RichEmbed()
        .setAuthor('|>vxdom<|', 'https://imgur.com/PuDorZs.png')
        .setColor(0xFF0000)
        .setTitle('Click Here to Join now !')
        .setURL('https://discord.gg/wUBEQG')
        .setThumbnail('https://imgur.com/JfjGWIv.gif')
        .setImage('https://imgur.com/XGExko3.jpg')
        .setTimestamp()
        .addField('__| LOOKING FOR SOME PRENIUM ACCOUNTS?? |__ ', ':fire: **WE BUY/SELL AND TRADE THEM !** :fire:')
        .addField('**CUSTOM BOTS, CUSTOM ROLES, POLLS,\nINVITE REWARS, AND MUCH MORE** !', '**[!] JOIN BEFORE YOU GET LATE [!]** \n**:fire: STAY HYPED :fire:**')
        .setFooter('Made by vxdom#7777', client.user.avatarURL)
    member.send(adv);
    console.log(`An invite message was sent to ${member.user.username}.`);
}, 10000);
        var role = member.guild.roles.find(role => role.id === '578621209873481728')
        member.addRole(role);
            return;
              
    });

client.on("error", (e) => {
    client.destroy();
    client.login(config.token);
});
client.login(config.token);

bot.login(process.env.token)
