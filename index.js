const { Client, RichPresence } = require('discord.js-selfbot-v13');
const config = require('./config.json')
const dotenv = require('dotenv')
dotenv.config()

const client = new Client({
    checkUpdate: false,
});

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
    const r = new RichPresence()
        .setApplicationId(config.appId)
        .setType(config.type)
        .setURL(config.url)
        .setName(config.name)
        .setDetails(config.details)
        .setState(config.state)
        .setStartTimestamp(Date.now())
        .setAssetsLargeImage(config.image)
        .setAssetsLargeText(config.largeText)
        .setAssetsSmallImage(config.imageSmall)
        .setAssetsSmallText(config.smallText)
        .addButton(config.buttonText, config.url)
    client.user.setActivity(r);
})

client.login(process.env.TOKEN);