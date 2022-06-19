module.exports = [
	{
		name: "store",
		type: 'interaction', 
		prototype: 'slash',
		code: `
		$interactionReply[;{newEmbed:
    	{author:๑ ┊ Welcome to Store:$userAvatar[$clientID]}
    	{thumbnail:https://media.discordapp.net/attachments/861208192121569280/987711541136736256/1655559171764.png?width=619&height=497}
			{description:$customEmoji[mnsCube] $randomText[What can I get for you, $username?;So close, yet so far. You're right in front of me, but I can't afford to buy you.;No questions. I'll only tell you to buy it all!;The Procurement Department has everything you need. Take your time.;The Procurement Department can get you anything on the shopping list.;That's the best deal we can get, Doctor! Stop asking!;I'll take them if you don't.;Pro Tip: This is all great stuff worth taking home!]}
			{color:$getVar[invisibleHex]}
      {image:https://media.discordapp.net/attachments/861208192121569280/988140824208506950/AddText_06-19-08.58.31.jpg?width=960&height=320}
    };{actionRow:
      {button:Perk Store:2:perkMenu:false:<:mnsCube:987357924764549191>}
      {button:Design Store:2:designMenu:false:<:mnsToken:987370797402320976>}
    }]
    `
  }
]


