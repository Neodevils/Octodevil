module.exports = {
  name: "wyr",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $sendMessage[{"embeds":"{newEmbed:{thumbnail:https://media.discordapp.net/attachments/861208192121569280/990524072196702248/09-32-28-protected_tags.png}{description:˚｡ *╭ ₊˚✿ would you rather ₊˚✿੭ ʕ · ﻌ · ʔ\\n$nonEscape[$customEmoji[mnsMilestone]] ┊ Question: **Would you rather...**\\n๑ ꒦︶︶꒷︶︶︶꒷꒦ ɞ\\n$customEmoji[mnsTag] ┊ $customEmoji[mnsPrevious] 。$slashOption[this]\\n ┊or\\n$customEmoji[mnsTag] ┊ $customEmoji[mnsNext] 。$slashOption[that]}{footer:$username asked:$authorAvatar}{timestamp}{color:$getVar[invisibleHex]}}", "fetchReply" : true,"options": {"reactions" : ["954552276717043812","954552202654019644"],"interaction" : true}}]

    $onlyForRoles[$getVar[owner];$getVar[admin];$getVar[mod];{"embeds":"{newEmbed:{description:$customEmoji[mnsImportant] You don't have a staff role to make would you rather~}{color:$getVar[invisibleHex]}}","ephemeral": "true", "options": {"interaction": true}}]
  `
}
