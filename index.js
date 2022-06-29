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
    const data = d.util.aoiFunc(d) // this function opens data sent from interpreter
    const [ roleId, guildId = d.guild?.id ] = data.inside.splits //gets params
    const guild = await d.util.getGuild(d,guildId) //gets guild object
    if(!guild) return d.aoiError.fnError(d,"guild",{ inside: data.inside}) //sends invalid guild error
    data.result = guild.roles.cache.get(roleId)?.iconURL({ size: 1024, dynamic : true }) // returns icon
    return {
      code : d.util.setCode(data), //sets code 
    }
  }
});


bot.command({
    name: "c-eval",
    code: `
	$createApplicationCommand[$guildID;dev; Developers only.;true;slash;{string:do:Pick a type 🐢:true:{choice:ɑ • d.js:djsEval}{choice:β • aoi.js:aoijsEval}{choice:η • Update Commands:updCmds}}{string:code:Cool codes written down here 🚀:false:3}]
	
	Successfully created it. \`🤠\`
	
	$onlyForIDs[$botOwnerID;]
	`
});

keepAlive()
