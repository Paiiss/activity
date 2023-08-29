const { Client, RichPresence } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const dotenv = require('dotenv')
dotenv.config()
const client = new Client({
    // See other options here
    checkUpdate: false,
    // https://discordjs-self-v13.netlify.app/#/docs/docs/main/typedef/ClientOptions
    // All partials are loaded automatically
});

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
    const r = new RichPresence()
        .setApplicationId('817229550684471297')
        .setType('PLAYING')
        .setURL('https://gas138divine.com/account/register/bostolan')
        // .setState('State')
        .setName('Gate Of Olympus')
        .setDetails('Agar tali saliturahmi tidak terputus')
        .setState('adakah seratus?!')
        // .setParty({
        //     max: 9,
        //     current: 1,
        //     id: Discord.getUUID(),
        // })
        .setStartTimestamp(Date.now())
        .setAssetsLargeImage('mp:attachments/1061738701140537364/1145928780372770816/Z.png')
        .setAssetsLargeText('Gate Of Olympus')
        .setAssetsSmallImage('mp:attachments/1061738701140537364/1145928780372770816/Z.png')
        .setAssetsSmallText('gas138')
        .addButton('Hayu depo', 'https://gas138divine.com/account/register/bostolan')
    client.user.setActivity(r);
})

client.login(process.env.TOKEN);