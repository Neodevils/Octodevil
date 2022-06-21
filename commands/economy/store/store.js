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
        ៸៸	$customEmoji[mnsCube] 3 Orindium }
			{field:ID Update:>>> *this one is for you, $username*
        ៸៸	<@&928642084980793404>
        ៸៸	$customEmoji[mnsCube] 15 Orindium}
			{field:Certificate:>>> *by-pass automod*
        ៸៸	<@&987700992634138625>
        ៸៸	$customEmoji[mnsCube] 18 Orindium}
			{field:Growth Pack:>>> *__Content__
      • $customEmoji[mnsToken] 80.000 AKI Tokens*
        ៸៸	<@&895307653851512914>
        ៸៸	$customEmoji[mnsCube] 20 Orindium}
			{field:Freshman:>>> *Your custom role and will be yours forever.*
        ៸៸	<@&895308742642507817>
        ៸៸	$customEmoji[mnsCube] 30 Orindium}	
		};{actionRow:
			{selectMenu:shopMenu:・Choose wisely~:1:1:false:
				{selectMenuOptions:・Attachment:perk0:Want to attach anything into any channels?:false:<:mnsFile:987360063490494514>}
				{selectMenuOptions:・Id Card:perk1:For Updating your nickname:false:<:mnsPencil:987360587182927893>}
				{selectMenuOptions:・Certificate:perk2:Get access to bypass AutoMod & mentioning Neo:false:<:mnsImportant:987358720113655951>}
				{selectMenuOptions:・Growth Pack:perk3:Get AKI Tokens for a week:false:<:mnsToken:987370797402320976>}
				{selectMenuOptions:・Freshman:perk4:A role, only for you.:false:<:mnsTag:987359840391295016>}
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
	
$onlyIf[$hasRoles[$guildID;$authorID;963765637027598357]==false;{"content":"WELL! Uh, you already bought it! :D","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getGlobalUserVar[cube]>=3;{"content": "$nonEscape[Need to collect more $customEmoji[mnsCube] __Orindium__ to buy this perk.]","ephemeral": true, "options":{"interaction" : true}}]

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
	
    $onlyIf[$hasRoles[$guildID;$authorID;928642084980793404]==false;{"content":"NO! uh... sorry. But, don't expect I'll also give you managenicknames permission. hmph!","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$getGlobalUserVar[cube]>=15;{"content": "$nonEscape[Need to collect more $customEmoji[mnsCube] __Orindium__ to buy this perk.]","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$interactionData[values[0]]==perk1;]
		`
	},
	{
		name: "perkMenu",
		type: 'interaction', 
		prototype:'selectMenu', 
		code: `
    $giveRole[$guildID;$authorID;987700992634138625]

    $setGlobalUserVar[cube;$sub[$getGlobalUserVar[cube];18]]

    $interactionReply[>>> Claimed <@&987700992634138625>,

||Now you can __say b-baka words!__||;;;;;yes]
	
    $onlyIf[$hasRoles[$guildID;$authorID;987700992634138625]==false;{"content":"Someone wants to get punishment for abusing, i guess?","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$getGlobalUserVar[cube]>=18;{"content": "$nonEscape[Need to collect more $customEmoji[mnsCube] __Orindium__ to buy this perk.]","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$interactionData[values[0]]==perk2;]
		`
	},
	{
	  name: "perkMenu",
	  type: 'interaction',
	  prototype: 'selectMenu',
	  code: `
    $giveRole[$guildID;$authorID;895307653851512914]

    $setGlobalUserVar[cube;$sub[$getGlobalUserVar[cube];20]]

    $interactionReply[>>> Claimed <@&895307653851512914>,

||From now, you will be getting __12,000 AKI Tokens__ for 7 days!||;;;;;yes]
	
    $onlyIf[$hasRoles[$guildID;$authorID;895307653851512914]==false;{"content":"Sorey but it is only for once so uh...","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$getGlobalUserVar[cube]>=20;{"content": "$nonEscape[Need to collect more $customEmoji[mnsCube] __Orindium__ to buy this perk.]","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$interactionData[values[0]]==perk3;]
		`
	},
 	{
		name: "perkMenu",
		type: 'interaction', 
		prototype:'selectMenu', 
		code: `
$giveRole[$guildID;$authorID;895308742642507817]

$setGlobalUserVar[cube;$sub[$getGlobalUserVar[cube];30]]

$interactionReply[>>> Claimed <@&895308742642507817>,

||Now you can have your own role, __your own color... your own role name and possibly icon...__ Mmmm, also you got Saku's nudez 😳||;;;;;yes]
	
$onlyIf[$hasRoles[$guildID;$authorID;895308742642507817]==false;{"content":"a.","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getGlobalUserVar[cube]>=3;{"content": "$nonEscape[Need to collect more $customEmoji[mnsCube] __Orindium__ to buy this perk.]","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==perk4;]
		`
	}
]
