module.exports = [
	{
		name: "store",
		type: 'interaction', 
		prototype: 'slash',
		code: `
		$interactionReply[;{newEmbed:
    	{author: Welcome to Store:$userAvatar[$clientID]}
    	{thumbnail:https://media.discordapp.net/attachments/861208192121569280/987711541136736256/1655559171764.png?width=619&height=497}
			{description:$randomText[What can I get for you, $username?;So close, yet so far. You're right in front of me, but I can't afford to buy you.;No questions. I'll only tell you to buy it all!;The Procurement Department has everything you need. Take your time.;The Procurement Department can get you anything on the shopping list.;That's the best deal we can get, Doctor! Stop asking!;I'll take them if you don't.;Pro Tip: This is all great stuff worth taking home!]]}
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
				• 80.000 AKI Tokens*
				៸៸	<@&895307653851512914>
				៸៸	$customEmoji[mnsCube] 20 Orindium}
				895308742642507817
			{field:Freshman:>>> *Your custom role and will be yours forever.*
				៸៸	<@&895308742642507817>
				៸៸	$customEmoji[mnsCube] 30 Orindium}	
		};{actionRow:
			{selectMenu:shopMenu:・Please pick a role from the shop.:1:1:false:
			{selectMenuOptions:・Elite:shop0:external emojis & send embed links:false:<:elite_perk:964164939273101382>}
			{selectMenuOptions:・Special:shop1:change nickname:false:<:special_perk:964165003445944360>}
			{selectMenuOptions:・Starlight:shop2:100 black holes/h income!:false:<:starlight_perk:964165089710190592>}
			{selectMenuOptions:・Epic:shop3:talk with other people in the shop servers!:false:<:epic_perk:964165167241900084>}
			{selectMenuOptions:・Collector:shop4:custom auto response!:false:<:collector_perk:964165266563031120>}
			{selectMenuOptions:・Legend:shop5:custom role:false:<:legend_perk:964165324205330442>}
		}}]
		` 
	},
	{
		name: "shopMenu",
		type: 'interaction', 
		prototype:'selectMenu', 
		code: `
$giveRole[$guildID;$authorID;$getVar[elite]]

$setUserVar[blackhole;$sub[$getUserVar[blackhole];2500]]

$interactionReply[>>> **Nice!**

<:elite_perk:964164939273101382> Now you have __external emojis & embed links__ permission!;;;;;yes]
	
$onlyIf[$hasRoles[$guildID;$authorID;$getVar[elite]]==false;{"content":"WELL! Uh, you already bought it! :D","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getUserVar[blackhole]>=2500;{"content": "Need to collect more black holes to buy this perk.","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==shop0;]
		`
	},
	{
		name: "shopMenu",
		type: 'interaction', 
		prototype:'selectMenu', 
		code: `
$giveRole[$guildID;$authorID;$getVar[special]]

$setUserVar[blackhole;$sub[$getUserVar[blackhole];10000]]

$interactionReply[>>> **Nice!**

<:elite_perk:964164939273101382> Now you have __change nickname__ permission!;;;;;yes]
	
$onlyIf[$hasRoles[$guildID;$authorID;$getVar[special]]==false;{"content":"WELL! Uh, you already bought it! :D","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getUserVar[blackhole]>=10000;{"content": "Need to collect more black holes to buy this perk.","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$hasRoles[$guildID;$authorID;$getVar[elite]]==true;{"content":"Buy elite perk to claim special perk!","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==shop1;]
		`
	},
	{
		name: "shopMenu",
		type: 'interaction', 
		prototype:'selectMenu', 
		code: `
$giveRole[$guildID;$authorID;$getVar[starlight]]

$setUserVar[blackhole;$sub[$getUserVar[blackhole];15000]]

$interactionReply[>>> **Nice!**

<:elite_perk:964164939273101382> Now you have __100 blackholes hourly__ permission!;;;;;yes]
	
$onlyIf[$hasRoles[$guildID;$authorID;$getVar[starlight]]==false;{"content":"WELL! Uh, you already bought it! :D","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getUserVar[blackhole]>=15000;{"content": "Need to collect more black holes to buy this perk.","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$hasRoles[$guildID;$authorID;$getVar[special]]==true;{"content":"Buy special perk to claim starlight perk!","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==shop2;]
		`
	},
	{
		name: "shopMenu",
		type: 'interaction', 
		prototype:'selectMenu', 
		code: `
$giveRole[$guildID;$authorID;$getVar[epic]]

$setUserVar[blackhole;$sub[$getUserVar[blackhole];17500]]

$interactionReply[>>> **Nice!**

<:elite_perk:964164939273101382> Now you have __access to talk in other servers__ permission!;;;;;yes]
	
$onlyIf[$hasRoles[$guildID;$authorID;$getVar[epic]]==false;{"content":"WELL! Uh, you already bought it! :D","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getUserVar[blackhole]>=17500;{"content": "Need to collect more black holes to buy this perk.","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$hasRoles[$guildID;$authorID;$getVar[starlight]]==true;{"content":"Buy starlight perk to claim epic perk!","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==shop3;]
		`
	},
	{
		name: "shopMenu",
		type: 'interaction', 
		prototype:'selectMenu', 
		code: `
$giveRole[$guildID;$authorID;$getVar[collector]]

$setUserVar[blackhole;$sub[$getUserVar[blackhole];50000]]

$interactionReply[>>> **Nice!**

<:elite_perk:964164939273101382> Now you can have your own __custom auto response__! 

Contract with Neo to claim it!;;;;;yes]
	
$onlyIf[$hasRoles[$guildID;$authorID;$getVar[collector]]==false;{"content":"WELL! Uh, you already bought it! :D","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getUserVar[blackhole]>=50000;{"content": "Need to collect more black holes to buy this perk.","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$hasRoles[$guildID;$authorID;$getVar[epic]]==true;{"content":"Buy epic perk to claim collector perk!","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==shop4;]
		`
	},
	{
		name: "shopMenu",
		type: 'interaction', 
		prototype:'selectMenu', 
		code: `
$giveRole[$guildID;$authorID;$getVar[legend]]

$setUserVar[blackhole;$sub[$getUserVar[blackhole];125000]]

$interactionReply[>>> **Nice!**

<:elite_perk:964164939273101382> Now you can have your own __custom role__! 

Contract with Neo to claim it!;;;;;yes]
	
$onlyIf[$hasRoles[$guildID;$authorID;$getVar[legend]]==false;{"content":"WELL! Uh, you already bought it! :D","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getUserVar[blackhole]>=125000;{"content": "Need to collect more black holes to buy this latest perk.","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$hasRoles[$guildID;$authorID;$getVar[collector]]==true;{"content":"Buy collector perk to claim legend perk!","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==shop5;]
		`
	}
]