module.exports = {
  name: "ban",
  type: 'interaction',
  prototype: 'slash',
  code: `	
  $interactionFollowUp[$slashOption[user];{newEmbed:
    {author:$userTag[$slashOption[user]] $randomText[got beanned;was puff;be gone thot;disappeared;got punishment;is staying on my blacklist]:$authorAvatar}
    {thumbnail:$userAvatar[$slashOption[user]]}
    {description:$customEmoji[kaeruAction] Here's the details for action :3}
    {field:$customEmoji[kaeruNote] Deleted Messages:**\`$replaceText[$interactionData[options.data[2].value];undefined;Didn't delete any messages :3]\`**}
    {field:$customEmoji[kaeruPencil] Reason:>>> __$replaceText[$interactionData[options.data[1].value];undefined;No reason given :3]__}
    {color:$getVar[redHex]}
    {footer:Banned user's ID on the content message #COLON#3}
  }]

  $ban[$slashOption[user];$guildID;$replaceText[$interactionData[options.data[2].value];undefined;0];$replaceText[$interactionData[options.data[1].value];undefined;no reason.]]

  $interactionDefer

  $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$slashOption[user]]];{"content":"$nonEscape[$customEmoji[kaeruAlert]] Uh, **$username[$slashOption[user]]** has higher position on role position than mine, senpai (╯︵╰,)","options":{"interaction" : true}}]

  $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$slashOption[user]]];{"content":"$nonEscape[$customEmoji[kaeruAlert]] Uh, **$username[$slashOption[user]]** has higher position on role position senpai (╯︵╰,), you can't :(","options":{"interaction" : true}}]

  $onlyPerms[ban;{"content":"$nonEscape[$customEmoji[kaeruAlert]] Ehehehe, you're missing \`BAN_MEMBERS\` permission :3","ephemeral": true, "options": {"interaction": true}}]

  $onlyBotPerms[ban;{"content":"$nonEscape[$customEmoji[kaeruAlert]] I'm missing \`BAN_MEMBERS\` permission? eh-","ephemeral": true, "options": {"interaction": true}}]
  `
}
