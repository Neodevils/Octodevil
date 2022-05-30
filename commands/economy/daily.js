module.exports = {
  name: "daily", 
  type: 'interaction', 
  prototype: 'slash',
  code: `
	
	$setGlobalUserVar[dailyMultiplier;$sum[$getGlobalUserVar[dailyMultiplier];100]]
	
  $setGlobalUserVar[token;$math[$getGlobalUserVar[token]+(1000*$getGlobalUserVar[dailyMultiplier])]]
	
	$setGlobalUserVar[cube;$sum[$getGlobalUserVar[cube];1]
	
  $interactionEdit[;{newEmbed:{title:$customEmoji[kaeruBookmark] Signed-in successfully}{field:꒷꒦ received:➜ $customEmoji[kaeruToken] × \`$abbreviate[$multi[1000;$getGlobalUserVar[dailyMultiplier]];1]\` AKI Tokens 
➜ $customEmoji[kaeruCube] × \`1\` Infected Cube}{color:$getVar[gitHex]}{thumbnail:$authorAvatar}{footer:𖥂 You can sign-in next day}}]
  
  $wait[$random[2500;3500]ms]
  $interactionEdit[$customEmoji[kaeruLoading] 100% ✱✱✱✱✱✱✱✱✱✱ 100%]
  $wait[$random[1000;1500]ms]
  $interactionEdit[$customEmoji[kaeruLoading] $random[81;99]% ✱✱✱✱✲✲✱✱✱✱ $random[81;99]%]
  $wait[$random[1000;1500]ms]
  $interactionEdit[$customEmoji[kaeruLoading] $random[41;60]% ✱✱✱✲✲✲✲✱✱✱ $random[41;60]%]
  $wait[$random[1000;1500]ms]
  $interactionEdit[$customEmoji[kaeruLoading] $random[21;40]% ✱✱✲✲✲✲✲✲✱✱ $random[21;40]%]
  $wait[$random[1000;1500]ms]

  $interactionReply[$customEmoji[kaeruLoading] $random[1;20]% ✱✲✲✲✲✲✲✲✲✱ $random[1;20]%]

  $cooldown[24h;{"embeds":"{newEmbed:{description:$nonEscape[$customEmoji[kaeruAlert] Not available at the moment~\\n> **Available in: %time%**}{color:$getVar[redHex]}}","ephemeral" : true,"options" : {"interaction" : true}}]

  $log[— $userTag, used Daily Slash Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]
	`
}
