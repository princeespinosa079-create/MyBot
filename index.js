const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express'); // Add this line

// --- WEB SERVER SECTION FOR RENDER ---
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot is alive!');
});

app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});
// -------------------------------------

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Note: Render uses environment variables, make sure your key is named "TOKEN"
client.login(process.env.TOKEN);
