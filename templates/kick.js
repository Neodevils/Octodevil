module.exports = [
	{
		name: "c-kick",
		code: `$reply[$messageID;yes]
Created kick slash interaction successfully.
		
$createApplicationCommand[$guildID;kick;Kick a member from the server.;true;slash;user:please enter member:true:6;reason:Please enter a reason.:false:3;time:an user can be banned max 7 days.:false:10]
		
$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
	},
	{
		name: "kick", 
		type: 'interaction',
		prototype: 'slash', 
		code: `$kick[$slashOption[user];$guildID;;$replaceText[$interactionData[options.data[1].value];undefined;no reason.]]
		
$interactionFollowUp[$userTag[$slashOption[user]] got kick in the server with $replaceText[$interactionData[options.data[1].value];undefined;no reason], by $userTag.]

$interactionDefer

$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$slashOption[user]]];{
  "content":"The user is higher than me on role position.",
	"options":{
		"interaction" : true
	}
}]
	$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$slashOption[user]]];{
	"content":"The user is higher than you on role position.",
	"options":{
		"interaction" : true
	}
}]

$onlyPerms[kick;{
	"content":"You're missing \`KICK_MEMBERS\` permission.",
	"ephemeral": true, 
	"options": {
		"interaction": true
	}
}]

$onlyBotPerms[kick;{
	"content":"I'm missing \`KICK_MEMBERS\` permission.",
	"ephemeral": true, 
	"options": {
		"interaction": true
	}
}]`
	}
]