module.exports = {
  name: "qotd",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $channelSendMessage[$get[id2];$customEmoji[git_commit] <@&$getServerVar[extras]> 💭]
  $wait[1s]
  $let[id2;$createThread[$channelID;➜ $replaceText[$formatDate[$dateStamp;L];/; ⁄ ]'s Question;1440;public;$get[id];yes]]

  $let[id;$sendMessage[{"content":"$nonEscape[$customEmoji[git_discussion]] *$username asks question of the day!*", "embeds":"{newEmbed:{thumbnail:https://media.discordapp.net/attachments/861208192121569280/991263147447042048/teams.png}{description:**No off-topic in thread please, talk about what is the topic about**\\n> \\n> $nonEscape[$customEmoji[git_quote]]**__question__: $slashOption[question]**}{color:$getVar[invisibleHex]}{footer:Daily Discussions ❤️}}", "fetchReply": true,"options":{"interaction":true, "reactions": ["991256635253194792"]}};yes]]

  $onlyForRoles[$getVar[owner];$getVar[admin];$getVar[mod];{"content":"$nonEscape[$customEmoji[git_alert]] You don't have any staff role to make question of the daily.","ephemeral": "true", "options": {"interaction": true}}]
  `
}
