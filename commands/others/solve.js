module.exports = {
  name: "solve",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $archiveThread[$channelID;975769902218616942]
    
  $wait[2s]
  
  $interactionReply[$customEmoji[git_closed] <@$authorID> — Marked this thread as solved.]
    
  $onlyIf[$channelType==publicthread;{
    "content": "This is not a thread of support channel.",
    "ephemeral": true,
    "options": {
      "interaction": true
    }  
  }]
    
  $onlyForIds[$getVar[owner];$channel[$channelID;ownerId];{
    "content": "You are not OP of this thread or support.",
    "ephemeral": true,
    "options": {
      "interaction": true
    }
  }]
  `
}
