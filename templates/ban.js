module.exports = [
	{
		name: "c-ban",
		code: `$reply[$messageID;yes]
Created ban slash interaction successfully.
		
$createApplicationCommand[$guildID;ban;Ban a member from the server.;true;slash;user:please enter member:true:6;reason:Please enter a reason.:false:3;time:an user can be banned max 7 days.:false:10]
		
$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
	},
	{
		name: "ban", 
		type: 'interaction',
		prototype: 'slash', 
		code: `$ban[$findUser[$slashOption[user];no];$guildID;$replaceText[$interactionData[options.data[2].value];undefined;0];$replaceText[$interactionData[options.data[1].value];undefined;no reason.]]
		
$interactionFollowUp[$userTag[$slashOption[user]] banned in the server for $replaceText[$interactionData[options.data[2].value];undefined;permanent] days with $replaceText[$interactionData[options.data[1].value];undefined;no reason], by $userTag.]

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

$onlyPerms[ban;{
	"content":"You're missing \`BAN_MEMBERS\` permission.",
	"ephemeral": true, 
	"options": {
		"interaction": true
	}
}]

$onlyBotPerms[ban;{
	"content":"I'm missing \`BAN_MEMBERS\` permission.",
	"ephemeral": true, 
	"options": {
		"interaction": true
	}
}]`
	}
]