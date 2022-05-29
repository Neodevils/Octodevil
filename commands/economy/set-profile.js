module.exports = [
  {
    name: "set-profile",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionModal[Setting up my profile :3;profileeModal;
      {actionRow:
        {textInput:❀ What is in your mind (´･ω∩\`*) ?:1:titleInput:no:Okairi, Dokutah. 🐰:0:69:🌸}
      }
      {actionRow:
        {textInput:❀ Let us know you better:2:descriptionInput:no:I'm...:0:3131}
      }
    ]
    `
  },
  {
    name: "profileeModal",
    type: 'interaction',
    prototype: 'modal',
    code: `
    
    $setGlobalUserVar[token;$sub[$getGlobalUserVar[token];120]]
    
    $setGlobalUserVar[profileDescription;$textInputValue[descriptionInput]]
    
    $setGlobalUserVar[profileTitle;$textInputValue[titleInput]]
    
    $interactionReply[Updated your profile succesfully ヾ(〃^∇^)ﾉ
      ;{newEmbed:
        {title:$textInputValue[titleInput]}
        {description:$textInputValue[descriptionInput]}
        {color:#ec775c}
        {footer:Each change costs 120 AKI Tokens.:https://media.discordapp.net/attachments/861208192121569280/980186689588838400/1653765096487.png}
      }
    ;;;;yes]
    
    $onlyIf[$getGlobalUserVar[token]>=120;{"content": "$nonEscape[$customEmoji[kaeruAlert]] You don't have enough money to update your __profile__ $nonEscape[:(]\\n> Title: **$textInputValue[titleInput]**\\n> Description: $textInputValue[descriptionInput]","ephemeral": "true", "options": {"interaction": true}}]
    `
  }
]
