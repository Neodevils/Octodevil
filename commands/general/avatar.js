module.exports = {
  name: "avatar",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $sendMessage[{"embeds": "{newEmbed:{author:$userTag[$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]}{title:・┈┈・・$customEmoji[kaeruAvatar]・・┈┈・}{description:[─﹕๑ Profile Avatar Link]($userAvatar[$replaceText[$interactionData[options.data[0].value];undefined;$authorID]])}{color:$getRoleColor[$highestRole[$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]]}{image:$memberAvatar[$guildID;$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]}}", "fetchReply": true, "options": {"interaction": true, "reactions": ["969594396959977512","968503176372301855","968503004720418877"]}}]
  `
}
