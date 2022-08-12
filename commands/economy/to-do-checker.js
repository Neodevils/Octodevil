module.exports = [
  // message counter
  {
    name: "$alwaysExecute",
    $if: 'v4',
    code: `
    $if[$getUserVar[messageCount]>=100]
    $setUserVar[taskDone;$sum[$getUserVar[taskDone];1]]
    
    $setUserVar[ruby;$sum[$getUserVar[ruby];600]]
    $endif
    
    $setUserVar[messageCount;$sum[$getUserVar[messageCount];1]]
    `
  },
  // key holder counter
  {
    name: "$alwaysExecute",
    code: `
    $setUserVar[taskDone;$sum[$getUserVar[taskDone];1]]
    
    $setUserVar[ruby;$sum[$getUserVar[ruby];400]]
    
    $onlyIf[$getUserVar[keyHolderCount]<2;]
    `
  },
  // salute counter
  {
    name: "$alwaysExecute",
    code: `
    $setUserVar[taskDone;$sum[$getUserVar[taskDone];1]]
    
    $setUserVar[ruby;$sum[$getUserVar[ruby];500]]
    
    $onlyIf[$getGlobalUserVar[saluteTask]==true;]
    `
  }
]
