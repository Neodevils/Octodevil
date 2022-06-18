module.exports = {
  name: "profile",
  type: 'interaction',
  prototype: 'slash',
  code: `
	$interactionEdit[;
	{newEmbed:
		{author:$username[$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]/readme.md:https\\://media.discordapp.net/attachments/861208192121569280/980187260366516285/1653765241741.png}
		{thumbnail:$userAvatar[$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]}
		{title:$getGlobalUserVar[profileTitle;$$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]}
		{description:$getGlobalUserVar[profileDescription;$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]}
		{field:Balance:$customEmoji[mnsToken]・**\`$numberSeparator[$getGlobalUserVar[token;$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]]\`** AKI Tokens
    $customEmoji[mnsCube]・**\`$numberSeparator[$getGlobalUserVar[cube;$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]]\`** Infected Cubes
		}
		{color:#ec775c}
		{footer:Overview #$discriminator[$replaceText[$interactionData[options.data[0].value];undefined;$authorID]] — /set-profile to update your profile!:https://media.discordapp.net/attachments/861208192121569280/987689648140726302/1655553945425.png?width=498&height=498}
	}]
	
	$wait[$random[2;4]s]
	
	$interactionReply[$customEmoji[mnsHint]**・**__$randomText[In Minesa, you can find secrets on pinned messages.;Don't forget to claim your daily!;Completing To-do missions gives you tokens.;Each day sign in gives you an infected cube.;Minesa has some crazy members, they can be dangerous.;Welcome, $username #COLON#)]__]
	
	`
}
