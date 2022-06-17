module.exports = [
  {
    name: "wiki",
    type: 'interaction',
    prototype: 'slash',
    code: `
	  $interactionReply[$customEmoji[mnsUploadRepo] __A new wiki has been uploaded!__
	  ;{newEmbed:
		  {field:$customEmoji[mnsVerified] File Name (Recommended):$slashOption[name].js}
		  {field:$customEmoji[mnsNote] Note from Coder:>>> $slashOption[info]}
		  {color:$getVar[blueHex]}
		  {image:$slashOption[image]}
		  {footer:This system made for the users who doesn't able to copy embed messages.}
	  }
	  ;{actionRow:
	    {button:Download:2:codeDownload:false:<:mnsDownload:987360980474400808>}
	  }
	  ]
	
	  $onlyForIDs[$botOwnerID;{
		  "content": "$nonEscape[$customEmoji[mnsAlert]] This can be made only by Neo for your sake, but you can suggest the code.", 
		  "ephemeral": true, 
		  "options": {
			  "interaction":true 
	  	}
  	}]
	  `
  }, {
    name: "codeDownload",
    type: 'interaction',
    prototype: 'button',
    code: `
	  $interactionReply[> $customEmoji[mnsVerified] Feel free to download the file!
	  ;
	  ;
	  ;{file:$readFile[./templates/$getEmbed[$channelID;$interactionData[message.id];1;field1.value]]:$getEmbed[$channelID;$interactionData[message.id];1;field1.value]}
	  ;;yes]
	  `
  }
]
