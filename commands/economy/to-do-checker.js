module.exports = [
  // message counter
  {
    name: "$alwaysExecute",
    $if: 'v4',
    code: `
    $if[$getUserVar[messageCount]==100]
    Completed the task!
$setUserVar[taskDone;$sum[$getUserVar[taskDone];1]]
    
    $setUserVar[ruby;$sum[$getUserVar[ruby];600]]
    $endif
    
    $setUserVar[messageCount;$sum[$getUserVar[messageCount];1]]
    `
  },
  // salute counter
  {
    name: "$alwaysExecute",
    code: `
		Completed the task!
    $setUserVar[taskDone;$sum[$getUserVar[taskDone];1]]
    
    $setUserVar[ruby;$sum[$getUserVar[ruby];500]]
    
    $onlyIf[$getGlobalUserVar[saluteTask]==true;]
    `
  }
]
