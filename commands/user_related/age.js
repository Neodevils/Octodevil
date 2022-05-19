module.exports = [
	{
		name:"age", 
		code: `
		$addField[1;ʕ•ᴥ• ʕ  · ﻌ ·  ʔ •ᴥ•ʔ Age;₍ $customEmoji[dp_star6] ₎ We do not allow anyone younger than 13!
>>> ﹒﹒﹒﹒$customEmoji[mns_sparkles]﹒﹒﹒﹒ 
┊ \`1  \`<@&$getVar[13]>
┊ \`2  \`<@&$getVar[15]>
┊ \`3  \`<@&$getVar[18]>
┊ \`4  \`<@&$getVar[21]>]
		$image[1; https://media.discordapp.net/attachments/861208192121569280/959363158663897088/minesa_divider.png]
		$color[1; $getServerVar[brownHex]]
		$addSelectMenu[1;ageMenu;✨︎ Pick your age ✨︎;1;1;no;13/14:❀ 13/14 years old:age0:false:<:mns_1:959369153561628722>;15/17:✿ 15/17 years old:age1:false:<:mns_2:959369202853101579>;18/20:❀ 18/20 years old:age2:false:<:mns_3:959369250571690034>;21+:✿ 21+ years old:age3:false:<:mns_4:959369293760430111>]
		`
	}, 
	{
		name: "ageMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[13]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[13]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[13]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[15]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[18]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[21]]
		
		$wait[200ms]

		$giveRole[$guildID;$authorID;$getVar[13]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[13]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==age0;]
		`
	}, 
	{
		name: "ageMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[15]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[15]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[15]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[13]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[18]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[21]]
		
		$wait[200ms]

		$giveRole[$guildID;$authorID;$getVar[15]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[15]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==age1;]
		`
	}, 
	{
		name: "ageMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[18]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[18]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[18]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[15]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[13]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[21]]
		
		$wait[200ms]

		$giveRole[$guildID;$authorID;$getVar[18]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[18]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==age2;]
		`
	}, 
	{
		name: "ageMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[21]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[21]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[21]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[15]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[18]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[13]]
		
		$wait[200ms]

		$giveRole[$guildID;$authorID;$getVar[21]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[21]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==age3;]
		`
	}
]
