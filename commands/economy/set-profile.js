module.exports = [
  {
    name: "set-profile",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionModal[Setting up your profile;profileModal;
      {actionRow:
        {textInput:What is in your mind?:1:titleInput:no:Please type something.:0:69:🤗}
      }
      {actionRow:
        {textInput:Let us know you better!:2:descriptionInput:no:I'm...:0:3131}
      }
    ]
    `
  },
  {
    name: "profileModal",
    type: 'interaction',
    prototype: 'modal',
    code: `
    
    $setUserVar[ruby;$sub[$getUserVar[ruby];120]]
    
    $setGlobalUserVar[profileDescription;$textInputValue[descriptionInput]]
    
    $setGlobalUserVar[profileTitle;$textInputValue[titleInput]]
    
    $interactionReply[Updated your profile succesfully 🤠
      ;{newEmbed:
        {title:$textInputValue[titleInput]}
        {description:$textInputValue[descriptionInput]}
        {color:$getVar[gitHex]}
        {footer:Each change costs 120 Rubies.:https://media.discordapp.net/attachments/861208192121569280/987695905983578182/1655555446808.png?width=555&height=497}
      }
    ;;;;yes]
    
    $onlyIf[$getUserVar[ruby]>=120;{"content": "$nonEscape[$customEmoji[git_alert]] You don't have enough money to update your __profile__...\\n*Here's the title and description if you want to copy it.*\\n> Title: **$textInputValue[titleInput]**\\n> Description: $textInputValue[descriptionInput]","ephemeral": "true", "options": {"interaction": true}}]
    `
  }
]
