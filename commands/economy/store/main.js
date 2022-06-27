module.exports = [
	{
		name: "store",
		type: 'interaction', 
		prototype: 'slash',
		code: `
		$interactionReply[;{newEmbed:
    	{author:๑ ┊ Welcome to Store:$userAvatar[$clientID]}
    	{thumbnail:https://media.discordapp.net/attachments/861208192121569280/987711541136736256/1655559171764.png?width=619&height=497}
			{description:Welcome back, $username!}
			{color:$getVar[invisibleHex]}
      {image:https://media.discordapp.net/attachments/861208192121569280/988140824208506950/AddText_06-19-08.58.31.jpg?width=960&height=320}
    };{actionRow:
      {button:Perk Store:2:perkStore:false:<:git_package:990892177662021722>}
      {button:Design Store:2:designStore:true:<:git_ruby:990892111207489586>}
    }]
    `
  }
]
