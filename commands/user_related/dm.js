module.exports = [
	{
		name:"dm", 
		code: `
		$addField[1;ʕ•ᴥ• ʕ  · ﻌ ·  ʔ •ᴥ•ʔ Direct Message;₍ $customEmoji[dp_star6] ₎ Are you available or not, we also want to know that!
>>> ﹒﹒﹒﹒$customEmoji[mns_sparkles]﹒﹒﹒﹒ 
┊ \`1  \`<@&$getVar[open]>
┊ \`2  \`<@&$getVar[closed]>
┊ \`3  \`<@&$getVar[ask]>]
		$image[1; https://media.discordapp.net/attachments/861208192121569280/959363158663897088/minesa_divider.png]
		$color[1; $getServerVar[brownHex]]
		$addSelectMenu[1;dmMenu;✨︎ Pick your dm status ✨︎;1;1;no;dms open:❀ feel free to dm!:dm0:false:<:mns_1:959369153561628722>;dms closed:✿ so you got the idea..:dm1:false:<:mns_2:959369202853101579>;ask to dms:❀ are you picking to who dm? OwO:dm2:false:<:mns_3:959369250571690034>]
		`
	}, 
	{
		name: "dmMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[open]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[open]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[open]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[closed]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[ask]]
		
		$wait[200ms]

		$giveRole[$guildID;$authorID;$getVar[open]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[open]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==dm0;]
		`
	}, 
	{
		name: "dmMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[closed]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[closed]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[closed]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[open]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[ask]]
		
		$wait[200ms]

		$giveRole[$guildID;$authorID;$getVar[closed]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[closed]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==dm1;]
		`
	},
	{
		name: "dmMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[ask]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[ask]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[ask]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[open]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[closed]]
		
		$wait[200ms]

		$giveRole[$guildID;$authorID;$getVar[ask]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[ask]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==dm2;]
		`
	}
]