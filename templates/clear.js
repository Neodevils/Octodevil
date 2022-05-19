module.exports = [
	{
		name: "c-clear",
		code: `$reply[$messageID;yes]
Created ban slash interaction successfully.
		
$createApplicationCommand[$guildID;clear;Delete messages in the channel.;true;slash;amount:please enter a number.:true:10;user:Please mention an user:false:6]
		
$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
	},
	{
		name: "clear",
		type: 'interaction',
		prototype: 'slash',
		code: `$interactionReply[purged $slashOption[amount] messages.]

$clear[$sum[1;$slashOption[amount];$replaceText[$interactionData[options.data[1].value];undefined;everyone]]


$onlyPerms[managemessages;{
	"content":"You're missing \`MANAGE_MESSAGES\` permission.",
	"ephemeral": true, 
	"options": {
		"interaction": true
	}
}]
$onlyBotPerms[managemessages;{
	"content":"I'm missing \`MANAGE_MESSAGES\` permission.",
	"ephemeral": true, 
	"options": {
		"interaction": true
	}
}]`
	}
]