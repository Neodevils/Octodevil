module.exports = {
  name: "function",
  type: 'interaction', 
  prototype: 'slash', 
  code: `
  $interactionReply[;{newEmbed:
    {author:$userTag:$authorAvatar}
    {thumbnail:https://media.discordapp.net/attachments/987355726257201204/987393691360592003/code.png}
    {field:$customEmoji[git_pending] Function Name:\`\`\`php
$jsonRequest[https://api.leref.ga/functions/$interactionData[options.data[0].value];data[0].name;{"content":"Some...thing... went... w...rong..."}]\`\`\`}
    {field:$customEmoji[git_hint] Usage:\`\`\`javascript
$jsonRequest[https://api.leref.ga/functions/$interactionData[options.data[0].value];data[0].usage]\`\`\`}
    {field:$customEmoji[git_info] Description:\`\`\`js
$jsonRequest[https://api.leref.ga/functions/$interactionData[options.data[0].value];data[0].desc]\`\`\`}
    {field:$customEmoji[git_code] Source Code:[Tap to here]($replaceText[https://github.com/Leref/aoi.js/blob/master/package/functions/funcs/$interactionData[options.data[0].value].js;$;])}
    {footer:Note#COLON# For checking source code, please enter full name of function!}
    {color:$getVar[invisibleHex]}
  }]
  `
}
