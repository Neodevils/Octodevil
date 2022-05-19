module.exports = [
	{
		name: "c-daily",
		code: `$reply[$messageID;yes]

Created daily slash interaction successfully.
		
$createApplicationCommand[$guildID;daily;Sign for daily.;true;slash]
		
		$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
	},
	{
		name: "daily", 
		type: 'interaction', 
		prototype: 'slash', 
		code: `$interactionReply[Tap to button to claim your daily!;;{actionRow:{button:Claim it now!:2:daily_$authorID:no:🧋}}]`
	}, 
	{
		type: 'interaction', 
		prototype: 'button', 
  	code: `$setUserVar[currency;$sum[$getUserVar[currency];$random[1;10]]]

$interactionUpdate[You have claimed your daily. Come back again tomorrow.;;{actionRow:{button:Claimed.:2:daily_$authorID:yes:🧋}}]

$cooldown[24h;{"content" : "%time% left.","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content" : "This is  <@$advancedTextSplit[$interactionData[customId];_;2]>'s daily.","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==daily;]`
	}
]
