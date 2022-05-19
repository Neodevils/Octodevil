module.exports = {
	name: "set-nickname",
	type: 'interaction',
	prototype: 'slash',
	code: `
	$interactionReply[;{newEmbed:
		{title:$customEmoji[kaeruVerified] Successfully Changed Nickname!}
		{description:$customEmoji[kaeruTag] your new nickname is __✿ $replaceText[$interactionData[options.data[1].value];undefined;$randomText[foamy;horrible;super;puny;tender;fertile;existing;full;kindly;obeisant;troubled;gratis;lumpy;shiny;dark;needy;whimsical;soggybeam;particled;arrogant;aware;cultured;detective;economist;determined;reduction;perform;dimension;tailed;optimistic;lose;ditch;buyable;slime;shiver;curvy;nasty;small;best;cool;silly;pushy;misty;stale;one;stiff;sick;false;shut;nice;mocha;asleep;ripe;idiotic;unequaled;important;invincible;confused;ethereal;spiky;mellowroomy;uttermost;flat;calm;next;verdant;hilarious;sufficient;aspiring;excellent;toxic;devil;bright]] ៸៸ $interactionData[options.data[0].value]__ *!*}
		{color:$getVar[pinkHex]}
		{footer:$randomText[Seems good!;I find it cute;It suits to you]:$serverIcon}
		{thumbnail:$authorAvatar}
	}]

	$changeNickname[$authorID;✿ $replaceText[$interactionData[options.data[1].value];undefined;$randomText[foamy;horrible;super;puny;tender;fertile;existing;full;kindly;obeisant;troubled;gratis;lumpy;shiny;dark;needy;whimsical;soggybeam;particled;arrogant;aware;cultured;detective;economist;determined;reduction;perform;dimension;tailed;optimistic;lose;ditch;buyable;slime;shiver;curvy;nasty;small;best;cool;silly;pushy;misty;stale;one;stiff;sick;false;shut;nice;mocha;asleep;ripe;idiotic;unequaled;important;invincible;confused;ethereal;spiky;mellowroomy;uttermost;flat;calm;next;verdant;hilarious;sufficient;aspiring;excellent;toxic;devil;bright]] ៸៸ $interactionData[options.data[0].value]]

	$onlyIf[$charCount[$interactionData[options.data[1].value]]<9;{ "embeds": "{newEmbed:{description:$nonEscape[$customEmoji[kaeruTag]] *Tag should not be longer than 9 chars.*}{color: $getVar[pinkHex]}}",  "ephemeral": true, "options":{ "interaction" : true } }]

	$onlyIf[$charCount[$interactionData[options.data[0].value]]<9;{ "embeds": "{newEmbed:{description:$nonEscape[$customEmoji[kaeruTag]] *Name should not be longer than 9 chars.*}{color: $getVar[pinkHex]}}",  "ephemeral": true, "options":{ "interaction" : true } }]

	$onlyForChannels[926099952545972244;{"content":"➜ <#926099952545972244>", "embeds": "{newEmbed:{description:<#$channelID> is not the right channel, use the channel on above with showed arrow.}{color: $getVar[yellowHex]}}", "ephemeral": true, "options":{ "interaction" : true } }]
	`
}