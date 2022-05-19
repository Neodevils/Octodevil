module.exports = {
  name: "function",
  type: 'interaction', 
  prototype: 'slash', 
  code: `
  $interactionReply[;{newEmbed:
    {title:Searched for $interactionData[options.data[0].value]}
    {author:aoi.js (stable)}
    {thumbnail:$userAvatar[$clientID]}
    {field:$customEmoji[kaeruNotVerified] name:\`\`\`js
$jsonRequest[https://api.leref.ga/functions/$interactionData[options.data[0].value];data[0].name;{"content":"e"}]\`\`\`}
    {field:$customEmoji[kaeruTips] usage:\`\`\`js
$jsonRequest[https://api.leref.ga/functions/$interactionData[options.data[0].value];data[0].usage;{"content":"e"}]\`\`\`}
    {field:$customEmoji[kaeruInfo] description:\`\`\`js
$jsonRequest[https://api.leref.ga/functions/$interactionData[options.data[0].value];data[0].desc;{"content":"e"}]\`\`\`}
    {field:$customEmoji[kaeruCode] source:[Source Code]($replaceText[https://github.com/Leref/aoi.js/blob/master/package/functions/funcs/$interactionData[options.data[0].value].js;$;])}
    {footer:Note#COLON#For checking source code, please enter full name of function!}
    {color:$getVar[yellowHex]}
  }]
  `
}
