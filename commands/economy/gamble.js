module.exports = {
  name: "gamble",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $interactionReply[;$nonEscape[$if[$randomText[success;fail;fail;fail;success]==success;{newEmbed:
    {title:GAMBLING!}
    {description:$customEmoji[kaeruNumbers] You've won $customEmoji[kaeruToken] **$numberSeparator[$slashOption[amount]] tokens!**}
    {field: **$random[0;100]%** win chance, amazing!:>>> Rolled \`$random[6;10]\`﹒$username[$authorID]
Rolled \`$random[1;5]\`﹒$username[$clientID]}
    {color:$getVar[pinkHex]}
    {footer:$slashOption[amount] tokens claimed}
  };{newEmbed:
    {title:uh, gambling..}
    {description:$customEmoji[kaeruNumbers] You've lost $customEmoji[kaeruToken] **$numberSeparator[$slashOption[amount]] tokens...**}
    {field: **$random[0;100]%** win chance thou, but you lost..:>>> Rolled \`$random[1;5]\`﹒$username[$authorID]
Rolled \`$random[6;10]\`﹒$username[$clientID]}
    {color:$getVar[pinkHex]}
    {footer:-$slashOption[amount] tokens lost}
  }]]]
	
  $setGlobalUserVar[token;$sum[$getGlobalUserVar[token];$if[$randomText[success;fail;fail;fail;success]==success;$slashOption[amount];-$slashOption[amount]]]]
	
  $onlyIf[$slashOption[amount]<=$getUserVar[token];{"content": "$nonEscape[$customEmoji[kaeruAlert]] You don't have enough __tokens__ $nonEscape[:(]","ephemeral": "true", "options": {"interaction": true}}]

  $onlyIf[$slashOption[amount]>0;{"content": "$nonEscape[ ehehe :) my smart cutie :*]","ephemeral": "true", "options": {"interaction": true}}]
  `
}
