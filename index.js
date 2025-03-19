const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const CHANNEL_ID = process.env.CHANNEL_ID;

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);

    setInterval(async () => {
        const channel = await client.channels.fetch(CHANNEL_ID);
        if (channel) {
            await channel.send('/meme');
        }
    }, 3600000); // Runs every 1 hour
});

client.login(process.env.TOKEN);
