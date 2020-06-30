const Discord = require('discord.js');
const nitro = ["abcd" , "text" , "text"];
var servers = {};
const { prefix, token } = require("./config.json");
const Util = require('discord.js');
const client = new Discord.Client;
let msg = ""; 
var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */

 
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
" Why do Jews have big noses? Because air is free.",
"What happened when the jew walked into the wall with a hard-on? He broke his nose. ",
"How long does it take for a black woman to take a shit? Nine months.",
" How do you get a nun pregnant? Dress her up like an altarboy.",
"What do you call 40 mexicans buried up to their neck in sand? A spicket fence. ",
"How many women does it take to screw in a lightbulb? None,they just sit in the dark and bitch. ",
" Did you hear about the two car pile up in Mexico? 200 Mexicans died.",
"What kind of file do you need to turn a 15mm hole into a 40mm hole? A pedophile. ",
" What's a pedophile's favorite part of a hockey game? Before the First Period.",
" How do you swat 200 flies at one time? Hit an Ethiopian in the face with a frying pan.",
" What is a redneck virgin? A seven year old that can run faster than her brothers.",



];
const JustChat = ["hi",
"Success is walking from failure to failure with no loss of enthusiasm.",
"Try not to become a person of success, but rather try to become a person of value.",
"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
"Live as if you were to die tomorrow. Learn as if you were to live forever.",
"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
"Perfection is not attainable, but if we chase perfection we can catch excellence.",
"Whoever is happy will make others happy too.",
"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
"Believe you can and you're halfway there.",
"It is during our darkest moments that we must focus to see the light.",
"I can't change the direction of the wind, but I can adjust my sails to always reach my destination",
"Perfection is not attainable, but if we chase perfection we can catch excellence.",
];


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
        .addField ("im a cool bot commands below" , "didnt mean to call you stupid btw")
        .addField('coomands', '**{?start - starts the bot}** ' )
        .addField('~~~~~~~~~~~~',"**{?nitro - for nitro kinda}** " )
        .addField("~~~~~~~~~~~~","**{?funny - dark joke about your mom}**  " )
        .addField("~~~~~~~~~~~~","**{?help - help lol }** " )
        .addField("~~~~~~~~~~~~" , '**{nice quote - just chat its in the name}**')
        .addField("~~~~~~~~~~~~" , '**{!image - sends you an image}**')
        .setThumbnail ("https://media1.tenor.com/images/42a8d4625aeb088c45eba5a84ca36325/tenor.gif?itemid=11193323")
        .setColor ("00ff00");
        message.channel.send("Heres help <@" + message.author.id + ">")
        setTimeout(() => {  message.channel.send(embed); }, 570);
    

}


    if (message.content.startsWith(prefix + 'nitro')){
        var embed = new Discord.MessageEmbed()
        .setAuthor("NITRO PRIZE")
        .setDescription ("the bot buys nitro or gifts every two weeks when you do ?nitro the bot gives you a code its very rare but one person form a random server will win the gift by getting the real nitro /gift gl ", "cheating will get you banned from bot this command has a 2 min cooldown")
        .setFooter("check to see if you have won" , "V 1.0")
        .addField('discord.gift/'+ Math.floor(10000000000000000000 + Math.random() * 9000000000000000000).toString(36).substr(0, 36) )
        .setThumbnail ("https://media1.tenor.com/images/42a8d4625aeb088c45eba5a84ca36325/tenor.gif?itemid=11193323")
        .setColor ("00ff00");
        message.channel.send("Hey there <@" + message.author.id + "> you have been entered in a selection to win a random discord gift please wait 1 min to recive your chance at the prize in the mean time check out the other commands ")
        setTimeout(() => {  message.channel.send(embed); }, 120000);
    

}


 if (message.content.startsWith(prefix + "info")) {
  var embed = new Discord.MessageEmbed()
  .setAuthor("GXD bot")
  .setDescription ("work in progress made by nex#6116", "version 1.0")
  .setFooter("gxd")
  .addField ("Joke bot and a freind plus cool gifts you can win ", "oh and its got a nice name")
  .setThumbnail ("https://media1.tenor.com/images/8055d22f534c0792eb170d18cf4a3e2b/tenor.gif?itemid=13300784")
  .setColor ("00ff00");
  message.channel.send("thats basically it <@" + message.author.id + ">")
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
client.on('message', message => {
    if (message.content === 'dark joke') {
        var response = helloResponses [Math.floor(Math.random()*helloResponses .length)];
    message.channel.send(message.author.toString()+ " " + response)
    }
});


client.on('message', messages => {
    if (messages.content === 'nice quote') {
        var responses = JustChat [Math.floor(Math.random()*JustChat .length)];
        messages.channel.send(messages.author.toString()+ " " + responses)
    }
});
client.on('message', message => {
    if (message.content === '?funny') {
        let helpEmbed = new Discord.MessageEmbed()
        .setTitle('**GXD**')
        .addField("say dark joke ", "*warning these are jokes taken from random dark joke sites so trigger warning*'")
      message.channel.send(helpEmbed);
    }
});

 
client.on("ready", function() {
    console.log("logged in");
});
 
client.on("message", function(message) {
 
    var parts = message.content.split(" "); // Splits message into an array for every space, our layout: "<command> [search query]" will become ["<command>", "search query"]
 
    /* Simple command manager */
    if (parts[0] === "!image") { // Check if first part of message is image command
 
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
 
        /* Extract image URLs from responseBody using cheerio */
 
        $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
 
        // In this search engine they use ".image a.link" as their css selector for image links
        var links = $(".image a.link");
 
        // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
        // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        console.log(urls);
        if (!urls.length) {
            // Handle no results
            return;
        }
 
        // Send result
        message.channel.send( urls[0] );
    });
 
}

client.login("NzI2NTMyNzk3Njk0NjA3NDAx.Xvot1Q.eBnJtxNeo8RttUkhVItHpBXS18w");
