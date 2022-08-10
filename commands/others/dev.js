module.exports = [
  {
    name: "dev",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $if[$slashOption[do]==aoijsEval;{execute:aoijseval}]
    
    $if[$slashOption[do]==djsEval;{execute:djseval}]
    
    $if[$slashOption[do]==updCmds;{execute:updcmds}]
    
    $onlyForIDs[285118390031351809; 721032593511940177; { "content": "$nonEscape[$customEmoji[git_alert]] You're not authorized to use developer commands.", "options": { "interaction": true } }]
    `
  },
  {
    name: "aoijseval",
    type: 'awaited',
    code: `
    $interactionFollowUp[***\`\`\`javascript
$eval[$slashOption[code];yes;yes;yes;yes]
    \`\`\`***]
    
    $interactionDefer
    `
  },
  {
    name: "djseval",
    type: 'awaited',
    code: `
    $interactionFollowUp[***\`\`\`javascript
$djseval[$slashOption[code];yes]
    \`\`\`***]
    
    $interactionDefer
    `
  },
  {
    name: "updcmds",
    type: 'awaited',
    code: `
    $updateCommands
  
    $interactionReply[$customEmoji[git_verified] *Updated the commands.*;;;;;yes]
    `
  }
]
