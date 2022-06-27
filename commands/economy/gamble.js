module.exports = {
  name: "gamble",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $interactionEdit[;$nonEscape[$if[$randomText[success;fail;fail;fail;success]==success;{newEmbed:
    {title:G-gambling 👉👈}
    {description:$customEmoji[git_numbers] You've won $customEmoji[git_ruby] **$numberSeparator[$slashOption[amount]] Rubies!**}
    {field: **$random[0;100]%** win chance, amazing!:>>> Rolled \`$random[6;10]\`﹒$username[$authorID]
Rolled \`$random[1;5]\`﹒$username[$clientID]}
    {color:$getVar[blueHex]}
    {footer:$slashOption[amount] rubies claimed (｡ﾉωﾉ)}
  };{newEmbed:
    {title:uh, ごめんなさい...}
    {description:$customEmoji[git_numbers] I take your $customEmoji[git_ruby] **$numberSeparator[$slashOption[amount]] Rubies...** (*´꒳\`*)}
    {field: **$random[0;100]%** win chance thou, but you lost..:>>> Rolled \`$random[1;5]\`﹒$username[$authorID]
Rolled \`$random[6;10]\`﹒$username[$clientID]}
    {color:$getVar[gitHex]}
    {footer:-$slashOption[amount] Rubies lost-}
  }]]]
  $wait[100ms]
  $interactionEdit[*rolling...*]
	$wait[200ms]
	$interactionEdit[*rolling..*]
	$wait[200ms]
	$interactionReply[*rolling.*]
	
  $setUserVar[ruby;$sum[$getUserVar[ruby];$if[$randomText[success;fail;fail;fail;success]==success;$slashOption[amount];-$slashOption[amount]]]]
	
  $onlyIf[$slashOption[amount]<=$getUserVar[ruby];{"content": "$nonEscape[$customEmoji[git_alert]] You don't have enough __ruby__...","ephemeral": "true", "options": {"interaction": true}}]

  $onlyIf[$slashOption[amount]>0;{"content": "$nonEscape[Hehehe! :)]","ephemeral": "true", "options": {"interaction": true}}]
  
  $cooldown[30s;{"content":"$nonEscape[$customEmoji[git_alert] You're a little bit fast, don't you? Wait __%time%__ 🤫","ephemeral" : true,"options" : {"interaction" : true}}]

  $log[⊢ $userTag, used gamble command.]
  `
}
