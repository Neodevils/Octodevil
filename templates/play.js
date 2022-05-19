module.exports = [
	{
		name: "c-play",
		code: `
		$reply[$messageID;yes]
		
		Created play sub commands successfully.
		
		$createApplicationCommand[$guildID;play;e;true;slash;[ { "name":"youtube", "description":"play songs from YouTube", "type": "SUB_COMMAND", "options": [{ "name": "song", "description": "please enter song", "type": 3, "required": true }] }, { "name":"soundcloud", "description":"play songs from SoundCloud!", "type": "SUB_COMMAND", "options": [{ "name": "song", "description": "please enter a song", "type": 3, "required": true }] }]]
		
		$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]
		`
	},
	{
		name: "play",
		type: 'interaction',
		prototype: 'slash',
		$if: 'v4',
		code: `
		$interactionFollowUp[$get[e]]

		$let[e;$playTrack[youtube;$slashOption[song]]]
		
		$playerConfig[yes;30s]

		$interactionDefer
	
		$if[$hasPlayer==false]

		$joinVC

		$endif

		$onlyIf[$voiceID[$authorID]!=;{"content": "You are not in voice channel.", "ephemeral": true, "options": { "interaction" : true } }]

		$onlyIf[$interactionData[options._subcommand]==youtube;]
		`
	},
	{
		name: "play",
		type: 'interaction',
		prototype: 'slash',
		$if: 'v4',
		code: `
		$interactionFollowUp[$get[e]]

		$let[e;$playTrack[soundcloud;$slashOption[song]]]
		
		$playerConfig[yes;30s]

		$interactionDefer
	
		$if[$hasPlayer==false]

		$joinVC

		$endif

		$onlyIf[$voiceID[$authorID]!=;{"content": "You are not in voice channel.", "ephemeral": true, "options": { "interaction" : true } }]

		$onlyIf[$interactionData[options._subcommand]==soundcloud;]
		`
	}
]
