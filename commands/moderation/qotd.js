module.exports = {
  name: "qotd",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $channelSendMessage[$get[id2];<a:dp_star6:835142297125519420> <@&$getServerVar[extras]> Hii, let us hear your opinion 🤠]
  $wait[1s]
  $let[id2;$createThread[$channelID;➜ $replaceText[$formatDate[$dateStamp;L];/; ⁄ ]'s AOTD ﹆;1440;public;$get[id];yes]]

  $let[id;$sendMessage[{"content":"$nonEscape[$customEmoji[git_discussion]] *$username asks question of the day!*", "embeds":"{newEmbed:{thumbnail:$serverIcon}{description:*No off-topic in thread please, talk about what is the topic about \`❤️\`*\\n✄・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・\\n> **__question__: $interactionData[options.data[0].value]** \\n ✄・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・}{color:$getVar[gitHex]}}", "fetchReply": true,"options":{"interaction":true, "reactions": ["991248874238910524"]}};yes]]

  $onlyForRoles[$getVar[owner];$getVar[admin];$getVar[mod];{"content":"$customEmoji[git_alert] You don't have any staff role to make question of the daily.","ephemeral": "true", "options": {"interaction": true}}]
  `
}
