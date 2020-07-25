const Discord = require('discord.js');
const nitro = ["abcd" , "text" , "text"];
var servers = {};
const { prefix, token } = require("./config.json");
const Util = require('discord.js');
const Bot = new Discord.Client;
let msg = "message"; 
const talkedRecently = new Set();
const db = require('quick.db')
const ms = require('parse-ms')
const request = require('request'); 
const cheerio = require('cheerio');
const air = [
  "https://i.gifer.com/Idth.gif",
];

console.log('started ');

Bot.on('message', message => {
  if (message.content === ';server')
    message.channel.send("Bot is running! ✅\n Bot is running with "+ Bot.guilds.cache.size+
   " guilds! 👍");
   if (message.content.startsWith(prefix + 'help')){
    var embed = new Discord.MessageEmbed()
    .setAuthor("Polaris Manager")
    .setDescription ("This bot is only on version 1.0 ")
    .setFooter("rain is hot ngl")
    .addField ("im a cool bot commands below" , "just the basics for now")
    .addField('--------------------------',"  **;help -** *help command* " )
    .addField("--------------------------","  **;warn -** *warns user admin/mod only*  " )
    .addField("--------------------------","  **;kick -** *kicks user admin/mod only* " )
    .addField("--------------------------" , '  **;dm -** *just dm anyone using the bot admin only*')
    .addField("--------------------------" , '  **;purge -** *delete certain messages uwing an amount*')
    .addField("--------------------------" , '  **;ban -** *bans user admin/mod only*')
    .addField("--------------------------" , '  **;mute -** *mute user admin/mod only*')
    .addField("--------------------------" , '  **;server -** *stats of the bot*')
    .addField("--------------------------" , '  **;invite -** *invite the bot*')
    .addField("--------------------------" , '  **;image -**search sfw avatar images/other stuff too*')
    .setThumbnail ("https://media1.tenor.com/images/42a8d4625aeb088c45eba5a84ca36325/tenor.gif?itemid=11193323")
    .setColor ("00ff00");
    setTimeout(() => {  message.channel.send(embed); }, 570);

  }
  if (message.content.startsWith(prefix + 'invite')){
message.channel.send('> **bot can be invited from:** https://mub.me/2YE ')
          }
  if (message.content === ';join') {
message.channel.send(message.author.toString()+ "** Do you want to join our server?** " )
.then(() => {
  message.channel.awaitMessages(response => response.content == 'yes' || response.content == 'no' , {
        max: 1,
        time: 60000,
        errors: ['time'],
    })
    
    .then((collected) => {
        if (collected.first().content == 'yes') {
            message.channel.send(`*welcome to the server wait a few seconds to get full acess*`);
            let mainRole = message.guild.roles.cache.find(role => role.name === "Stars");
      message.member.roles.add(mainRole.id);
      console.log ("done");
        }
        else if(collected.first().content == 'no') {
            message.channel.send(`*loser fine leave and find another server bitch*`);
        }
    })
    .catch(() => {
        message.channel.send(`redo this and say yes or no`);
    });
});       
}

  
if (message.content.startsWith(prefix + 'warn')){
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  if(!message.member.guild.me.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have premission to do that!");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.');
  if (reason.length < 1) return message.reply('You must have a reason for the warning.');

  let dmsEmbed = new Discord.MessageEmbed()
  .setTitle("Warn")
  .setColor("#00ff00")
  .setDescription(`You have been warned on \`${message.guild.name}\``)
  .addField("Warned by", message.author.tag)
  .addField("Reason", reason);

  user.send(dmsEmbed);

  message.delete();
  
  message.channel.send(`${user.tag} has been warned`)

}
if (message.content.startsWith(prefix + 'kick')){
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "291221132256870400") return message.channel.send("Sorry, you don't have permissions to use this!");
    
let xdemb = new Discord.MessageEmbed()
.setColor("#00ff00")
.setTitle("Kick Command")
.addField("Description:", `Kick a member`, true)
.addField("Usage:", "!kick [user] [reason]", true)
.addField("Example:" ,"!kick @rain suck me fatty")

  let member = message.mentions.members.first();
  if(!member) return message.channel.send(xdemb)
    
  if(!member.kickable) 
    return message.channel.send("I cannot kick this user!");
 if(member.user.id === "291221132256870400") return message.channel.send("I can't kick my owner!")

  
  let reason = args.slice(1).join(' ');
  if(!reason) {
    res = "No reason given";
  }
  else {
    res = `${reason}`
  }
  
 member.kick(reason)
    .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));

    let kick = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setTitle(`Kick | ${member.user.tag}`)
    .addField("User", member, true)
    .addField("Moderator", message.author, true)
    .addField("Reason", res)
    .setTimestamp()
    .setFooter(member.id)

    message.channel.send(kick)
    const channel = message.guild.channels.cache.find(ch => ch.name === 'tlogs');
    let xdemby = new Discord.MessageEmbed()
    .setColor("WHITE")
    .setTitle("Kick LOG")
    .addField(" **KICK MEMBER:** ", ` ${member.user.tag} has been kicked" `)
    .addField("**KICKED BY:**", message.author , true)
    .setThumbnail('https://media0.giphy.com/media/rLNj012Rdd1G8/source.gif')
    .setTimestamp()
    channel.send(xdemby)

}
if (message.content.startsWith(prefix + 'ban')){
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  let xdemb = new  Discord.MessageEmbed()
          .setColor("#00ff00")
          .setTitle("Ban Command")
          .addField("Description:", `Ban a member`, true)
          .addField("Usage:", `!ban [user] [reason]`, true)
          .addField("Example:", `!ban @rain spam`)
  
          if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "291221132256870400") return message.channel.send("Sorry you don't have permission to use this!");
  
          let member = message.mentions.members.first();
          if(!member) return message.channel.send(xdemb)
          if(!member.bannable) return message.channel.send("I can't ban this user!")
          if(member.user.id === "291221132256870400") return message.channel.send("I can't ban my owner!")
  
          if(member.id === message.author.id) return message.channel.send("You can't ban your self")
  
          let reason = args.slice(1).join(" ");
  
          if(!reason) {
              res = "No reason given";
          } else {
              res = reason
          }
  
            member.ban(reason).catch(error => message.channel.send(`Sorry, I coldn't ban because of: ${error}`));
  
          let bean = new  Discord.MessageEmbed()
          .setColor("#00ff00")
          .setTitle(`Ban | ${member.user.tag}`)
          .addField("User", member, true)
          .addField("Moderator", message.author, true)
          .addField("Reason", res)
          .setTimestamp()
  
          message.channel.send(bean)
          const channel = message.guild.channels.cache.find(ch => ch.name === 'tlogs');
          let xdemby = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle("BAN LOG")
          .addField(" **BAN:** ", ` ${member.user.tag} has been banned" `)
          .addField("**Ban BY:**", message.author , true)
          .setThumbnail('https://media0.giphy.com/media/rLNj012Rdd1G8/source.gif')
          .setTimestamp()
          channel.send(xdemby)
        }

if(message.content.startsWith(prefix + 'dm')){ 
   let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);         
  let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
  if (!dUser) return message.channel.send("Can't find user!")
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You can't you that command!")
  let dMessage = args.join(" ").slice(22);
  if(dMessage.length < 1) return message.reply('You must supply a message!')

  dUser.send(`${dUser} hey there: ${dMessage}`)
 

  message.author.send(`${message.author} You have sent your message to ${dUser}`)
}
if(message.content.includes('<@462019251897761792>')){
  if (message.author.id === '462019251897761792' ) return console.log('ignore');
 message.channel.send(`;dm  ${message.author} Please do not Ping/Dm Rituazl unless their is a valid reason. If you keep doing this you will be warned`)
 setTimeout(() => {  message.channel.bulkDelete(3); }, 570); 
}

if (message.content.startsWith(prefix + 'ping')){
message.channel.send('> **PONG ' + Math.floor(Math.random() *10) + '**')

}
if(message.content.length >= 500 ){
  if (message.author.bot ) return console.log('working');
  if (message.author.id === '462019251897761792' ) return console.log('ignore');
 message.channel.send(`;warn ${message.author} wall spam`)
}
if (message.content.includes('wall spam')){
  let user= message.mentions.users.first()
  message.channel.send(`> ${user} Wall text is not allowed in Polaris. You have been warned, if you continue to do this you will get muted.`)
}
if(message.content.startsWith(prefix + 'purge')){
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  if(args[0] == "help"){
    let helpembxd = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .addField("clear Command", "Usage: ;purge <amount>")

    message.channel.send(helpembxd);
  
    return;
  } 


  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have premssions to do that!");
  if(!args[0]) return message.channel.send("Please enter a number of messages to clear! `Usage: !clear <amount>`");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**__Cleared ${args[0]} messages.__**`).then(msg => msg.delete(2000));
});


}
if(message.content.startsWith(prefix + 'mute')) {
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  let author1 = message.author.username;
  let user = message.mentions.users.first();
  if(!user) return message.reply("you did not specify who you would like to mute");

  //checks if the users is trying to fight themselves
  if(user.id == message.author.id) return message.reply('you cannot mute yourself!');

  //checks if the user is trying to fight the bot
  if(user.bot ==  true)
      return message.reply('you cannot mute a bot!')
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have premssions to do that!");
 
  //saves the two user ids to variables
  var fighter1 = message.author.id;
  var fighter2 = user.id;

  //announces challenge and awaits response
  var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
  if(!person) return  message.reply("I CANT FIND THE USER " + person)

  let role = message.guild.roles.cache.find(role => role.name === "Muted");


  if(!role) return message.reply("Couldn't find the mute role.")


  person.roles.add(role.id);


  message.channel.send(`${person} has now been muted`)

                  const channel = message.guild.channels.cache.find(ch => ch.name === 'tlogs');
                  let xdemby = new Discord.MessageEmbed()
                  .setColor("#00ff00")
                  .setTitle("Mute LOG")
                  .addField(" **Mute:** ", ` ${person} has been muted" `)
                  .addField("**Muted BY:**", `${message.author}`,true)
                  .setThumbnail('https://media0.giphy.com/media/rLNj012Rdd1G8/source.gif')
                  .setTimestamp()
                  channel.send(xdemby)
              
    }
    if(message.content.startsWith(prefix + 'unmute')) {
      let messageArray = message.content.split(" ");
      let command = messageArray[0];
      let args = messageArray.slice(1);
      let author1 = message.author.username;
      let user = message.mentions.users.first();
      if(!user) return message.reply("you did not specify who you would like to unmute");
    
      //checks if the users is trying to fight themselves
      if(user.id == message.author.id) return message.reply('you cannot unmute yourself!');
    
      //checks if the user is trying to fight the bot
      if(user.bot ==  true)
          return message.reply('you cannot unmute a bot!')
      if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have premssions to do that!");
     
      //saves the two user ids to variables
      var fighter1 = message.author.id;
      var fighter2 = user.id;
    
      //announces challenge and awaits response
      var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
      if(!person) return  message.reply("I CANT FIND THE USER " + person)
    
      let role = message.guild.roles.cache.find(role => role.name === "Stars");
      let mainrole = message.guild.roles.cache.find(role => role.name === "Muted");
    
      if(!role) return message.reply("Couldn't find the unmute role.")
    
    
      person.roles.add(role.id);
      person.roles.remove(mainrole);
    
    
      message.channel.send(`${person} has now been unmuted`)
    
                      const channel = message.guild.channels.cache.find(ch => ch.name === 'tlogs');
                      let xdemby = new Discord.MessageEmbed()
                      .setColor("#00ff00")
                      .setTitle("Unute LOG")
                      .addField(" **UNmute:** ", ` ${person} has been unmuted" `)
                      .addField("**Unuted BY:**", ` ${message.author}`, true)
                      .setThumbnail('https://media0.giphy.com/media/rLNj012Rdd1G8/source.gif')
                      .setTimestamp()
                      channel.send(xdemby)
                      
        }

if (message.content.startsWith(prefix + 'unban')){
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  
        const embedMsg = new Discord.MessageEmbed()
        .setColor('#0000ff')
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setThumbnail(message.author.displayAvatarURL)
        .setTimestamp()
        .setFooter('botname', Bot.user.displayAvatarURL);
    let member = message.mentions.members.first() || args[0]
    if (!message.member.hasPermission('BAN_MEMBERS')) {
        embedMsg.setDescription(`You don't have permission to unban!`);
        return message.channel.send(embedMsg);
    }
    if (!args.length > 2) {
        embedMsg.setDescription('^unban takes at least one argument! the proper usage is ^unban <mention> ');
        return message.channel.send(embedMsg);
    }


    message.guild.members.unban(member)
        .then(() => {
            embedMsg.setDescription(`${message.author} you have succesfully unbanned member`);
            let xdemby = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("unban LOG")
            .addField(" **unban:** ", ` <@${member}> has been Unbanned" `)
            .addField("**UNBANNED BY:**", `${message.author}`,true)
            .setThumbnail('https://media0.giphy.com/media/rLNj012Rdd1G8/source.gif')
            .setTimestamp()
            channel.send(xdemby)
            return message.channel.send(embedMsg);
        })
        .catch((err) => {
            embedMsg.setDescription(`${message.author} you need to put their id stupid lmao`);
            console.log(err);
            return message.channel.send(embedMsg);
        });
}

  var parts = message.content.split(" "); // Splits message into an array for every space, our layout: "<command> [search query]" will become ["<command>", "search query"]

  /* Simple command manager */
  if (parts[0] === ";image") { // Check if first part of message is image command

      // call the image function
      image(message, parts); // Pass requester message to image function

  }

function image(message, parts) {

  /* extract search query from message */

  var search = parts.slice(1).join(" "); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"

  var options = {
      url: "http://results.dogpile.com/serp?qc=images&q=" + search,
      method: "GET",
      headers: {
          "Accept": "text/html",
          "User-Agent": "Chrome"
      }
  };
  request(options, function(error, response, responseBody) {
      if (error) {
          // handle error
          return;
      }

      

      $ = cheerio.load(responseBody); 

      var links = $(".image a.link");

      var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

      
      if (!urls.length) {
          
          return;
      }

      //urls[0]
      message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
  });

}

Bot.on("messageDelete", (messageDelete) => {
      const channel = messageDelete.guild.channels.cache.find(ch => ch.name === 'tlogs');
      if (messageDelete.author.bot){
        return console.log('bot msg');
        
      }
      if(message.member.hasPermission('MANAGE_CHANNELS')) return;
      let xdembx = new Discord.MessageEmbed()
.setColor("#00ff00")
.setTitle("Message Deleted LOG")
.addField(" **Message:** ", ` ${messageDelete.content}" `)
.addField("**Message Deleted BY:**", `${messageDelete.author}`)
.setThumbnail('https://media0.giphy.com/media/rLNj012Rdd1G8/source.gif')
.setTimestamp()
      channel.send(xdembx)
     
     }); 
     

});


Bot.login("NzM1NjU0MzM2ODU1ODAxOTE2.XxjZow.2hgtK-cZDBaIYjEdtbPpIg8yvDo");
