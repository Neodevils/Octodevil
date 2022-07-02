module.exports = [
  {
    name: "c-profile",
    code: `
    $reply[$messageID;no]
    
    Created profile modal successfully.
    
    $createApplicationCommand[$guildID;profile;Set your profile with modal;true;slash]
    
    `
  },
  {
    name: "profile", 
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionModal[Hello there!;profileModal;
      {actionRow:
        {textInput:What's your name?:1:nameModal:yes:$username:3:30:$username}}
      {actionRow:
        {textInput:How old are you?:2:ageModal:no:13:0:2}
      }]
    `
  }, 
  {
    name: "profileModal",
    type: 'interaction',
    prototype: 'modal',
    code: `
    $interactionReply[Nice to meet you, **$textInputValue[nameModal]**. So you are $textInputValue[ageModal] years old.]
    `
  }
]