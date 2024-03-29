module.exports = {
	name: "set-nickname",
	type: 'interaction',
	prototype: 'slash',
	code: `
	$interactionReply[;{newEmbed:
		{title:$customEmoji[git_renamed] Renamed Successfully}
		{description:$customEmoji[git_tag] $username (\`$authorID\`) requested to change their name.}
		{field:➜ New Nickname:__$replaceText[$interactionData[options.data[1].value];undefined;$randomText[foamy;horrible;super;puny;tender;fertile;existing;full;kindly;obeisant;troubled;gratis;lumpy;shiny;dark;needy;whimsical;soggybeam;particled;arrogant;aware;cultured;detective;economist;determined;reduction;perform;dimension;tailed;optimistic;lose;ditch;buyable;slime;shiver;curvy;nasty;small;best;cool;silly;pushy;misty;stale;one;stiff;sick;false;shut;nice;mocha;asleep;ripe;idiotic;unequaled;important;invincible;confused;ethereal;spiky;mellowroomy;uttermost;flat;calm;next;verdant;hilarious;sufficient;aspiring;excellent;toxic;devil;bright]]｜$interactionData[options.data[0].value]__ *!*}
		{color:$getVar[invisibleHex]}
		{footer:$randomText[Seems good!;I find it cute;It suits to you]:$serverIcon}
		{thumbnail:$authorAvatar}
	}]

	$changeNickname[$authorID;$replaceText[$interactionData[options.data[1].value];undefined;$randomText[foamy;horrible;super;puny;tender;fertile;existing;full;kindly;obeisant;troubled;gratis;lumpy;shiny;dark;needy;whimsical;soggybeam;particled;arrogant;aware;cultured;detective;economist;determined;reduction;perform;dimension;tailed;optimistic;lose;ditch;buyable;slime;shiver;curvy;nasty;small;best;cool;silly;pushy;misty;stale;one;stiff;sick;false;shut;nice;mocha;asleep;ripe;idiotic;unequaled;important;invincible;confused;ethereal;spiky;mellowroomy;uttermost;flat;calm;next;verdant;hilarious;sufficient;aspiring;excellent;toxic;devil;bright]]｜$interactionData[options.data[0].value]]

	$onlyIf[$charCount[$slashOption[𓂃tag]]<9;{ "embeds": "{newEmbed:{description:$nonEscape[$customEmoji[git_tag]] *Tag should not be longer than 9 chars.*}{color: $getVar[invisibleHex]}}",  "ephemeral": true, "options":{ "interaction" : true } }]

	$onlyIf[$charCount[$slashOption[new𓂃nickname]]<9;{ "embeds": "{newEmbed:{description:$nonEscape[$customEmoji[git_tag]] *Name should not be longer than 9 chars.*}{color: $getVar[invisibleHex]}}",  "ephemeral": true, "options":{ "interaction" : true } }]

	$onlyForChannels[926099952545972244;{"content":"➜ <#926099952545972244>", "embeds": "{newEmbed:{description:<#$channelID> is not the right channel, use the channel on above with showed arrow.}{color: $getVar[gitHex]}}", "ephemeral": true, "options":{ "interaction" : true } }]
	`
}
