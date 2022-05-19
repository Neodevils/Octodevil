module.exports = [{
	name: "wiki",
	type: 'interaction',
	prototype: 'slash',
	code: `
	$interactionReply[$customEmoji[kaeruRepoUpload] A new wiki has been uploaded!;
	{newEmbed:
		{field:$customEmoji[kaeruVerified] File Name (Recommended):$slashOption[name].js}
		{field:$customEmoji[kaeruNote] Note from Coder:>>> $slashOption[info]}
		{color:$getVar[redHex]}
		{image:$slashOption[image]}
		{footer:This system made for the users who doesn't able to copy embed messages.}
	};{actionRow:{button:Download:2:codeDownload:false:<:kaeruDownload:972527098168229908>}}]
	
	$onlyForIDs[$botOwnerID;{
		"content": "$nonEscape[$customEmoji[kaeruAlert]] This can be made only by devs for your sake, but you can suggest the code.", 
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
	$interactionReply[> $customEmoji[kaeruVerified] Feel free to download the file!
	;
	;
	;{file:$readFile[./templates/$getEmbed[$channelID;$interactionData[message.id];1;field1.value]]:$getEmbed[$channelID;$interactionData[message.id];1;field1.value]};;yes]
	`
}]
