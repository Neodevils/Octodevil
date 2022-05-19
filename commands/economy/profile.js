module.exports = {
	name: "profile",
	type: 'interaction',
	prototype: 'slash',
	code: `
	$interactionReply[;
	{newEmbed:
		{author:$username/readme.md}
		{thumbnail:$authorAvatar}
		{title:$getUserVar[profileTitle]}
		{description:$getUserVar[profileDescription]}
		{field:Balance:$$numberSeparator[$getUserVar[money]]}
		{color:#ec775c}
		{footer:Overview}
	}]
	`
}