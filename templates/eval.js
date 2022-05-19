module.exports = [
  {
    name: "c-eval", 
    code: `$reply[$messageID;yes]
Created eval slash interaction successfully.
$createApplicationCommand[$guildID;eval; For evaluating your functions.;true;slash;code:enter the code.:true:3]
$onlyForIDs[$botOwnerID;This command is not for you, it's for my owner(s).]`
  }, 
  {
    name: "eval", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$interactionFollowUp[$eval[$slashOption[code];yes;yes;yes;yes]]
$interactionDefer
$onlyForIDs[$botOwnerID;{
	"content": "This command is not for you, it's for my owner(s).",
	"ephemeral": true, 
	"options": {
		"interaction" : true
	}
}]
$onlyBotPerms[embedlinks;{
	"content": "I need \`EMBED_LINKS\` permission.",
	"ephemeral": true, 
	"options":{
		"interaction" : true
	}
}]`
  }
]