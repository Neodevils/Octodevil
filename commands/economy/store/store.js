module.exports = [
	{
		name: "perkMenu",
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
				{selectMenuOptions:・Attachment:shop0:Want to attach anything into any channels?:false:<:mnsFile:987360063490494514>}
				{selectMenuOptions:・Id Card:shop1:For Updating your nickname:false:<:mnsPencil:987360587182927893>}
				{selectMenuOptions:・Certificate:shop2:Get access to bypass AutoMod & mentioning Neo:false:<:mnsImportant:987358720113655951>}
				{selectMenuOptions:・Growth Pack:shop3:Get AKI Tokens for a week:false:<:mnsToken:987370797402320976>}
				{selectMenuOptions:・Freshman:shop4:A role, only for you.:false:<:mnsTag:987359840391295016>}
			}
		}]
		` 
	},
	{
		name: "shopMenu",
		type: 'interaction', 
		prototype:'selectMenu', 
		code: `
$giveRole[$guildID;$authorID;963765637027598357]

$setGlobalUserVar[cube;$sub[$getGlobalUserVar[cube];3]]

$interactionReply[>>> Claimed <@&963765637027598357>,

||Now you have __external emojis & embed links__ permission!||;;;;;yes]
	
$onlyIf[$hasRoles[$guildID;$authorID;963765637027598357]==false;{"content":"WELL! Uh, you already bought it! :D","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getGlobalUserVar[cube]>=3;{"content": "$nonEscape[Need to collect more $customEmoji[mnsCube] __Orindium__ to buy this perk.]","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==shop0;]
		`
	}
]