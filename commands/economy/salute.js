module.exports = {
  name: "salute",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $setGlobalUserVar[saluteTask;true]
  
  $setGlobalUserVar[starCount;$sum[$getGlobalUserVar[starCount;$slashOption[user]];1];$slashOption[user]]
  
  $setUserVar[ruby;$sum[$getUserVar[ruby];1]]
  
  $interactionReply[
    **$username** salutes __$slashOption[user]__.;
    {newEmbed:
      {author: Successfully stared!:$authorAvatar}
      {description: By giving them a $customEmoji[git_star], you have received#COLON#\n>>> $customEmoji[git_ruby] × **250** rubies!
      }
      {field: Now they have: $customEmoji[git_star] $getGlobalUserVar[starCount;$slashOption[user]] stars}
      {color: $getVar[invisibleHex]}
      {thumbnail: $userAvatar[$slashOption[user]]}
    }
  ]
  
  $cooldown[2h;{
    "content": "You **can** give star to your idolized person %time% later.",
    "ephemeral": true,
    "options": {
      "interaction": true
    }
  }]]
  
  $onlyIf[$slashOption[user]!=$authorID;{
    "content": "You **can not** give star to yourself.",
    "ephemeral": true,
    "options": {
      "interaction": true
    }
  }]
  `
}
