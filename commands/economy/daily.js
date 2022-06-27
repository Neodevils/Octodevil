module.exports = {
  name: "daily", 
  type: 'interaction', 
  prototype: 'slash',
  code: `
  $interactionEdit[;{newEmbed:{title:$customEmoji[git_bookmark] Signed-in successfully}{field:꒷꒦ received:➜ $customEmoji[git_ruby] × \`$abbreviate[$multi[100;$getGlobalUserVar[dailyMultiplier]];1]\` Rubies 
➜ $customEmoji[git_package] × \`1\` G-Pack}{color:$getVar[invisibleHex]}{thumbnail:$authorAvatar}{footer:🝩 You can sign-in next day 🙌}}]
  
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
  
  $setUserVar[dailyMultiplier;$sum[$getUserVar[dailyMultiplier];1]]
	
  $setUserVar[ruby;$math[$getUserVar[ruby]+(100*$getGlobalUserVar[dailyMultiplier])]]
	
  $setGlobalUserVar[cube;$sum[$getGlobalUserVar[cube];1]]
  
  $cooldown[24h;{"embeds":"{newEmbed:{description:$nonEscape[$customEmoji[git_alert] Not available at the moment~\\n>>> \\n**Available in: %time%**}{color:$getVar[gitHex]}{thumbnail:https://media.discordapp.net/attachments/987355726257201204/987402539899187250/Balksz22_20220617163459.png}","ephemeral" : true,"options" : {"interaction" : true}}]

  $log[⊢ $userTag, used daily command.]
	`
}
