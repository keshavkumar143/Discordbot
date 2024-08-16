const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require("dotenv"); 
dotenv.config(); 

const client = new Client({ intents: [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages ,GatewayIntentBits.MessageContent] });

client.on('messageCreate' ,(message)=> { 
    console.log(message.content); 
})

client.on('messageCreate',(message)=> { 
    if(message.author.bot){
        return; 
    }
    
    if(message.content == "hi" || message.content == "Hi"){
        message.reply({
            content: "hi form bot"
        })
    }

    else {
        message.reply({
            content:"how can i help you"
        })
    }
    }
); 

client.on("interactionCreate",(interaction)=>{ 
    console.log(interaction);
    interaction.reply("pong")
    
})

client.login(process.env.SECRET_KEY); 