module.exports = {
  name: "wyr",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $sendMessage[{"embeds":"{newEmbed:{thumbnail:https://media.discordapp.net/attachments/861208192121569280/990524072196702248/09-32-28-protected_tags.png}{description:˚｡ *╭ ₊˚✿ would you rather ₊˚✿੭ ʕ · ﻌ · ʔ\\n$nonEscape[$customEmoji[git_ilestone]] ┊ Question: **Would you rather...**\\n๑ ꒦︶︶꒷︶︶︶꒷꒦ ɞ\\n$customEmoji[git_tag] ┊ $customEmoji[git_previous] 。$slashOption[this]\\n ┊or\\n$customEmoji[git_tag] ┊ $customEmoji[git_next] 。$slashOption[that]}{footer:$username asked:$authorAvatar}{timestamp}{color:$getVar[invisibleHex]}}", "fetchReply" : true,"options": {"reactions" : ["954552276717043812","954552202654019644"],"interaction" : true}}]

  $onlyForRoles[$getVar[staff];{"content":"$nonEscape[$customEmoji[git_alert]] Not allowed to use it. Gonna cry or swear...","ephemeral": "true", "options": {"interaction": true}}]
  `
}
