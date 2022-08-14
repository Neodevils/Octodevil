module.exports = [
  // message counter
  {
    name: "$alwaysExecute",
    $if: 'v4',
    code: `
    $if[$getUserVar[messageCount]==100]
    $cooldown[6h;]

    You have completed "Send 100 messages in $serverName" task! The cooldown will reset in 6 hours.

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
		$cooldown[6h;]

    You have completed "salute a member" task! The cooldown will reset in 6 hours.

    $setUserVar[taskDone;$sum[$getUserVar[taskDone];1]]
    
    $setUserVar[ruby;$sum[$getUserVar[ruby];500]]
    
    $onlyIf[$getGlobalUserVar[saluteTask]==true;]
    `
  }
]
