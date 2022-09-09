//Setup
const aoijs = require( 'aoi.js' );
const aoimongo = require( 'aoi.mongo' );
const config = require( './config.js' );
const bot = new aoijs.Bot( config.Bot );
const keepAlive = require( './server.js' );

//Handlers
require( './handlers/status' )( bot );
require( './handlers/variables' )( bot );
require( './handlers/callbacks' )( bot );

//Commands Loader
const loader = new aoijs.LoadCommands( bot )
loader.load( bot.cmd, "./commands/" )

//Music Class
const voice = new aoijs.Voice( bot, {
	cache: {
		cacheType: "Memory",
		enabled: false,
	},
	playerOptions: {
		trackInfoInterval: 5000,
	}
} );

//For Colorful Console
loader.setColors( {
	walking: [ "blink", "dim", "fgWhite" ],
	failedWalking: {
		name: [ "bright", "fgYellow", "underline" ],
		text: [ "gray", "fgRed" ]
	},
	typeError: {
		command: [ "bright", "fgYellow" ],
		type: [ "fgYellow" ],
		text: [ "bright", "fgRed" ]
	},
	failLoad: {
		command: [ "bright", "fgMagenta" ],
		type: [ "fgRed" ],
		text: [ "bright", "fgRed" ],
	},
	loaded: {
		command: [ "bright", "fgRed" ],
		type: [ "bright", "fgWhite" ],
		text: [ "bright", "fgBlue" ]
	}
} );

// For Eval Command
bot.command( {
	name: "c-dev",
	code: `
  $createApplicationCommand[$guildID;dev;— This command is only for Neo.;true;slash;{string:do:Please pick a type.:yes:{choice:• d.js evaluation:djsEval}{choice:• aoi.js evaluation:aoijsEval}{choice:• Updating Commands:updCmds}}{string:code:Awesome codes written in here! ✌🏻:no}]

  Successfully created it. 🤠

  $onlyForIDs[$botOwnerID;]
  `
} );

keepAlive()