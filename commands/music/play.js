module.exports = [
  {
    name: "play",
    type: 'interaction',
    prototype: 'slash',
    $if: 'v4',
    code: `
    $djsEval[(async () => {
      const player = client.voiceManager.manager.players.get(guild.id);
      const searches = await player.manager.searchManager["$get[platform]"].search("$slashOption[𓂃search]",10);
      const components = [{
        type: 1,
        components: [{
          type: "SELECT_MENU",
          customId: "searchResult_$authorId_$get[platform]",
          placeholder: "Select a song",
          minValues: 1,
          maxValues: 1,
          options: searches.map((song, index) => {
            return {
              label: "( " + (index + 1) + " ) " + song.title.slice(0, 50),
              value: song.url,
              description: song.description?.slice(0, 20) ?? "no description",
            }
          })
        }]
      }]
    
      const senddata  = await d.util.errorParser("{newEmbed:{title:Pick a song via menu}{description:$customEmoji[kaeruActions] Pick a track to play ヾ(〃^∇^)ﾉ}{color:$getVar[redHex]}{footer:Enjoy!}}")

      senddata.components = components;

      d.data.interaction.reply(senddata)
      
    })()]
  
    $let[platform;youtube]
  
    $if[$hasPlayer==false]
    $joinVC
    $endif

    $onlyIf[$voiceID[$authorID]!=;{"content": "You are not in voice channel.", "ephemeral": true, "options": { "interaction" : true } }]
	
    $onlyIf[$interactionData[options._subcommand]==youtube;]
    `
  },
  {
    type: 'interaction',
    prototype: 'selectMenu',
    code: `
    $interactionEdit[;{newEmbed:{description:$customEmoji[kaeruActions] Selected Track has been added to queue :3}{color:$getVar[redHex]}{footer:Enjoy #COLON#3}]
    
    $wait[1s]
    
    $let[e;$playTrack[$get[platform];$interactionData[values[0]]]
		
    $playerConfig[yes;30s]

    $interactionDeferUpdate
		
    $onlyif[$get[author]==$interactionData[author.id]; {
      "content": "$nonEscape[$customEmoji[kaeruAlert]] But let them pick, plss :(",
      "ephemeral": true,
      "options": { 
        "interaction": true 
      }
    }]
		
    $onlyif[$get[customId]==searchResult;]

    $let[platform;$splitText[3]]
    $let[author;$splittext[2]]
    $let[customId;$splitText[1]]
    $textSplit[$interactionData[customId];_]
    `
  },
  {
    name: "play",
    type: 'interaction',
    prototype: 'slash',
    $if: 'v4',
    code: `
    $let[e;$playTrack[spotify;$slashOption[𓂃url]]]
    
    $interactionFollowUp[;{newEmbed:{description:$customEmoji[kaeruActions] Spotify link has been added to queue :3
> *Please wait a little bit to it fetch ❤️*}{color:$getVar[redHex]}{footer:Enjoy #COLON#3}}]

    $playerConfig[yes;30s]
    
    $interactionDefer
	
    $if[$hasPlayer==false]
    $joinVC
    $endif

    $onlyIf[$checkContains[$slashOption[𓂃url];https://open.spotify.com/track/;https://open.spotify.com/playlist/]==true;{"content": "Please insert a spotify track or playlist url.", "options": { "interaction" : true } }]
	
    $onlyIf[$voiceID[$authorID]!=;{"content": "$nonEscape[$customEmoji[kaeruAlert]] You are not in voice channel or joined to my voice channel :(", "ephemeral": true, "options": { "interaction" : true } }]

    $onlyIf[$interactionData[options._subcommand]==spotify;]
    `
  }
]
