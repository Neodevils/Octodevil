module.exports = [
	{
		name: "c-poll",
		code: `$reply[$messageID;yes]

Created poll slash interaction successfully.

$createApplicationCommand[$guildID;poll;Creates a poll;true;slash;question:please ask the question:true:3]

$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
	},
	{
  	name: "poll", 
		type: 'interaction', 
		prototype: 'slash',
  	code: `$sendMessage[{
  		"content":"$slashOption[question]",
			"fetchReply" : true,
			"options": {
  			"reactions" : ["✅","❎"],
  			"interaction" : true
			}
		}] 

$onlyBotPerms[addreactions;{
	"content":"I'm missing \`ADD_REACTIONS\` permission.",
	"ephemeral": "true", 
	"options": {
		"interaction": true
	}
}]`
	}
]