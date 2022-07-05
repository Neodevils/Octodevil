module.exports = [
	{
		name: "perkStore",
		type: 'interaction', 
		prototype: 'button',
		code: `
		$interactionUpdate[;{newEmbed:
    	{author: Welcome to Perk Store:$userAvatar[$clientID]}
    	{thumbnail:https://media.discordapp.net/attachments/861208192121569280/987711541136736256/1655559171764.png?width=619&height=497}
			{description:$randomText[What can I get for you, $username?;So close, yet so far. You're right in front of me, but I can't afford to buy you.;No questions. I'll only tell you to buy it all!;The Procurement Department has everything you need. Take your time.;The Procurement Department can get you anything on the shopping list.;That's the best deal we can get, $username! Stop asking!;I'll take them if you don't.;Pro Tip: This is all great stuff worth taking home!]}
			{color:$getVar[gitHex]}
			{field:Sharing:>>> *send embed links & upload attachments*
        ៸៸	<@&963765637027598357>
        ៸៸	$customEmoji[git_package] 2 G-Packs}
			{field:edit nick:>>> *this one is for you, $username*
        ៸៸	<@&928642084980793404>
        ៸៸	$customEmoji[git_package] 3 G-Packs}
			{field:Freshman:>>> *Your custom role and will be yours forever.*
        ៸៸	<@&895308742642507817>
        ៸៸	$customEmoji[git_package] 50 G-Packs}	
		};{actionRow:
			{selectMenu:perkMenu:・Choose wisely~:1:1:false:
				{selectMenuOptions:・Attachment:perk0:Want to attach anything into any channels?:false:<:git_attachment:990940186730967051>}
				{selectMenuOptions:・Id Card:perk1:For Updating your nickname:false:<:git_id:990935491710951435>}
				{selectMenuOptions:・Freshman:perk4:A role, only for you.:false:<:git_tag:990726173510225980>}
			}
		}]
		` 
	},
	{
// Attachment Perk
		name: "perkMenu",
		type: 'interaction', 
		prototype:'selectMenu', 
		code: `
$giveRole[$guildID;$authorID;963765637027598357]

$setGlobalUserVar[cube;$sub[$getGlobalUserVar[cube];3]]

$interactionReply[>>> Claimed <@&963765637027598357>,

||Now you have __external emojis & embed links__ permission!||;;;;;yes]
	
$onlyIf[$hasRoles[$guildID;$authorID;963765637027598357]==false;{"content":"You have the role already. Uh, what?","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getGlobalUserVar[cube]>=2;{"content": "$nonEscape[Need to collect more $customEmoji[git_package] __G-Packs__ to buy this perk.]","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==perk0;]
		`
	},
	{
// Nickname Changing Perk
		name: "perkMenu",
		type: 'interaction', 
		prototype:'selectMenu', 
		code: `
    $giveRole[$guildID;$authorID;928642084980793404]

    $setGlobalUserVar[cube;$sub[$getGlobalUserVar[cube];15]]

    $interactionReply[>>> Claimed <@&928642084980793404>,

||Now you have permission to change __change your nickname!__||;;;;;yes]
	
    $onlyIf[$hasRoles[$guildID;$authorID;928642084980793404]==false;{"content":"NO! Uh... sorry. But, don't expect I'll also give you managenicknames permission. Hmm...","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$getGlobalUserVar[cube]>=3;{"content": "$nonEscape[Need to collect more $customEmoji[git_package] __G-Packs__ to buy this perk.]","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$interactionData[values[0]]==perk1;]
		`
	},
 	{
// Role Perk
		name: "perkMenu",
		type: 'interaction', 
		prototype:'selectMenu', 
		code: `
$giveRole[$guildID;$authorID;895308742642507817]

$setGlobalUserVar[cube;$sub[$getGlobalUserVar[cube];30]]

$interactionReply[>>> Claimed <@&895308742642507817>,

||Now you can have your own role, __your own color... your own role name and possibly icon...__ Mmmm, also you got Saku's nudez 😳||;;;;;yes]
	
$onlyIf[$hasRoles[$guildID;$authorID;895308742642507817]==false;{"content":"You're so rich, but there's something else you can't buy. Like this one. 🤠 *Cause you already did so.*","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getGlobalUserVar[cube]>=50;{"content": "$nonEscape[Need to collect more $customEmoji[git_package] __G-Packs__ to buy this perk.]","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==perk4;]
		`
	}
]
