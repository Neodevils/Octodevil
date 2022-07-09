module.exports = [
	{
		name: "play",
		type: 'interaction',
		prototype: 'slash',
		$if: 'v4',
		code: `
    $interactionFollowUp[
			;{newEmbed:
				{description:$customEmoji[git_play] **“$get[song]”** to queue *!*}
				{image:$songInfo[thumbnail;$get[song]]}
				{color:$getVar[gitHex]}
				{footer:$randomText[enjoy~;music heals!;feel the music!]:$userAvatar[$clientID]}
			}
		]

		$let[song;$playTrack[youtube;$slashOption[search]]]
		
		$playerConfig[yes;30s]

		$interactionDefer
	
		$if[$hasPlayer==false]

		$joinVC

		$endif

		$onlyIf[$voiceID[$authorID]!=;{
			"content": "$nonEscape[$customEmoji[git_alert]] You are not in voice channel.", 
			"ephemeral": true, 
			"options": { 
				"interaction" : true 
			} 
		}]

		$onlyIf[$interactionData[options._subcommand]==youtube;]
		`
	},
	{
		name: "play",
		type: 'interaction',
		prototype: 'slash',
		$if: 'v4',
		code: `
    $interactionFollowUp[
			;{newEmbed:
				{description:$customEmoji[git_play] Spotify link has been added to queue.\n> \n> \` Please wait a little bit to it fetch ❤️ \`}
				{color:$getVar[invisibleHex]}
				{footer:$randomText[enjoy~;music heals!;feel the music!]:$userAvatar[$clientID]}
			}
		]

		$let[song;$playTrack[spotify;$slashOption[url]]]

		$playerConfig[yes;30s]
    
    $interactionDefer
	
    $if[$hasPlayer==false]
    $joinVC
    $endif

    $onlyIf[$checkContains[$slashOption[url];https://open.spotify.com/track/;https://open.spotify.com/playlist/]==true;{
			"content": "$nonEscape[$customEmoji[git_alert]] Please insert a spotify track or playlist url.", 
			"options": { 
				"interaction" : true 
			} 
		}]
	
    $onlyIf[$voiceID[$authorID]!=;{
			"content": "$nonEscape[$customEmoji[git_alert]] You are not in voice channel or joined to my voice channel.", 
			"ephemeral": true, 
			"options": { 
				"interaction" : true 
			} 
		}]

    $onlyIf[$interactionData[options._subcommand]==spotify;]
		`
	}
]
