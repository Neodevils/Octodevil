module.exports = {
  name: "gamble",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $interactionReply[;$nonEscape[$if[$randomText[success;fail;fail;fail;success]==success;{newEmbed:
    {title:GAMBLING!}
    {description:$customEmoji[kaeruNumbers] You've won **$$numberSeparator[$slashOption[amount]]**}
    {field: **$random[0;100]%** win chance:>>> Rolled \`$random[6;10]\`﹒$username[$authorID]
Rolled \`$random[1;5]\`﹒$username[$clientID]}
    {color:$getVar[pinkHex]}
    {footer:+$$slashOption[amount]}
  };{newEmbed:
    {title:uh, gambling..}
    {description:$customEmoji[kaeruNumbers] You've lost **$$numberSeparator[$slashOption[amount]]**}
    {field: **$random[0;100]%** win chance thou, but you lost..:>>> Rolled \`$random[1;5]\`﹒$username[$authorID]
Rolled \`$random[6;10]\`﹒$username[$clientID]}
    {color:$getVar[pinkHex]}
    {footer:-$$slashOption[amount]}
  }]]]
	
  $if[$randomText[success;fail;fail;fail;success]==success;$setUserVar[money;$sum[$getUserVar[money];$slashOption[amount]]];$setUserVar[money;$sub[$getUserVar[money];$slashOption[amount]]]]
	
  $onlyIf[$slashOption[amount]<=$getUserVar[money];{"content": "$nonEscape[$customEmoji[kaeruAlert]] You don't have enough money $nonEscape[:(]","ephemeral": "true", "options": {"interaction": true}}]

  $onlyIf[$slashOption[amount]>0;{"content": "$nonEscape[ ehehe :) my smart cutie :*]","ephemeral": "true", "options": {"interaction": true}}]
  `
}
