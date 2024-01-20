const { default: axios } = require('axios');
const { Client, Events, GatewayIntentBits, Message, MessageManager } = require('discord.js');
require("dotenv").config();
const getGif = require('./getgif');
const { get } = require('http');

const token = process.env.DISCORD_TOKEN;
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready. Logged in as ${readyClient.user.tag}`);
    
     // Listen for messages in the #wow-good-job channel
    client.on(Events.MessageCreate, async (message) => {
    if (Message.author === "Celebration") return;
    console.log("Listening for messages...");
    if (message.channel.name === "wow-good-job") {
      if (message.content === "test") {
        console.log(message.content);
        if (message.author.username === "lepotato") {
          message.reply("touch some grass bitch");
          return;
        }
        try {
          const gif = await getGif();
          message.reply("Wow! Good job!!\n" + gif);
          console.log(message.author.globalname);
        } catch (error) {
          console.error("Error sending gif:", error);
        }
      }
    }
  });
});

client.login(token);


