const Discord = require('discord.js');
const nitro = ["abcd" , "text" , "text"];
var servers = {};
const { prefix, token } = require("./config.json");
const Util = require('discord.js');
const client = new Discord.Client;
let msg = ""; 
const helloResponses = ["hi pp is googoo", "i like men do you", "tee tee hee hee",
"What do you call a five year old with no friends? A sandy hook survivor.",
"Jesus Christ fed 2,000 people with 5 loaves of bread and 2 fish, but Adolf Hitler made 6 million Jews toast.",
"What's got 5 arms, 3 legs and 2 feet? The finish line at the Boston Marathon.",
"How do Ethiopians celebrate their kids first birthday? By putting flowers on the grave.",
"How did Rihanna find out Chris Brown was cheating on her? She found another woman's lipstick on his knuckles.",
"How can you tell if your wife is dead? The sex is the same but the dishes start piling up",
"What is a pedophiles favorite part about Halloween? Free delivery.",
"How do you kill a redneck? Wait 'till he fucks his sister then cut the brakes on his house.",
"What is a pedophiles favorite part about Halloween? Free delivery.",
"How do you kill a redneck? Wait 'till he fucks his sister then cut the brakes on his house.",
];
const JustChat = ["hi",








];



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
    console.log('started ' + client.user.tag);
    client.user.setActivity('version 1.0')
});


client.on('message', (message) => {
   

    if (message.author.bot) return;

    if (message.content.startsWith(prefix + 'start')){
            message.channel.send("> **WELCOME** <@" + message.author.id + ">", {files: ["./images/tenor.gif"]});
         
    }
    if (message.content.startsWith(prefix + 'start')){
    setTimeout(() => {  message.channel.send("> **DONE**") }, 7570)
    }
    if (message.content.startsWith(prefix + 'help')){
        var embed = new Discord.MessageEmbed()
        .setAuthor("GXD bot")
        .setDescription ("This bot is only on version 1.0 and has not been finshed join our support server and request what you want")
        .setFooter("Nex#6116")
        .addField ("this help isnt very cool lmao" , "welp try talking to the bot")
        .addField('coomands', '**{?nitro - for nitro}** **{?funny - joke about your mom}** **{?help - help lol}**  **{?nickname - chnage everyones nickname}** ' )
        .setThumbnail ("https://media1.tenor.com/images/42a8d4625aeb088c45eba5a84ca36325/tenor.gif?itemid=11193323")
        .setColor ("00ff00");
        message.channel.send("Hey there <@" + message.author.id + ">")
        setTimeout(() => {  message.channel.send(embed); }, 2070);
    

}


    if (message.content.startsWith(prefix + 'nitro')){
        var embed = new Discord.MessageEmbed()
        .setAuthor("Nex#6116")
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

 if (message.content.startsWith(prefix + "joke")) {
  var embed = new Discord.MessageEmbed()
  .setAuthor("GXD bot")
  .setDescription ("wokring on this one")
  .setFooter("Nex#6116")
  .addField ("Jokes are going to avaiable soon")
  .setThumbnail ("https://media1.tenor.com/images/8055d22f534c0792eb170d18cf4a3e2b/tenor.gif?itemid=13300784")
  .setColor ("00ff00");
  message.channel.send("Hey there <@" + message.author.id + ">")
  setTimeout(() => {  message.channel.send(embed); }, 2070);

} 

});
client.on('message', message => {
    if (message.content === 'help') {
        let helpEmbed = new Discord.MessageEmbed()
        .setTitle('**GXD**')
        .addField('do ?help stupid')
      message.channel.send(helpEmbed);
    }
});

client.on('message' , (receivedMessages) => {
    if (receivedMessages.author == client.user) {
            return
    }
    if (receivedMessages.content === 'dark')
    var response = helloResponses [Math.floor(Math.random()*helloResponses .length)];
    receivedMessages.channel.send(receivedMessages.author.toString()+ " " + response)

})

client.on('message' , (receivedMessages) => {
    if (receivedMessages.author == client.user) {
            return
    }
    if (receivedMessages.content === 'chat')
    var responses = JustChat [Math.floor(Math.random()*JustChat .length)];
    receivedMessages.channel.send(receivedMessages.author.toString()+ " " + responses)
})

client.on('message', message => {
    if (message.content === '?funny') {
        let helpEmbed = new Discord.MessageEmbed()
        .setTitle('**GXD**')
        .addField('do ?help stupid')
      message.channel.send(helpEmbed);
    }
});


client.login("NzI2NTMyNzk3Njk0NjA3NDAx.Xvot1Q.eBnJtxNeo8RttUkhVItHpBXS18w");