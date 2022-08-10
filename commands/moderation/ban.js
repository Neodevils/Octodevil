module.exports = {
  name: "ban",
  type: 'interaction',
  prototype: 'slash',
  code: `	
  $interactionFollowUp[$slashOption[user];{newEmbed:
    {author:$userTag[$slashOption[user]] $randomText[got beanned;was puff;be gone thot;disappeared;got punishment;is staying on my blacklist]:$authorAvatar}
    {thumbnail:$userAvatar[$slashOption[user]]}
    {description:$customEmoji[git_info] Here's the details for action#COLON#}
    {field:$customEmoji[git_note] Deleted Messages:**\`$replaceText[$interactionData[options.data[2].value];undefined;Didn't delete any messages.]\`**}
    {field:$customEmoji[git_write] Reason:>>> __$replaceText[$interactionData[options.data[1].value];undefined;No reason have given.]__}
    {color:$getVar[invisibleHex]}
    {footer:Banned user's ID on the content message.}
  }]

  $ban[$slashOption[user];$guildID;$replaceText[$interactionData[options.data[2].value];undefined;0];$replaceText[$interactionData[options.data[1].value];undefined;no reason.]]

  $interactionDefer

  $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$slashOption[user]]]||$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$slashOption[user]]];{"content":"$nonEscape[$customEmoji[git_alert]] You or I cannot done it...","options":{"interaction" : true}}]

  $onlyPerms[ban;{"content":"$nonEscape[$customEmoji[git_alert]] But, you're missing \`BAN_MEMBERS\` permission?","ephemeral": true, "options": {"interaction": true}}]

  $onlyBotPerms[ban;{"content":"$nonEscape[$customEmoji[git_alert]] I'm missing \`BAN_MEMBERS\` permission? eh-","ephemeral": true, "options": {"interaction": true}}]
  `
}
