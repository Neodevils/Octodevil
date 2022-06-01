module.exports = [
  {
    name: "commission",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionModal[Commission Meeting;commissionModal;{actionRow:{textInput:Please type "$getGlobalUserVar[randomString]" on the field 👉👈:1:commissionInput:yes:Please write the meeting password on the above hehe:$charCount[$getGlobalUserVar[randomString]]:$charCount[$getGlobalUserVar[randomString]]}}]
  
    $setGlobalUserVar[randomString;$randomString[$random[4;12]]]
    `
  },
  {
    name: "commissionModal",
    type: 'interaction',
    prototype: 'modal',
    code: `
    $setGlobalUserVar[token;$sum[$getGlobalUserVar[token];$randomText[100;100;100;100;100;100;100;100;400;400;400;400;1200;1200;1200]]]
    
    $interactionReply[
    ;$nonEscape[$if[$getGlobalUserVar[randomString]==$textInputValue[commissionInput];{newEmbed:{title:$customEmoji[kaeruVerified] \`$textInputValue[commissionInput]\`}{description:$customEmoji[kaeruToken] × $randomText[100;100;100;100;100;100;100;100;400;400;400;400;1200;1200;1200] AKI Tokens sent to your account. ヾ(〃^∇^)ﾉ}{color:$getVar[blueHex]}{image:https://media.discordapp.net/attachments/861208192121569280/981529632639684658/kaeru_n_octadex_commission.gif}{footer:Let's leave everything to Octadex 𖤪}};{newEmbed:{title: $customEmoji[kaeruAlert] \`$textInputValue[commissionInput]\` was wrong...}{description:㏒ — No tokens received in this commission. (╯•﹏•╰)}{color:$getVar[redHex]}{image:https://media.discordapp.net/attachments/861208192121569280/981558017369718804/kaeru_error.gif}{footer:We should not fail Octadex...}}]]
    ;$nonEscape[$if[$getGlobalUserVar[randomString]==$textInputValue[commissionInput];{actionRow:{selectMenu:comm:𓊈・・・Mission Accomplished・・・𓊉:1:1:yes:{selectMenuOptions:-:-}}};{actionRow:{selectMenu:comm:𓊈・・・Mission Failed・・・𓊉:1:1:yes:{selectMenuOptions:-:-}}}]]]
    
    `
  }
]
