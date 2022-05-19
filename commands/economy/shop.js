module.exports = [
	{
		name: "shop",
		type: 'interaction', 
		prototype: 'slash',
		code: `
		$interactionReply[;{newEmbed:
    	{author: Welcome to role shop!:$userAvatar[$clientID]}
    	{thumbnail:$serverIcon}
    	{description:>>> Hello, $username!
 This is **__Permission Shop__**, which you can gain permission with showing us your membership to MinesaHub!
 
*P.S: You can buy roles with selecting on menu #SEMI#)*}
			{newEmbed:{field:elite perk:>>> __external emojis & send embed links__
Role ⸼ ۫  ꒰#COLON# <@&$getVar[elite]>
Price ⸼ ۫ ꒰#COLON# $getVar[currency] 2,500}{color: $getroleColor[963676267218108417]}{image:https://media.discordapp.net/attachments/774748031589023764/846326511531065354/Untitled1254_20201118194103.png}}
    
			{newEmbed:{field:special perk:>>> __change nickname__
Role ⸼ ۫  ꒰#COLON# <@&$getVar[special]>
Price ⸼ ۫ ꒰#COLON# $getVar[currency] 10,000}{color: $getroleColor[928642084980793404]}{image:https://media.discordapp.net/attachments/774748031589023764/846326512058892288/Untitled1254_20201118194118.png}}

			{newEmbed:{field:starlight perk:>>> __100 ⧖ income for hourly__
Role ⸼ ۫  ꒰#COLON# <@&$getVar[starlight]>
Price ⸼ ۫ ꒰#COLON# $getVar[currency] 15,000}{color: $getroleColor[963765637027598357]}{image:https://media.discordapp.net/attachments/774748031589023764/846326512705732678/Untitled1254_20201118194136.png}}

			{newEmbed:{field:epic perk:>>> __talk with other members in other servers__
Role ⸼ ۫  ꒰#COLON# <@&$getVar[epic]>
Price ⸼ ۫ ꒰#COLON# $getVar[currency] 17,500}{color: $getroleColor[928641823033942077]}{image:https://media.discordapp.net/attachments/774748031589023764/846326512567582740/Untitled1254_20201118194128.png}}

			{newEmbed:{field:collector perk:>>> __custom auto response__
Role ⸼ ۫  ꒰#COLON# <@&$getVar[collector]>
Price ⸼ ۫ ꒰#COLON# $getVar[currency] 50,000}{color: $getroleColor[895307653851512914]}{image:https://media.discordapp.net/attachments/774748031589023764/846326511404711986/Untitled1254_20201118194059.png}}

			{newEmbed:{field:legend perk:>>> __custom role__
Role ⸼ ۫  ꒰#COLON# <@&$getVar[legend]>
Price ⸼ ۫ ꒰#COLON# $getVar[currency] 125,000}{color: $getroleColor[895308742642507817]}{image:https://media.discordapp.net/attachments/774748031589023764/846326511279144970/Untitled1254_20201118194054.png}
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