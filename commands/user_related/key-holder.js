module.exports = {
  name: "give-me", 
  type: 'interaction', 
	prototype: 'slash', 
	$if: 'v4',
  code: `
  $if[$getUserVar[keyHolderCount]==1]
	$cooldown[6h;]
  $setUserVar[keyHolderCount;0]
  $setUserVar[taskDone;$sub[$getUserVar[taskDone];1]]

  You have completed "Claim key holder 2 times" task! The cooldown will reset in 6 hours.

	$setUserVar[taskDone;$sum[$getUserVar[taskDone];1]]
    
  $setUserVar[ruby;$sum[$getUserVar[ruby];400]]
  $endif

	$interactionReply[<@&$getVar[keyRole]> claimed.;{newEmbed:{description:$customEmoji[git_key] Great! Now you will be earning __rubies__ while holding the key!}{color:$getVar[invisibleHex]}}]
 
 $setUserVar[keyHolderCount;$sum[$getUserVar[keyHolderCount];1]]
  
 $giveRole[$guildID;$authorID;$getVar[keyRole]]
	
  $takeRole[$guildID;$usersWithRole[$getVar[keyRole];$guildID;id];$getVar[keyRole]]

  $onlyIf[$hasRoles[$guildID;$authorID;$getVar[keyRole]]==false;{"content": "$nonEscape[$customEmoji[git_key]] You are already **__holding__** <@&$getVar[keyRole]> role.", "ephemeral": true, "options":{ "interaction" : true } }]

  $onlyForChannels[879793133771165696;{"content":"➜ <#879793133771165696>", "embeds": "{newEmbed:{description:<#$channelID> is not the right channel, use the channel on above with showed arrow.}{color: $getVar[gitHex]}}", "ephemeral": true, "options":{ "interaction" : true } }]
  
  
  `
}
