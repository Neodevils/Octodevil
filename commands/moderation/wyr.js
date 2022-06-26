module.exports = {
  name: "wyr",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $sendMessage[{"embeds":"{newEmbed:{thumbnail:https://media.discordapp.net/attachments/861208192121569280/990524072196702248/09-32-28-protected_tags.png}{description:˚｡ *╭ ₊˚✿ would you rather ₊˚✿੭ ʕ · ﻌ · ʔ\\n$nonEscape[$customEmoji[mnsMilestone]] ┊ Question: **Would you rather...**\\n๑ ꒦︶︶꒷︶︶︶꒷꒦ ɞ\\n$nonEscape[$customEmoji[mnsTag]]  ┊。<:br_number_1:837050777129451550> $interactionData[options.data[0].value]\\n ┊or\\n$nonEscape[$customEmoji[mnsTag]]  ┊。<\:y_number_2\:837050845325426729> $interactionData[options.data[1].value]}{footer:$username asked:$authorAvatar}{timestamp}{color:$getVar[invisibleHex]}}", "fetchReply" : true,"options": {"reactions" : ["837050777129451550","837050845325426729"],"interaction" : true}}]

    $onlyForRoles[$getVar[owner];$getVar[admin];$getVar[mod];{"embeds":"{newEmbed:{description:$customEmoji[mnsImportant] You don't have a staff role to make would you rather~}{color:$getVar[invisibleHex]}}","ephemeral": "true", "options": {"interaction": true}}]
  `
}
