module.exports = [
  {
    name: "wiki",
    type: 'interaction',
    prototype: 'slash',
    code: `
	  $interactionReply[$customEmoji[git_push] __A new wiki file has been uploaded!__
	  ;{newEmbed:
		  {field:$customEmoji[git_write] File Name:$slashOption[name].js}
		  {field:$customEmoji[git_note] Note from Coder:>>> $slashOption[info]}
		  {color:$getVar[invisibleHex]}
		  {image:$slashOption[image]}
		  {footer:This system made for the users who doesn't able to copy embed messages.}
	  }
	  ;{actionRow:
	    {button:Download File:2:codeDownload:false:<:git_download:990871358361718805>}
	  }
	  ]
	
	  $onlyForIDs[$botOwnerID;{
		  "content": "$nonEscape[$customEmoji[git_alert]] This can be made only by Neo for your sake, but you can suggest the code.", 
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
	  $interactionReply[> $customEmoji[git_verified] Tap to download button next to attachment to download it! 🙌
	  ;
	  ;
	  ;{file:$readFile[./templates/$getEmbed[$channelID;$interactionData[message.id];1;field1.value]]:$getEmbed[$channelID;$interactionData[message.id];1;field1.value]}
	  ;;yes]
	  `
  }
]
