module.exports = {
  name: "key", 
  type: 'interaction',
  prototype: 'slash', 
  code: `
  $interactionReply[<@&$getVar[keyRole]> claimed.;{newEmbed:{description:$customEmoji[git_key] Great! Now you will be earning __rubies__ while holding the key!}{color:$getVar[invisibleHex]}}]

  $giveRole[$guildID;$authorID;$getVar[keyRole]]
	
  $takeRole[$guildID;$usersWithRole[$getVar[keyRole];$guildID;id];$getVar[keyRole]]

  $cooldown[2m;{"content": "$nonEscape[$customEmoji[git_alert]] You need to wait a %time% to claim the key. __Better to not abuse.__ 👀","ephemeral": true, "options":{ "interaction" : true } }]

  $onlyIf[$hasRoles[$guildID;$authorID;$getVar[keyRole]]==false;{"content": "$nonEscape[$customEmoji[git_key]] You are already **__holding__** <@&$getVar[keyRole]> role.", "ephemeral": true, "options":{ "interaction" : true } }]

  $onlyForChannels[879793133771165696;{"content":"➜ <#879793133771165696>", "embeds": "{newEmbed:{description:<#$channelID> is not the right channel, use the channel on above with showed arrow.}{color: $getVar[gitHex]}}", "ephemeral": true, "options":{ "interaction" : true } }]
  
  $onlyIf[$interactionData[options._subcommand]==holder;]
  `
}
