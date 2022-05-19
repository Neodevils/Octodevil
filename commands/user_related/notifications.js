module.exports = [
	{
		name:"ping", 
		code: `
		$addField[1;ʕ•ᴥ• ʕ  · ﻌ ·  ʔ •ᴥ•ʔ Pings;₍ $customEmoji[dp_star6] ₎ Want to get notification when we host an event, giveaway or an update? Roles are in below :3
>>> ﹒﹒﹒﹒$customEmoji[mns_sparkles]﹒﹒﹒﹒ 
┊ \`1  \`<@&$getVar[extras]>
┊ \`2  \`<@&$getVar[events]>
┊ \`3  \`<@&$getVar[wikiUpload]>
┊ \`4  \`<@&$getVar[announce]>
┊ \`5  \`<@&$getVar[welcome]>]
		$image[1; https://media.discordapp.net/attachments/861208192121569280/959363158663897088/minesa_divider.png]
		$color[1; $getServerVar[brownHex]]
		$addSelectMenu[1;pingMenu;✨︎ Pick notification roles ✨︎;1;1;no;extras:❀ question kf daily, poll, wear or tear.. and many minigames!:ping0:false:<:mns_1:959369153561628722>;events:✿ giveaways, events or challenges? sure, this role is yours:ping1:false:<:mns_2:959369202853101579>;wiki upload:❀ for whom wants to learn programming or discord bot:ping2:false:<:mns_3:959369250571690034>;announces:✿ get notifications for changelog or any important stuffs happening in here!:ping3:false:<:mns_4:959369293760430111>;welcome:❀ only for who has good personality better to claim this role UwU:ping4:false:<:mns_5:959369356758896661>]
		`
	}, 
	{
		name: "pingMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[extras]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[extras]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[extras]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[events]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[wikiUpload]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[announce]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[welcome]]
		
		$wait[200ms]

		$giveRole[$guildID;$authorID;$getVar[extras]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[extras]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==ping0;]
		`
	}, 
	{
		name: "pingMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[events]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[events]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[events]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[extras]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[wikiUpload]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[announce]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[welcome]]
		
		$wait[200ms]

		$giveRole[$guildID;$authorID;$getVar[events]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[events]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==ping1;]
		`
	},
	{
		name: "pingMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[wikiUpload]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[wikiUpload]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[wikiUpload]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[events]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[extras]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[announce]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[welcome]]
		
		$wait[200ms]

		$giveRole[$guildID;$authorID;$getVar[wikiUpload]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[wikiUpload]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==ping2;]
		`
	},
	{
		name: "pingMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[announce]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[announce]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[announce]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[events]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[extras]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[wikiUpload]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[welcome]]
		
		$wait[200ms]

		$giveRole[$guildID;$authorID;$getVar[announce]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[announce]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==ping3;]
		`
	},
	{
		name: "pingMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[welcome]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[welcome]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[welcome]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[events]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[extras]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[wikiUpload]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[announce]]
		
		$wait[200ms]

		$giveRole[$guildID;$authorID;$getVar[welcome]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[announce]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==ping4;]
		`
	}
]