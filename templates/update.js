module.exports = [
  {
    name: "c-update", 
    code: `$reply[$messageID;yes]

Created update slash interaction successfully.

$createApplicationCommand[$guildID;update;Fastest way to update your codes without rebooting.;true;slash]

$onlyForIDs[$botOwnerID;This command is not for you, it's for my owner(s).]`
  }, 
  {
    name: "update", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$updateCommands

$interactionReply[Updated codes, feel free to test again.;;;;;yes]

$onlyForIDs[$botOwnerID;{
	"content": "This command is not for you, it's for my owner(s).",
	"ephemeral": true, 
	"options":{
		"interaction" : true
	}
}]`
  }
]
