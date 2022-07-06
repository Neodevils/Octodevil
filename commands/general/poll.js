module.exports = [
  {
    name: "poll",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionModal[Creating a poll ;pollModal;
      {actionRow:
        {textInput:What is the subject of the poll?:1:titlePollInput:yes: Please describe something about your poll.:5:80}
      }
      {actionRow:
        {textInput:Please type first option below:1:firstPollInput:yes: Waiting you to text first option...:1:120}
      }
      {actionRow:
        {textInput:Also type second option below:secondPollInput:yes:Also waiting you to text second option...:1:120}
      }
    ]
    `
  },
  {
    name: "pollModal",
    type: 'interaction',
    prototype: 'modal',
    code: `
    $createThread[$channelID;➜ Comment Thread — by $userTag;MAX;public;$get[id]]
  
    $let[id;$sendMessage[{
      "content": "$customEmoji[git_table] *$username created a poll.*",
      "embeds": "{newEmbed:{title:$textInputValue[titlePollInput]}{description:>>> • $textInputValue[firstPollInput]\\n\\n• $textInputValue[secondPollInput]}{color:$getVar[invisibleHex]}{thumbnail:}{footer:You can discuss in comment thread 🙌🏻}}",
      "fetchReply": true, 
      "options": {
        "reactions" : ["954552276717043812","954552202654019644"],
        "interaction" : true
      }
    };yes]]
  `
  } 
]
