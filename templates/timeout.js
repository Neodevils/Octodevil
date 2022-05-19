module.exports = [
	{
		name: "c-timeout",
		code: `$reply[$messageID;yes]

Created timeout slash interaction successfully.
 $createApplicationCommand[$guildID;timeout;Timeout an user.;true;slash;[{"name": "user", "description": "Please pick an user", "required": "true", "type": 6 }, { "name": "time", "description": "Please enter a number for timeout time", "required": "true", "type": 10 }, {"name" : "unit_of_time", "type" : 3, "required" : true, "description" : "Please check unit of time to how long user will be timeouted.", "choices" : [{"name" : "second", "value" : "s"}, {"name" : "minute", "value" : "m"}, {"name" : "hour", "value" : "h"}, {"name" : "day", "value" : "d"}]}, {"name": "reason",
"description": "Enter a reason for timeouting.", "required":"false", "type":3}]]

$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
	},
	{
		name:"timeout",
		type: 'interaction', 
		prototype: 'slash', 
		code:`$interactionreply[$username timeouted $userTag[$slashOption[user]] with $replaceText[$interactionData[options.data[3].value];undefined;no reason] <t:$truncate[$divide[$get[time];1000]]:R>, timeout will be removed.]

$let[time;$timeoutMember[$guildId;$slashOption[user];$slashOption[time]$slashOption[unit_of_time];yes;$replaceText[$interactionData[options.data[3].value];undefined;no reason]]]

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

$onlyBotPerms[moderatemembers;{
	"content":"I need \`MODERATE_MEMBERS\` permission.",
	"options":{
		"interaction" : true
	}
}]`

	}
]