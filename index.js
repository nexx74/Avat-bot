const Discord = require('discord.js');
const nitro = ["abcd" , "text" , "text"];
var servers = {};
const { prefix, token } = require("./config.json");
const Util = require('discord.js');
const client = new Discord.Client;
let msg = "message"; 
const talkedRecently = new Set();
var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */
const randomNumber = Math.floor(Math.random()*100) 
client.on('ready' , ()=>{
  console.log('started ' + client.user.tag);
  client.user.setActivity('ATLA')
});

require('events').EventEmitter.prototype._maxListeners = 100;

const fire = [
  "https://i.pinimg.com/originals/f2/98/00/f29800b971bd5e3d5a1222914687378d.gif",
];
const air = [
  "https://i.gifer.com/Idth.gif",
];
const water = [
  "https://media1.giphy.com/media/iA6uDPHzvUVNK/source.gif",
];
const earth = [
  "https://i.pinimg.com/originals/d0/ab/49/d0ab4964e310fdab7df761747896ddc6.gif",

];
let counter = "0";
let counterr =  Math.floor(Math.random()*10);




client.on('message', message => {
  if (message.content === '?server')
    message.channel.send("Bot is running! ✅\n Bot is running with "+client.guilds.cache.size+
   " guilds! 👍");
});
client.on('message', (message) => {
  
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'help')){
      var embed = new Discord.MessageEmbed()
      .setAuthor("Avatar Bot")
      .setDescription ("This bot is only on version 1.0 ")
      .setFooter("Nex#6116")
      .addField ("im a cool bot commands below" , "didnt mean to call you stupid btw")
      .addField('coomands', '*{WELCOME TO ------------ SERVER}* ' )
      .addField('--------------------------',"*{?air - join the air nation}* " )
      .addField("--------------------------","*{?fire - join the fire nation }*  " )
      .addField("--------------------------","*{?water - join the water nation }* " )
      .addField("--------------------------" , '*{?earth - join the earth nation }*')
      .addField("--------------------------" , '*{?profire - stats after you join FIRE NATION}*')
      .addField("--------------------------" , '*{?airfire - stats after you join AIR NATION }*')
      .addField("--------------------------" , '*{?proearth -stats after you join EARTH NATION}*')
      .addField("--------------------------" , '*{?prowater - stats after you join WATER NATION}*')
      .addField("--------------------------" , '*{?invite - invite link for the bot}*')
      .setThumbnail ("https://media1.tenor.com/images/42a8d4625aeb088c45eba5a84ca36325/tenor.gif?itemid=11193323")
      .setColor ("00ff00");
      message.channel.send("Heres help <@" + message.author.id + ">")
      setTimeout(() => {  message.channel.send(embed); }, 570);

      if (message.content.startsWith(prefix + 'help 2')){
        var embed = new Discord.MessageEmbed()
        .setAuthor("Avatar Bot")
        .setDescription ("This bot is only on version 1.0 ")
        .setFooter("Nex#6116")
        .addField ("im a cool bot commands below" , "just page 2 lol")
        .addField('coomands', '*{WELCOME TO ------------ SERVER}* ' )
        .addField('--------------------------',"*{?hp - shows your hp dont worry its for the future * " )
        .addField("--------------------------","*{?fight -im sure you can figure out what this dose}*  " )
        .addField("--------------------------","*{?punch - animated punching of someone }* " )
        .addField("--------------------------" , '*{?hug - animited hugging of someone atla of course }*')
        .addField("--------------------------" , '*{?kiss - just kiss your crush dude just do it}*')
        .addField("--------------------------" , '*{?attack - attack someone during a fight}*')
        .addField("--------------------------" , '*{?defend - defend yourself during a fight}*')
        .addField("--------------------------" , '*{?server - stats of the bot}*')
        .addField("--------------------------" , '*{?image - search sfw avatar images/other stuff too}*')
        .setThumbnail ("https://media1.tenor.com/images/42a8d4625aeb088c45eba5a84ca36325/tenor.gif?itemid=11193323")
        .setColor ("00ff00");
        setTimeout(() => {  message.channel.send(embed); }, 570);
  
      }
}

});
client.on("ready", function() {
  console.log("Image searcher loaded");
});

client.on("message", function(message) {

  var parts = message.content.split(" "); // Splits message into an array for every space, our layout: "<command> [search query]" will become ["<command>", "search query"]

  /* Simple command manager */
  if (parts[0] === "?image") { // Check if first part of message is image command

      // call the image function
      image(message, parts); // Pass requester message to image function

  }

});

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



client.on('message', message => {
  if (message.content === '?fire') {
      var response = fire [Math.floor(Math.random()*fire .length)];
      message.channel.send(response).then(msg => {
        msg.delete({ timeout: 15000 })
      });
  message.channel.send(message.author.toString()+ "** Do you want to join fire?** ")  .then(() => {
    message.channel.awaitMessages(response => response.content == 'yes' || response.content == 'no' , {
          max: 1,
          time: 60000,
          errors: ['time'],
      })
      
      .then((collected) => {
          if (collected.first().content == 'yes') {
              message.channel.send(`**welcome to the fire nation the only thing brighter then our bending is out future**`);
              let mainRole = message.guild.roles.cache.find(role => role.name === "fire");
        message.member.roles.add(mainRole.id);
        console.log ("done");
          }
          else if(collected.first().content == 'no') {
              message.channel.send(`** im sorry you didnt have the fire in your heart to join us**`);
          }
      })
      .catch(() => {
          message.channel.send(`No response`);
      });
  });       
}
  if (message.content === '?air') {
      var response = air [Math.floor(Math.random()*air .length)];
      message.channel.send(response).then(msg => {
        msg.delete({ timeout: 15000 })
      });
  message.channel.send(message.author.toString()+ "** Do you want to join air?** " )
  .then(() => {
    message.channel.awaitMessages(response => response.content == 'yes' || response.content == 'no' , {
          max: 1,
          time: 60000,
          errors: ['time'],
      })
      
      .then((collected) => {
          if (collected.first().content == 'yes') {
              message.channel.send(`*welcome to the air nation chill out and enjoy the air*`);
              let mainRole = message.guild.roles.cache.find(role => role.name === "air");
        message.member.roles.add(mainRole.id);
        console.log ("done");
          }
          else if(collected.first().content == 'no') {
              message.channel.send(`*maybe the water nation will be your fate sorry to see you go*`);
          }
      })
      .catch(() => {
          message.channel.send(`No response`);
      });
  });       
}
  if (message.content === '?earth') {
      var response = earth [Math.floor(Math.random()*earth .length)];
      message.channel.send(response).then(msg => {
        msg.delete({ timeout: 15000 })
      });
  message.channel.send(message.author.toString()+ "** Do you want to join earth?** ")
  .then(() => {
    message.channel.awaitMessages(response => response.content == 'yes' || response.content == 'no' , {
          max: 1,
          time: 60000,
          errors: ['time'],
      })
      
      .then((collected) => {
          if (collected.first().content == 'yes') {
              message.channel.send(`**welcome to the earth nation where out rich are the strongest and our weak are the peasents**`);
              let mainRole = message.guild.roles.cache.find(role => role.name === "earth");
        message.member.roles.add(mainRole.id);
        console.log ("done");
          }
          else if(collected.first().content == 'no') {
              message.channel.send(`the rock is the strongest of all elements good luck travler`);
          }
      })
      .catch(() => {
          message.channel.send(`No response`);
      });
  });       
 
}
  if (message.author.bot) return;
  if (message.content === '?water') {
      var response = water [Math.floor(Math.random()*water .length)];
      message.channel.send(response).then(msg => {
        msg.delete({ timeout: 15000 })
      });
  message.channel.send(message.author.toString()+ "** Do you want to join water?** " )
  .then(() => {
    message.channel.awaitMessages(response => response.content == 'yes' || response.content == 'no' , {
          max: 1,
          time: 60000,
          errors: ['time'],
      })
      
      .then((collected) => {
          if (collected.first().content == 'yes') {
              message.channel.send(`*welcome to water nation where we flow like the air but are stron like the earth*`);
              let mainRole = message.guild.roles.cache.find(role => role.name === "water");
        message.member.roles.add(mainRole.id);
        console.log ("done");
          }
          else if(collected.first().content == 'no') {
              message.channel.send(`water is mighty like a rock and as soft as a feather we are sorry you did not join us.`);
          }
      })
      .catch(() => {
          message.channel.send(`No response`);
      });
  });       
}
if(message.content.startsWith(prefix + 'punch')) {
  //checks if the username to fight is in the message
  let author1 = message.author.username;
  let user = message.mentions.users.first();
  if(!user) return message.reply("pick someone to punch stupid :O ");

  //checks if the users is trying to fight themselves
  if(user.id == message.author.id) return message.reply('sorry you cant punch yourself :/ ');

  //checks if the user is trying to fight the bot
  if(user.bot ==  true)
      return message.reply('you cannot punch bots ');

  //saves the two user ids to variables
  var fighter1 = message.author.id;
  var fighter2 = user.id;

  //announces challenge and awaits response
  var challenged = user.toString();
  message.channel.send(`?image avatar punch`).then(msg => {
    msg.delete({ timeout: 1000 })
  });
  message.channel.send(`${challenged}, ${author1} has punched you, do you want to punch them back say yes or no`)
      .then(() => {
        message.channel.awaitMessages(response => response.content == 'yes' && response.author.id == fighter2 || response.content == 'no' && response.author.id == fighter2, {
              max: 1,
              time: 60000,
              errors: ['time'],
          })
          
          .then((collected) => {
              if (collected.first().content == 'yes') {
                message.channel.send(`?image avatar punch`).then(msg => {
                  msg.delete({ timeout: 1000 })
                });
                message.channel.send(`enjoy it >:) <3`);
                
                
              }
              else if(collected.first().content == 'no') {
                  message.channel.send(`weakling ${author1}`);
              }
          })
          .catch(() => {
              message.channel.send(`${author1} not even gonna repsond to me ok`);
          });
      });      
  }
if(message.content.startsWith(prefix + 'kiss')) {
  //checks if the username to fight is in the message
  let author1 = message.author.username;
  let user = message.mentions.users.first();
  if(!user) return message.reply("pick someone to kiss silly :3 ");

  //checks if the users is trying to fight themselves
  if(user.id == message.author.id) return message.reply('sorry you cant kiss yourself :/ ');

  //checks if the user is trying to fight the bot
  if(user.bot ==  true)
      return message.reply('you can only kiss me >: | ');

  //saves the two user ids to variables
  var fighter1 = message.author.id;
  var fighter2 = user.id;

  //announces challenge and awaits response
  var challenged = user.toString();
  message.channel.send(`?image avatar kiss`).then(msg => {
    msg.delete({ timeout: 1000 })
  });
  message.channel.send(`${challenged}, ${author1} has kissed you, do you want to kiss them back say yes or no`)
      .then(() => {
        message.channel.awaitMessages(response => response.content == 'yes' && response.author.id == fighter2 || response.content == 'no' && response.author.id == fighter2, {
              max: 1,
              time: 60000,
              errors: ['time'],
          })
          
          .then((collected) => {
              if (collected.first().content == 'yes') {
                message.channel.send(`?image avatar hug`).then(msg => {
                  msg.delete({ timeout: 1000 })
                });
                message.channel.send(`cute <3`);
                
                
              }
              else if(collected.first().content == 'no') {
                  message.channel.send(`rip sorry no kiss for you ${author1}`);
              }
          })
          .catch(() => {
              message.channel.send(`${author1} not even gonna repsond to me ok`);
          });
      });      
  }

if(message.content.startsWith(prefix + 'hug')) {
  //checks if the username to fight is in the message
  let author1 = message.author.username;
  let user = message.mentions.users.first();
  if(!user) return message.reply("pick someone to hug fool >:? ");

  //checks if the users is trying to fight themselves
  if(user.id == message.author.id) return message.reply('you cannot hug yourself!');

  //checks if the user is trying to fight the bot
  if(user.bot ==  true)
      return message.reply('you cannot hug a bot! Well maybe me but no one else');

  //saves the two user ids to variables
  var fighter1 = message.author.id;
  var fighter2 = user.id;

  //announces challenge and awaits response
  var challenged = user.toString();
  message.channel.send(`?image avatar hug`).then(msg => {
    msg.delete({ timeout: 1000 })
  });
  message.channel.send(`${challenged}, ${author1} has huged you, do you want to hug them back say yes or no `)
      .then(() => {
        message.channel.awaitMessages(response => response.content == 'yes' && response.author.id == fighter2 || response.content == 'no' && response.author.id == fighter2, {
              max: 1,
              time: 60000,
              errors: ['time'],
          })
          
          .then((collected) => {
              if (collected.first().content == 'yes') {
                message.channel.send(`?image avatar hug`).then(msg => {
                  msg.delete({ timeout: 1000 })
                })
                message.channel.send(`aww so sweet`);
                
                
              }
              else if(collected.first().content == 'no') {
                  message.channel.send(`they dont want to hug you back ${author1}`);
              }
          })
          .catch(() => {
              message.channel.send(`${author1} I dont think they are online but if they are they just ghosted you`);
          });
      });      
  }
if(message.content.startsWith(prefix + 'fight')) {
  //checks if the username to fight is in the message
  let author1 = message.author.username;
  let user = message.mentions.users.first();
  if(!user) return message.reply("you did not specify who you would like to fight!");

  //checks if the users is trying to fight themselves
  if(user.id == message.author.id) return message.reply('you cannot fight yourself!');

  //checks if the user is trying to fight the bot
  if(user.bot ==  true)
      return message.reply('you cannot fight a bot!')

  //saves the two user ids to variables
  var fighter1 = message.author.id;
  var fighter2 = user.id;

  //announces challenge and awaits response
  var challenged = user.toString();
  message.channel.send(`${challenged}, ${author1} has challenged you to a duel. Do you accept the challenge, yes or no?`)
      .then(() => {
        message.channel.awaitMessages(response => response.content == 'yes' && response.author.id == fighter2 || response.content == 'no' && response.author.id == fighter2, {
              max: 1,
              time: 60000,
              errors: ['time'],
          })
          
          .then((collected) => {
              if (collected.first().content == 'yes') {
                  message.channel.send(`${challenged} has accepted the challenge! Do ? attack to do the first damage and to become the attacker do ?hp to check your health`);
              }
              else if(collected.first().content == 'no') {
                  message.channel.send(`they have rejected the fight carry on`);
              }
          })
          .catch(() => {
              message.channel.send(`${author1} No response. Fight has been cancelled.`);
          });
      });      
  }
  if (message.content === '?hp') {
    let helpEmbed = new Discord.MessageEmbed()
    .setAuthor("HEALTH STATS")
    .setDescription ("this is your health bar during the fight they will reset afterwards")
    .setFooter("Nex")
    .addField('**HP**', counter)
    .setThumbnail ("https://i.ya-webdesign.com/images/hp-bar-png-5.png")
    .setColor ("00ff00");
message.channel.send(helpEmbed)
  
}
let m = message.channel.send
let ATTACKER = '<@'+ message.author.id + '>'

  if (message.content === '?defend') {
    let helpEmbed = new Discord.MessageEmbed()
    .setTitle('**DEFENDER**')
    .addField('*you are now defending defender*' , '**here is your HP make it to 3 to win**')
    .addField( counter , "*HP*" )
    .setThumbnail("https://i.ya-webdesign.com/images/hp-bar-png-5.png")
    .setFooter('Nex')

if (counter == '3'){
  message.channel.send('**FIGHT OVER DEFENDER WINS**');
  message.channel.send('?image victory warrior').then(msg => {
    msg.delete({ timeout: 1000 })
  });
  counter==0
  message.channel.send('```fight someone else or cry by doing ?image cry```');
  console.log(counter)
}
else {
  message.channel.send('?image atla bending defend').then(msg => {
    msg.delete({ timeout: 1000 })
  });
  message.channel.send(ATTACKER);
  setTimeout(() => {message.channel.send(helpEmbed);
 }, 5000 );
 counter ++
  console.log(counter)
}
  
}
if (message.content === '?attack') {
  let helppEmbed = new Discord.MessageEmbed()
  .setTitle('**ATTACKER**')
  .addField('*you are now the ATTACKER*' , '**you need to get their HP to -3 TO WIN **')
  .addField( counter, 'your HP')
  .setThumbnail("https://i.ya-webdesign.com/images/hp-bar-png-5.png")
  .setFooter('Nex')

if (counter == '-3'){
  message.channel.send('**FIGHT OVER ATTACKER WINS**');
  message.channel.send('?image victory warrior').then(msg => {
    msg.delete({ timeout: 1000 })
  });
  counter==0
  message.channel.send('```fight someone else or cry by doing ?image cry```')
  console.log(counter)
}
else {
  message.channel.send('?image atla bending defend').then(msg => {
    msg.delete({ timeout: 1000 })
  });
  message.channel.send(ATTACKER);
  setTimeout(() => {message.channel.send(helppEmbed);
 }, 5000 );
 counter --
  console.log(counter)
}
}
if (message.content === '?invite') {
  message.channel.send('https://discord.com/api/oauth2/authorize?client_id=728030155074961449&permissions=8&scope=bot');
}

  if (message.content.startsWith(prefix + 'prowater')){
    var embed = new Discord.MessageEmbed()
    .setAuthor("WATER NATION")
    .setDescription ("Welcome to the water nation flow with us in this stream of power")
    .setFooter("Nex#7086")
    .addField ("**Fighting Stats**" , Math.floor(Math.random()*100 ) )
    .addField('**Health Stats**' , Math.floor(Math.random()*100 ) )
    .addField ("**Bending Stats**" , Math.floor(Math.random()*100 )  )
    .setThumbnail ("https://media1.tenor.com/images/e398f095e8a8ef816133e06d7719b1a9/tenor.gif?itemid=3850242")
    .setColor ("00FFFF");
    message.channel.send("Here are your levels for today <@" + message.author.id + ">")
  
let roleID = message.guild.roles.cache.find(role => role.name === "water");
if(!message.member.roles.cache.find(r => r.name === "water")) {
  console.log(`nope nadda`);
  message.channel.send("wrong nation or pick one");
} else {
  console.log(`done`);
   message.channel.send(embed);
    }
}
 

  });
 
  client.on('message', message => {
    if (message.content.startsWith(prefix + 'proearth')){
      var embed = new Discord.MessageEmbed()
      .setAuthor("EARTH NATION")
      .setDescription ("Welcome to the earth nation the only things stronger then our rocks is our hearts")
      .setFooter("Nex#7086")
      .addField ("**Fighting Stats**" , ath.floor(Math.random()*100 ) )
      .addField('**Health Stats**' , Math.floor(Math.random()*100 ) )
      .addField ("**Bending Stats**" , Math.floor(Math.random()*100 ) )
      .setThumbnail ("https://media.tenor.com/images/a093a850097b7e0d0419194a0d8472bb/raw")
      .setColor ("00ff00");
      message.channel.send("Hey there <@" + message.author.id + ">")
      let roleID = message.guild.roles.cache.find(role => role.name === "earth");
      if(!message.member.roles.cache.find(r => r.name === "earth")) {
        console.log(`nope nadda`);
        message.channel.send("wrong nation or pick one");
      } else {
        console.log(`done`);
         message.channel.send(embed);
          }
      }
      
        });
    
    client.on('message', message => {
      
      if (message.content.startsWith(prefix + 'profire')){
        var embed = new Discord.MessageEmbed()
        .setAuthor("FIRE NATION")
        .setDescription ("Welcome to the fire nation you have chosen well here are you basic stats")
        .setFooter("Nex#7086")
        .addField ("**Fighting Stats**" , Math.floor(Math.random()*100 ) )
        .addField('**Health Stats**' ,Math.floor(Math.random()*100 ) )
        .addField ("**Bending Stats**" , Math.floor(Math.random()*100 ) )
        .setThumbnail ("https://media.tenor.com/images/e6ed119d9d032d08279e03834b265bc9/tenor.gif")
        .setColor ("FF8C00");
        message.channel.send("Hey there <@" + message.author.id + ">")
        let roleID = message.guild.roles.cache.find(role => role.name === "fire");
        if(!message.member.roles.cache.find(r => r.name === "fire")) {
          console.log(`nope nadda`);
          message.channel.send("wrong nation or pick one");
        } else {
          console.log(`done`);
           message.channel.send(embed);
            }
        }
          
        
          });

client.on('message', message => {
 
if (message.content.startsWith(prefix + 'airfile')){
  var embed = new Discord.MessageEmbed()
  .setAuthor("AIR NATION")
  .setDescription ("Welcome to the air nation let the air you breath create the flow of wind")
  .setFooter("Nex#7086")
  .addField ("**Fighting Stats**" , Math.floor(Math.random()*100 ) )
  .addField('**Health Stats**' , Math.floor(Math.random()*100 ) )
  .addField ("**Bending Stats**" , Math.floor(Math.random()*100 ) )
  .setThumbnail ("https://media.tenor.com/images/3d4d13834ff07d5683ba185ee4387536/tenor.gif")
  .setColor ("F0F8FF");
  message.channel.send(" <@" + message.author.id + ">")
  let roleID = message.guild.roles.cache.find(role => role.name === "air");
  if(!message.member.roles.cache.find(r => r.name === "air")) {
    console.log(`nope nadda`);
    message.channel.send("wrong nation or pick one");
  } else {
    console.log(`done`);
     message.channel.send(embed);
      }
  }
  
    
    });




client.login("NzI4MDMwMTU1MDc0OTYxNDQ5.XwOZIw.pyvoNv2L7U98JMfbFzUlZxow8Gs");
