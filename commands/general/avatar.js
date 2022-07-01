module.exports = {
  name: "avatar",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $sendMessage[{"embeds": "{newEmbed:{author:$userTag[$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]}{title:$customEmoji[git_mention] × Profile Picture}{description:Tap to below to go the member's user profile 
> [Tap here]($userAvatar[$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]).}{color:$getRoleColor[$highestRole[$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]]}{image:$memberAvatar[$guildID;$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]}}", "fetchReply": true, "options": {"interaction": true, "reactions": ["992468316973187173","990871412111712306","990871472635510826"]}}]
  `
}
