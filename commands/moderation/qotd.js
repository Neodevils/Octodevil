module.exports = {
  name: "qotd",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $channelSendMessage[$get[id2];<a:dp_star6:835142297125519420> <@&$getServerVar[extras]> hiii! lemme hear your thoughts about it *!*]
  $wait[1s]
  $let[id2;$createThread[$channelID;・𓄼 $replaceText[$formatDate[$dateStamp;L];/; ⁄ ]'s aotd ﹆;1440;public;$get[id];yes]]

  $let[id;$sendMessage[{"content":"$nonEscape[$customEmoji[kaeruDiscuss]] *$username asks question of the day!*", "embeds":"{newEmbed:{thumbnail:$serverIcon}{description:*No off-topic in thread pwease, talk about what is the topic about :3*\\n✄・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・\\n> **__question__: $interactionData[options.data[0].value]** \\n ✄・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・}{color:$getVar[pinkHex]}}", "fetchReply": true,"options":{"interaction":true, "reactions": ["958968024868737084"]}};yes]]

  $onlyForRoles[$getVar[owner];$getVar[admin];$getVar[mod];{"content":"$customEmoji[kaeruAlert] You don't have any staff role to make question of the daily (｡ﾉ_ﾉ)","ephemeral": "true", "options": {"interaction": true}}]
  `
}
