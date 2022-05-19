module.exports = {
	name: "intro",
	type: 'interaction', 
	prototype: 'slash', 
	code: `
$channelSendMessage[959817446796197918;<@$authorID> {newEmbed:{description:๑ $customEmoji[mns_blank] ˖ $customEmoji[mns_blank] ⊹ $customEmoji[mns_blank] $customEmoji[mns_heart_brown] $customEmoji[mns_blank] ⊹ $customEmoji[mns_blank] ˖ $customEmoji[mns_blank] ๑
> ⠀⠀⠀⠀⠀⠀⠀**basic info**
> 
> ㆍ✿ name﹕$slashOption[name]
> ㆍ❀ status﹕$slashOption[status]
> ㆍ✿ pronouns﹕$slashOption[pronouns]
‎━━━━━━━━━━━━━━‎ ‎ ‎ ‎ ‎ ‎ ‎
> ⠀⠀⠀⠀⠀⠀⠀**about me**
> 
> ㆍ✿ country﹕$slashOption[country]
> ㆍ❀ sexuality﹕$slashOption[sexuality]
> ㆍ✿ extras﹕$slashOption[extras]
๑ $customEmoji[mns_blank] ˖ $customEmoji[mns_blank] ⊹ $customEmoji[mns_blank] $customEmoji[mns_heart_brown] $customEmoji[mns_blank] ⊹ $customEmoji[mns_blank] ˖ $customEmoji[mns_blank] ๑}{color:$getVar[brownHex]}{footer:$randomText[ooo seems interesting!;wew;that's cuteee; ayyy!;i liked it!;i loved it!;woa;my cutie;fr fr]}{image:https://media.discordapp.net/attachments/774748031589023764/833793887712706560/image0-28.gif}{thumbnail:$authorAvatar}}]

$interactionReply[$customEmoji[mns_heart_yellow] Done, check it out in __<#959817446796197918>__ :3;;;;;yes]

$cooldown[6h;{"content": "Changed your opinion about yourself..? Can you try %time% later?", "ephemeral": true, "options":{ "interaction" : true } }]
	`
}