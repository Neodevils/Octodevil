module.exports = [
	{
		$if: 'v4',
		name: "panel",
		type: 'interaction',
		prototype: 'slash',
		code: `
    $if[$voiceID[$authorID]==]
    $interactionReply[$customEmoji[git_alert] May you join to a voice channel?;;;;;yes]

    $elseif[$queueLength==0] 
    $interactionReply[$customEmoji[git_alert] Nothing is playing right now?;;;;;yes] 
  
    $endelseif

    $elseif[$voiceID[$clientID]==]
    $interactionEdit[$customEmoji[git_pending] You can use \`/play\` slash command to play a track.;;;;;yes]

    $wait[2s]
    $interactionEdit[Oh, yes!]

    $wait[3s]
    $interactionEdit[Okay, now. What track do you want to play?]

    $wait[1s]
    $joinVC

    $wait[2s]
    $interactionReply[$customEmoji[git_verified] Joining to voice channel...]

    $endelseif

    $else
    $interactionReply[
      ;{newEmbed:
        {field:$customEmoji[git_info] currently playing:$customEmoji[git_commit] $songInfo[title]}
        {field:$customEmoji[git_mention] publisher:$customEmoji[git_commit] $songInfo[author]}
        {field:$customEmoji[git_timestamp] duration:$customEmoji[git_commit] *$humanizeMS[$getCurrentDuration]* — $humanizeMS[$songInfo[duration]]}
        {field:$customEmoji[git_eye] watched:$customEmoji[git_commit] $numberSeparator[$songInfo[views]] views}
        {field:$customEmoji[git_link] url:$customEmoji[git_commit] [Tap here to go to the link!]($songInfo[url])}
        {image:https://media.discordapp.net/attachments/774748031589023764/777379789224935434/image0.gif}
        {thumbnail:$authorAvatar}
        {color:$getVar[invisibleHex]}
      };{actionRow:
        {selectMenu:musicMenu_$authorID:・Tap here for other music options~:1:1:false:
          {selectMenuOptions:#1 music heals!:music0:play previous track, stop, skip or l∞p? Tap to here!:no:$nonEscape[$customEmoji[git_previous]]}
          {selectMenuOptions:#2 enjoy with track!:music1:nightcore queue reset filters autoplay and 8D audio!:no:$nonEscape[$customEmoji[git_redo]]}
        }
      }
    ]
    $endif

    $log[⊢ $userTag, used music panel command.]
		`
	}, 
	{
		type: 'interaction',
		prototype: 'selectMenu',
		code: `
    $interactionUpdate[
      ;{newEmbed:
        {field:$customEmoji[git_info] currently playing:$customEmoji[git_commit] $songInfo[title]}
        {field:$customEmoji[git_mention] publisher:$customEmoji[git_commit] $songInfo[author]}
        {field:$customEmoji[git_timestamp] duration:$customEmoji[git_commit] *$humanizeMS[$getCurrentDuration]* — $humanizeMS[$songInfo[duration]]}
        {field:$customEmoji[git_eye] watched:$customEmoji[git_commit] $numberSeparator[$songInfo[views]] views}
        {field:$customEmoji[git_link] url:$customEmoji[git_commit] [Tap here to go to the link!]($songInfo[url])}
        {image:https://media.discordapp.net/attachments/774748031589023764/777379789224935434/image0.gif}
        {thumbnail:$authorAvatar}
        {color:$getVar[invisibleHex]}
        {footer:・Enjoy! 🙌🏻:$userAvatar[$clientID]}
      };{actionRow:
        {button:l. song:2:loopSong_$authorID:false}
        {button:previous:2:previousTrack_$authorID:false}
        {button:stop:2:stopTrack_$authorID:false}
        {button:next:2:skipTrack_$authorID:false}
        {button:l. queue:2:loopQueue_$authorID:false}
      }{actionRow:
        {selectMenu:musicMenu_$authorID:・Tap here for other music options~:1:1:false:
          {selectMenuOptions:#1 music heals!:music0:play previous track, stop, skip or l∞p? Tap to here!:yes:$nonEscape[$customEmoji[git_previous]]}
          {selectMenuOptions:#2 enjoy with track!:music1:nightcore queue reset filters autoplay and 8D audio!:no:$nonEscape[$customEmoji[git_redo]]}
				}
			}
    ]

    $onlyif[$queueLength!=0||$voiceID[$authorID]!=||$voiceID[$clientID]!=;{
			"content": "$nonEscape[$customEmoji[git_alert]] Nothing is playing right now.",
			"ephemeral": true, 
			"options": {
				"interaction": true
			}
		}]


		$onlyIf[$interactionData[customId]==musicMenu_$interactionData[author.id];]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
			"content": "$nonEscape[$customEmoji[git_alert]] You can't use this button in this context.",
			"ephemeral" : true,
			"options" : {
				"interaction" : true
			}
		}]

		$onlyIf[$interactionData[values[0]]==music0;]
		`
	}, 
	{
  	type: 'interaction', 
  	prototype: 'button',
  	code: `
		$interactionDelete

		$wait[5s]

		$interactionReply[> $customEmoji[git_verified] loop mode is now __song__ *!*\n*Oh, small tip: if you want to use autoplay mode, you need to reset the player~*]

		$loopMode[song]

		$onlyif[$queueLength!=0||$voiceID[$authorID]!=||$voiceID[$clientID]!=;{
			"content": "$nonEscape[$customEmoji[git_alert]] Nothing is playing right now.",
			"ephemeral": true, 
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
			"content": "$customEmoji[git_alert] Uhm, you can use this after them done~",
			"ephemeral": true,
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==loopSong;]
		`
	}, 
	{
  	type: 'interaction',
  	prototype: 'button',
  	code: `
		$interactionDelete

		$wait[10s]

		$interactionReply[> $customEmoji[git_verified] **__$playPrevious__** :3]

		$onlyIf[$djseval[client.voiceManager.manager.players.get(guild.id).queue.previous!==null;yes]==true;{
			"content": "$customEmoji[git_verified] No previous track.",
			"ephemeral": true, 
			"options": {
				"interaction": true
			}
		}]

    $onlyif[$voiceID[$authorID]!=||$voiceID[$clientID]!=;{
			"content": "$nonEscape[$customEmoji[git_alert]] Didn't connect to a voice chat.",
			"ephemeral": true, 
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
			"content": "$customEmoji[git_alert] Uhm, you can use this after them done~",
			"ephemeral": true,
			"options": {
				"interaction": true
			}
		}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==previousTrack;]
		`
	}, 
	{
  	type: 'interaction',
  	prototype: 'button', 
  	code: `
		$interactionDelete

		$wait[10s]

		$interactionReply[>>> $customEmoji[git_verified] *nods while dancing*ヾ(〃^∇^)ﾉ. A--- eh? UHH... Yeah! Stopped the playing track! Sooo, see you lateeer!]

		$leaveVC

		$onlyif[$queueLength!=0||$voiceID[$authorID]!=||$voiceID[$clientID]!=;{
			"content": "$nonEscape[$customEmoji[git_alert]] Nothing is playing right now.",
			"ephemeral": true, 
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
			"content": "$customEmoji[git_alert] Uhm, you can use this after them done~",
			"ephemeral": true,
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==stopTrack;]
		`
	}, 
	{
  	type: 'interaction',
  	prototype: 'button',
  	code: `
		$interactionDelete

		$wait[10s]

		$interactionEdit[> $customEmoji[git_verified] skipped the song, now playing __**$songInfo[title]**__ :3]

		$wait[1s]

		$skip

		$interactionReply[> $customEmoji[git_verified] skipping...]

		$onlyif[$queueLength>=0||$voiceID[$authorID]!=||$voiceID[$clientID]!=;{
			"content": "$nonEscape[$customEmoji[git_alert]] Nothing is playing right now;\\n>>> ・Check queue, if there no song left in the queue.\\n・Might be not connected to voice chat.",
			"ephemeral": true, 
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
			"content": "$customEmoji[git_alert] Uhm, you can use this after them done~",
			"ephemeral": true,
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==skipTrack;]
		`
	}, 
	{
		type: 'interaction', 
		prototype: 'button', 
		code: `
		$interactionDelete

		$wait[5s]

		$interactionReply[> $customEmoji[git_verified] loop mode is __queue__ *!*] 

		$loopMode[queue]

    $onlyif[$queueLength!=0||$voiceID[$authorID]!=||$voiceID[$clientID]!=;{
			"content": "$nonEscape[$customEmoji[git_alert]] Nothing is playing right now.",
			"ephemeral": true, 
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
			"content": "$customEmoji[git_alert] Uhm, you can use this after them done~",
			"ephemeral": true,
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==loopQueue;]
		`
	}, 
	{
		type: 'interaction',
		prototype: 'selectMenu',
		code: `
		$interactionUpdate[
      ;{newEmbed:
        {field:$customEmoji[git_info] currently playing:$customEmoji[git_commit] $songInfo[title]}
        {field:$customEmoji[git_mention] publisher:$customEmoji[git_commit] $songInfo[author]}
        {field:$customEmoji[git_timestamp] duration:$customEmoji[git_commit] *$humanizeMS[$getCurrentDuration]* — $humanizeMS[$songInfo[duration]]}
        {field:$customEmoji[git_eye] watched:$customEmoji[git_commit] $numberSeparator[$songInfo[views]] views}
        {field:$customEmoji[git_link] url:$customEmoji[git_commit] [Tap here to go to the link!]($songInfo[url])}
        {image:https://media.discordapp.net/attachments/774748031589023764/777379789224935434/image0.gif}
        {thumbnail:$authorAvatar}
        {color:$getVar[invisibleHex]}
        {footer:・Enjoy! 🙌🏻:$userAvatar[$clientID]}
      };{actionRow:
        {button:l. song:2:loopSong_$authorID:false}
        {button:previous:2:previousTrack_$authorID:false}
        {button:stop:2:stopTrack_$authorID:false}
        {button:next:2:skipTrack_$authorID:false}
        {button:l. queue:2:loopQueue_$authorID:false}
      }{actionRow:
        {selectMenu:musicMenu_$authorID:・Tap here for other music options~:1:1:false:
          {selectMenuOptions:#1 music heals!:music0:play previous track, stop, skip or l∞p? Tap to here!:no:$nonEscape[$customEmoji[git_previous]]}
          {selectMenuOptions:#2 enjoy with track!:music1:nightcore queue reset filters autoplay and 8D audio!:yes:$nonEscape[$customEmoji[git_redo]]}
				}
			}
    ]

		$onlyif[$queueLength!=0||$voiceID[$authorID]!=||$voiceID[$clientID]!=;{
			"content": "$nonEscape[$customEmoji[git_alert]] Nothing is playing right now.",
			"ephemeral": true, 
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
			"content": "$customEmoji[git_alert] Uhm, you can use this after them done~",
			"ephemeral": true,
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$interactionData[customId]==musicMenu_$interactionData[author.id];]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
			"content": "$customEmoji[git_verified] For real, using their music menu? Not cool $username, not cool...",
			"ephemeral": true,
			"options": {
				"interaction" : true
			}
		}]

		$onlyIf[$interactionData[values[0]]==music1;]
		`
	}, 
	{
  	type: 'interaction', 
  	prototype: 'button',  
  	code: `
		$interactionDelete

		$wait[10s]

		$interactionFollowUp[> $customEmoji[git_verified] __**enabled nightcore**__ for the queue.]

		$wait[1s]

		$let[a;$addFilter[{"aresample": "48000","asetrate" : "48000*1.1","atempo": "1.1"}]]

		$interactionDefer

		$onlyif[$queueLength!=0||$voiceID[$authorID]!=||$voiceID[$clientID]!=;{
			"content": "$nonEscape[$customEmoji[git_alert]] Nothing is playing right now.",
			"ephemeral": true, 
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
			"content": "$customEmoji[git_alert] Uhm, you can use this after them done~",
			"ephemeral": true,
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==nightcore;]
		`
	}, 
	{
  	type: 'interaction', 
  	prototype: 'button',  
  	code: `
		$interactionDelete

		$wait[10s]

		$interactionFollowUp[> $customEmoji[git_verified] filters and loop mode has been __**reset**__.]

		$wait[1s]

		$loopMode[none]

		$let[a;$resetFilters]

		$interactionDefer

		$onlyif[$queueLength!=0||$voiceID[$authorID]!=||$voiceID[$clientID]!=;{
			"content": "$nonEscape[$customEmoji[git_alert]] Nothing is playing right now.",
			"ephemeral": true, 
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
			"content": "$customEmoji[git_alert] Uhm, you can use this after them done~",
			"ephemeral": true,
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==resetFilter;]
		`
	}, 
	{
  	type: 'interaction', 
  	prototype: 'button',  
  	code: `
		$interactionReply[
			;{newEmbed:
				{title:𓂃⸼$customEmoji[git_info] now playing  ᯬ⌣ᯬ}
				{description:> $customEmoji[git_verified] __**$songInfo[title]**__ ヾ(＾-＾)ノ♪}
				{field:𓂃⸼$customEmoji[git_tag] next songs ᯌ:>>> $queue[1;5;**\`{position} — \`** __{title}__ ៸៸ **﹫{user.tag}** ꮺ ~~[track]({url})~~]}
				{color:$getVar[gitHex]}
				{thumbnail:$authorAvatar}
			}
			;
			;
			;
			;yes
		]

		$onlyif[$queueLength!=0||$voiceID[$authorID]!=||$voiceID[$clientID]!=;{
			"content": "$nonEscape[$customEmoji[git_alert]] Nothing is playing right now.",
			"ephemeral": true, 
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
			"content": "$customEmoji[git_alert] Uhm, you can use this after them done~",
			"ephemeral": true,
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==queue;]
		`
	}, 
	{
  	type: 'interaction', 
  	prototype: 'button',  
  	code: `
		$interactionDelete

		$wait[10s]

		$interactionReply[> $customEmoji[git_verified] enabled __**bass**__.]

		$onlyif[$queueLength!=0||$voiceID[$authorID]!=||$voiceID[$clientID]!=;{
			"content": "$nonEscape[$customEmoji[git_alert]] Nothing is playing right now.",
			"ephemeral": true, 
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
			"content": "$customEmoji[git_alert] Uhm, you can use this after them done~",
			"ephemeral": true,
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bass;]
		`
	}, 
	{
  	type: 'interaction', 
  	prototype: 'button',  
  	code: `
		$interactionDelete

		$wait[10s]

		$interactionReply[> $customEmoji[git_verified] enabled __**8D mode**__ :3]

		$let[b;$addFilter[{"apulsator": "hz=0.125","stereotools": "","stereowiden" :"","aecho" :"0.8:0.8:50:0.5"}]]

		$onlyif[$queueLength!=0||$voiceID[$authorID]!=||$voiceID[$clientID]!=;{
			"content": "$nonEscape[$customEmoji[git_alert]] Nothing is playing right now.",
			"ephemeral": true, 
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
			"content": "$customEmoji[git_alert] Uhm, you can use this after them done~",
			"ephemeral": true,
			"options": {
				"interaction": true
			}
		}]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==8d;]
		`
	}
]