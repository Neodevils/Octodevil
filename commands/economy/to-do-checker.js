module.exports = [
  {
    name: "$alwaysExecute",
    code: `
    $if[$mentioned[1;no]==;$setUserVar[mentionTaskCount;$sum[$getUserVar[mentionTaskCount;$mentioned[1;no]];1]]]
    
    $cooldown[12h;]
    
    $onlyIf[$getUserVar[mentionTaskCount]<5;]
    
    $onlyIf[$mentioned!=$authorID;Did you just ping yourself to complete the task?]
    `
  }, {
    name: "$alwaysExecute",
    $if: 'v4',
    code: `
    $setUserVar[messageTask;$sum[$getUserVar[messageTask];1]]
    `
  }
]
