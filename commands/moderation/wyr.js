module.exports = {
  name: "wyr",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $sendMessage[{"embeds":"{newEmbed:{description:˚｡ *╭ ₊˚✿ would you rather ₊˚✿੭ ʕ · ﻌ · ʔ\\n$nonEscape[$customEmoji[kaeruMilestone]] ┊ Question: **Would you rather...**\\n๑ ꒦︶︶꒷︶︶︶꒷꒦ ɞ\\n$nonEscape[$customEmoji[kaeruTag]]  ┊。<:br_number_1:837050777129451550> $interactionData[options.data[0].value]\\n ┊or\\n$nonEscape[$customEmoji[kaeruTag]]  ┊。<\:y_number_2\:837050845325426729> $interactionData[options.data[1].value]}{footer:$username asked:$authorAvatar}{timestamp}{color:$getVar[pinkHex]}}", "fetchReply" : true,"options": {"reactions" : ["837050777129451550","837050845325426729"],"interaction" : true}}]

    $onlyForRoles[$getVar[owner];$getVar[admin];$getVar[mod];{"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> You don't have a staff role to make would you rather~}{color:$getVar[redHex]}}","ephemeral": "true", "options": {"interaction": true}}]
  `
}
