module.exports = [
  {
    name: "function",
    type: "interaction",
    $if: "v4",
    prototype: "slash",
    code: `
    $if[$isAutocomplete==true]
  
      $if[$message[1]!=&&$message[1]!=$]
        $autocompleteRespond[
          $djseval[JSON.stringify(client.functionManager.functions.filter(x => x.toLowerCase().startsWith("$slashOption[name]".toLowerCase())).map(x =>{  return {name : x, value : x.toLowerCase()}}));yes]
        ]
      $endif
    
    $else
  
      $interactionReply[;
        {newEmbed:
          {author:$userTag:$authorAvatar}
          {thumbnail:https://media.discordapp.net/attachments/987355726257201204/987393691360592003/code.png}
          {field:$customEmoji[git_pending] Function Name:\`\`\`js\n$slashOption[name]\n\`\`\`}
          {field:$customEmoji[git_hint] Usage:\`\`\`js\n$djseval[const a = client.functionManager.usage.get(client.functionManager.functions.find(x =>  x.toLowerCase().startsWith(args.join(" ").toLowerCase()))?.toLowerCase())\na === null ? " — No Parameters Found." : a === undefined ? " — Usage Not Found." : client.functionManager.functions.find(x => x.toLowerCase().startsWith(args.join(" ").toLowerCase()))+a;yes]\n\`\`\`}
          {color:$getVar[invisibleHex]}
        };{actionRow:
          {button:Show source code:2:source_$slashOption[name]:false:$nonEscape[$customEmoji[git_code]]}
        }
      ]
    
    $endif
    `
  }, 
  {
    type: 'interaction',
    prototype: 'button',
    code: `
    $interactionReply[\`\`\`js\n$djsEval[client.functionManager.cache.get("$replaceText[$get[name];$;]").code.toString();yes]\n\`\`\`;;;;;yes]
  
    $onlyIf[$get[customId]==source;]

    $let[name;$splitText[2]]
    $let[customId;$splitText[1]]
    $textSplit[$interactionData[customId];_]
    `
  }
]
