module.exports = [
  {
    name: "c-exec", 
    code: `$reply[$messageID;yes]

Created exec slash interaction successfully.

$createApplicationCommand[$guildID;exec;For executing shell commands.;true;slash;code:enter the function.:true:3]

$onlyForIDs[$botOwnerID;This command is not for you, it's for my owner(s).]`
  }, 
  {
    name: "exec", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$interactionFollowUp[$exec[$slashOption[code]]]

$interactionDefer

$onlyForIDs[$botOwnerID;{
	"content": "This command is not for you, it's for my owner(s).",
	"ephemeral": true, 
	"options": {
		"interaction" : true
	}
}]`
  }
]
