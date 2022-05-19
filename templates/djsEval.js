module.exports = [
  {
    name: "c-djseval", 
    code: `$reply[$messageID;yes]
Created djseval slash interaction successfully.
$createApplicationCommand[$guildID;djs;For evaluating your djs codes.;true;slash;code:enter the code.:true:3]
$onlyForIDs[$botOwnerID;This command is not for you, it's for my owner(s).]`
  }, 
  {
    name: "djs", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$interactionFollowUp[
***\`\`\`js
$djseval[$slashOption[code]\`\`\`***;yes]]
$interactionDefer
$onlyForIDs[$botOwnerID;{
	"content": "This command is not for you, it's for my owner(s).",
	"ephemeral": true, 
	"options":{
		"interaction" : true
		}
	}
]
$onlyBotPerms[embedlinks;{
	"content": "I need \`EMBED_LINKS\` permission.",
	"ephemeral": true, 
	"options":{
		"interaction" : true
		}
	}
]`
  }
]