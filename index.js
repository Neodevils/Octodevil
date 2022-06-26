//Setup
const aoijs = require('aoi.js');
const aoimongo = require('aoi.mongo');
const config = require('./config.js');
const bot = new aoijs.Bot(config.Bot);
const keepAlive = require('./server.js');

//Handlers
require('./handlers/status')(bot);
require('./handlers/variables')(bot); 
require('./handlers/callbacks')(bot);

//Music
const voice = new aoijs.Voice(bot, {
  cache: {
    cacheType: "Memory",
    enabled: false,
  } 
});

//Commands Loader
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

//For Colorful Console

loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
    text: ["gray", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgRed"],
    type: ["bright", "fgWhite"],
    text: ["bright", "fgBlue"]
  }
});

bot.functionManager.createCustomFunction({
  name : '$roleIcon',
  type : 'djs',
  code : async (d) => {
    const data = d.util.aoiFunc(d)
    const [ roleId, guildId = d.guild?.id ] = data.inside.splits
    const guild = await d.util.getGuild(d,guildId)
    if(!guild) return d.aoiError.fnError(d,"guild",{ inside: data.inside})
    data.result = guild.roles.cache.get(roleId)?.iconURL({ size: 1024, dynamic : true }) 
    return {
      code : d.util.setCode(data)
    }
  }
});


bot.command({
  name: "c-eval",
  code: `
  $createApplicationCommand[$guildID;eval;Only for Neo :3;true;slash;code:etto...:true:3]

  Done daddy :d

  $onlyForIDs[$botOwnerID;]
  `
});

keepAlive()
