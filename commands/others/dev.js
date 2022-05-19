module.exports = [
  {
    name: "eval",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionFollowUp[$eval[$slashOption[code];yes;yes;yes;yes]]
	
	$interactionDefer
	
    $onlyForIDs[285118390031351809;721032593511940177;{"content":"$nonEscape[$customEmoji[kaeruAlert]] ⨯ Uhh... You're not Neo daddy 👀","options":{"interaction" : true}}]
    `
  },
  {
    name: "update",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $updateCommands
  
    $interactionReply[$customEmoji[kaeruVerified] *Updated the commands.*;;;;;yes]
  
    $onlyForIDs[285118390031351809;721032593511940177;{"content":"$nonEscape[$customEmoji[kaeruAlert]] ⨯ Uhh... You're not Neo daddy 👀","ephemeral":"true", "options":{"interaction" : true}}]
    `
  }
]