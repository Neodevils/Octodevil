module.exports = [
  {
    name: "c-avatar", 
    code: `
    $reply[$messageID;yes]

		Created avatar slash interaction successfully.

		$createApplicationCommand[$guildID;avatar;To see, a member's avatar or yours.;true;slash;member:please pick a member:false:6]

		$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]
		`
  },
	{
    name: "avatar", 
    prototype: 'slash',
    type: 'interaction', 
    code: `
    $interactionReply[$memberAvatar[$guildID;$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]]
    
		$onlyBotPerms[embedlinks;{
			"content": "I need \`EMBED_LINKS\` permission.",
			"options":{
				"interaction" : true
			}
		}]
		`
  }
]