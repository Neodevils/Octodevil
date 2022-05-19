module.exports = [
	{
		name:"staff", 
		code: `
		$addField[1;ʕ•ᴥ• ʕ  · ﻌ ·  ʔ •ᴥ•ʔ Team Ping;₍ $customEmoji[dp_star6] ₎ Please take the roles you want to look for!
>>> ﹒﹒﹒﹒$customEmoji[mns_sparkles]﹒﹒﹒﹒ 
┊ \`1  \`<@&$getVar[codePing]>
┊ \`2  \`<@&$getVar[reportPing]>
┊ \`3  \`<@&$getVar[suggestionPing]>]
		$image[1; https://media.discordapp.net/attachments/861208192121569280/959363158663897088/minesa_divider.png]
		$color[1; $getServerVar[brownHex]]
		$addSelectMenu[1;staffMenu;✨︎ Select at least one ✨︎;1;1;no;Coding Ping:❀ ✿ ❀:staff0:false:<:mns_1:959369153561628722>;Report Ping :❀ ✿ ❀:staff1:false:<:mns_2:959369202853101579>;Suggestion Ping:❀ ✿ ❀:staff2:false:<:mns_3:959369250571690034>]
		
		$onlyForIds[$botOwnerID;]
		`
	}, 
	{
		name: "staffMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[codePing]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[codePing]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[codePing]>__ role.;;;;;yes]

		$else

		$giveRole[$guildID;$authorID;$getVar[codePing]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[codePing]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==staff0;]
		`
	}, 
	{
		name: "staffMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[reportPing]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[reportPing]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[reportPing]>__ role.;;;;;yes]

		$else

		$giveRole[$guildID;$authorID;$getVar[reportPing]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[reportPing]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==staff1;]
		`
	}, 
	{
		name: "staffMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[suggestionPing]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[suggestionPing]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[suggestionPing]>__ role.;;;;;yes]

		$else

		$giveRole[$guildID;$authorID;$getVar[suggestionPing]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[suggestionPing]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==staff2;]
		`
	}
]