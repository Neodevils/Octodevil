module.exports = [
	{
		name:"gender", 
		code: `
		$addField[1;ʕ•ᴥ• ʕ  · ﻌ ·  ʔ •ᴥ•ʔ Gender;₍ $customEmoji[dp_star6] ₎ We want to call you with one of our pronouns!
>>> ﹒﹒﹒﹒$customEmoji[mns_sparkles]﹒﹒﹒﹒ 
┊ \`1  \`<@&$getVar[him]>
┊ \`2  \`<@&$getVar[her]>
┊ \`3  \`<@&$getVar[them]>]
		$image[1; https://media.discordapp.net/attachments/861208192121569280/959363158663897088/minesa_divider.png]
		$color[1; $getServerVar[brownHex]]
		$addSelectMenu[1;genderMenu;✨︎ Pick your gender ✨︎;1;1;no;he/him:❀ for boys~:gender0:false:<:mns_1:959369153561628722>;she/her:✿ for girls~:gender1:false:<:mns_2:959369202853101579>;they/them:❀ better to not question-:gender2:false:<:mns_3:959369250571690034>]
		`
	}, 
	{
		name: "genderMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[him]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[him]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[him]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[her]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[them]]
		
		$wait[200ms]

		$giveRole[$guildID;$authorID;$getVar[him]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[him]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==gender0;]
		`
	}, 
	{
		name: "genderMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[her]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[her]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[her]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[him]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[them]]
		
		$wait[200ms]

		$giveRole[$guildID;$authorID;$getVar[her]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[her]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==gender1;]
		`
	}, 
	{
		name: "genderMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[them]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[them]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[them]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[him]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[her]]
		
		$wait[200ms]

		$giveRole[$guildID;$authorID;$getVar[them]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[them]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==gender2;]
		`
	}, 
	{
		name: "genderMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
	  $interactionReply[> $customEmoji[git_alert] This role is no longer available!;;;;;yes]
		
		$onlyIf[$interactionData[values[0]]==gender3;]
		`
	}
]
