module.exports = [
	{
		name:"ping", 
		code: `
		$thumbnail[1;https://media.discordapp.net/attachments/861208192121569280/993257632339075243/Balksz122_20220608150208.png]
		$title[1;ʕ•ᴥ• ʕ  · ﻌ ·  ʔ •ᴥ•ʔ Notifications]
		$description[1;₍ $customEmoji[dp_star6] ₎ Feel free to get pinged 🤠
>>> ﹒﹒﹒﹒$customEmoji[git_commit]﹒﹒﹒﹒ 
┊ \` 1 \`<@&801618406817136651> 
┊ \` 2 \`<@&993207116343021719> 
┊ \` 3 \`<@&940881871624089600> 
┊ \` 4 \`<@&836338427578286111> 
┊ \` 5 \`<@&801618365231398912> 
┊ \` 6 \`<@&801618241046315080>]
		$image[1;https://media.discordapp.net/attachments/861208192121569280/993257257141817374/AddText_07-03-11.47.15.png]
		$color[1;$getServerVar[gitHex]]
		$addSelectMenu[1;menuCustomId;;1;6;no;announces:﹒For Server Notifications and Updates:801618406817136651:false:$nonEscape[$customEmoji[git_commit]];chat reviver:﹒Get Notification When We Need You:993207116343021719:false:$nonEscape[$customEmoji[git_commit]];dev announces:﹒Notification for Developers:940881871624089600:false:$nonEscape[$customEmoji[git_commit]];extras:﹒Get Notfications About QOTD, poll and would you rather~:836338427578286111:false:$nonEscape[$customEmoji[git_commit]];events:﹒Get Notifications When We Make Giveaway or Event:801618365231398912:false:$nonEscape[$customEmoji[git_commit]]; Welcomer:﹒Get Notifications When a New Member Joins:801618241046315080:false:$nonEscape[$customEmoji[git_commit]]]
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
