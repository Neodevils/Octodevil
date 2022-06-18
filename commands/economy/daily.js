module.exports = {
  name: "daily", 
  type: 'interaction', 
  prototype: 'slash',
  code: `
	
  $setGlobalUserVar[dailyMultiplier;$sum[$getGlobalUserVar[dailyMultiplier];1]]
	
  $setGlobalUserVar[token;$math[$getGlobalUserVar[token]+(1000*$getGlobalUserVar[dailyMultiplier])]]
	
  $setGlobalUserVar[cube;$sum[$getGlobalUserVar[cube];1]
	
  $interactionEdit[;{newEmbed:{title:$customEmoji[mnsBookmark] Signed-in successfully}{field:꒷꒦ received:➜ $customEmoji[mnsToken] × \`$abbreviate[$multi[1000;$getGlobalUserVar[dailyMultiplier]];1]\` AKI Tokens 
➜ $customEmoji[mnsCube] × \`1\` Infected Cube}{color:$getVar[invisibleHex]}{thumbnail:$authorAvatar}{footer:𖥂 You can sign-in next day}}]
  
  $wait[$random[2500;3500]ms]
  $interactionEdit[100% ✱✱✱✱✱✱✱✱✱✱ 100%]
  $wait[$random[1000;1500]ms]
  $interactionEdit[$random[81;99]% ✱✱✱✱✲✲✱✱✱✱ $random[81;99]%]
  $wait[$random[1000;1500]ms]
  $interactionEdit[$random[41;60]% ✱✱✱✲✲✲✲✱✱✱ $random[41;60]%]
  $wait[$random[1000;1500]ms]
  $interactionEdit[$random[21;40]% ✱✱✲✲✲✲✲✲✱✱ $random[21;40]%]
  $wait[$random[1000;1500]ms]

  $interactionReply[$random[1;20]% ✱✲✲✲✲✲✲✲✲✱ $random[1;20]%]

  $cooldown[24h;{"embeds":"{newEmbed:{description:$nonEscape[$customEmoji[mnsImportant] Not available at the moment~\\n>>> \\n**Available in: %time%**}{color:$getVar[blueHex]}{thumbnail:https://media.discordapp.net/attachments/987355726257201204/987402539899187250/Balksz22_20220617163459.png}","ephemeral" : true,"options" : {"interaction" : true}}]

  $log[— $userTag, used Daily Slash Interaction.
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]
	`
}
