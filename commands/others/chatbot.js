module.exports = {
  name: '$alwaysExecute',
  code: `  
  $reply[$messageID;no]

  $jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$message&botname=Aiden&ownername=Neo;message]

  $botTyping

  $onlyIf[$checkContains[$message;@everyone;@here]==false;{newEmbed:{description:I don't disturb people!}{color:ccb0b0}}]

  $onlyForChannels[741841576992702505;{}]

  $suppressErrors
  `
}
