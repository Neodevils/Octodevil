module.exports = [
  {
    name: "c-setnick", 
    code: `
    $reply[$messageID;yes]

    Created set-nickname slash interaction successfully.
    
    $createApplicationCommand[$guildID;set-nickname;Set a nickname for an user.;true;slash;nick:please enter a new nickname.:true:3;user:please select an user to change their nickname.:false:6]
    
    $onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]
    `
  }, 
  {
    name: "set-nickname",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $changeNickname[$replaceText[$interactionData[options.data[1].value];undefined;$authorID];$slashOption[nick]]

    $interactionReply[$userTag[$interactionData[options.data[1].value]]'s nickname changed to \`$slashOption[nick]\` successfully.]

    $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$interactionData[options.data[1].value]]];{
      "content":"That user is higher than you on role position.",
      "options":{
        "interaction" : true
      }
    }]

    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$interactionData[options.data[1].value]]];{
      "content":"That user has higher role than my role position.",
      "options":{
        "interaction" : true
      }
    }]

    $onlyBotPerms[managenicknames;{
      "content":"I'm missing \`manage_nicknames\` permission.",
      "ephemeral": true, 
      "options": {
        "interaction": true
      }
    }]
    `
  }
]
