module.exports = [
	{
		name:"traits", 
		code: `
		$addField[1;ʕ•ᴥ• ʕ  · ﻌ ·  ʔ •ᴥ•ʔ Personality;₍ $customEmoji[dp_star6] ₎ what kind of personality do you have?
>>> ﹒﹒﹒﹒$customEmoji[mns_sparkles]﹒﹒﹒﹒ 
┊ \`1  \`<@&$getVar[shy]>
┊ \`2  \`<@&$getVar[selfConfident]>
┊ \`3  \`<@&$getVar[friendly]>
┊ \`4  \`<@&$getVar[cold]>
┊ \`5  \`<@&$getVar[nerd]>
┊ \`6  \`<@&$getVar[dumb]>]
		$image[1; https://media.discordapp.net/attachments/861208192121569280/959363158663897088/minesa_divider.png]
		$color[1; $getServerVar[brownHex]]
		$addSelectMenu[1;traitsMenu;✨︎ Pick your personalities ✨︎;1;1;no;shy:❀ ehmm~:traits0:false:<:mns_1:959369153561628722>;self-confident:✿ this reminded me "never gonna give you up" somehow:traits1:false:<:mns_2:959369202853101579>;friendly:❀ ayyy, like me~:traits2:false:<:mns_3:959369250571690034>;cold:✿ cold-blooded people... looks 🅒🅞🅞🅛:traits3:false:<:mns_4:959369293760430111>;nerd:❀ 6+9= minesahub ☕:traits4:false:<:mns_5:959369356758896661>;dumb:✿ 𝘴𝘢𝘬𝘶 𝘪𝘴 𝘳𝘢𝘯𝘥𝘰𝘮 𝘩𝘴𝘩𝘴𝘫𝘴𝘩𝘴𝘫𝘩𝘴𝘩𝘩𝘦:traits5:false:<:mns_6:959369408642416713>]
		`
	}, 
	{
		name: "traitsMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[shy]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[shy]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[shy]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[selfConfident]]
		
		$wait[200ms]
		
		$giveRole[$guildID;$authorID;$getVar[shy]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[shy]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==traits0;]
		`
	}, 
	{
		name: "traitsMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[selfConfident]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[selfConfident]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[selfConfident]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[shy]]
		
		$wait[200ms]
		
		$giveRole[$guildID;$authorID;$getVar[selfConfident]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[selfConfident]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==traits1;]
		`
	}, 
	{
		name: "traitsMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[friendly]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[friendly]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[friendly]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[cold]]
		
		$wait[200ms]
		
		$giveRole[$guildID;$authorID;$getVar[friendly]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[friendly]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==traits2;]
		`
	}, 
	{
		name: "traitsMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[cold]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[cold]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[cold]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[friendly]]
		
		$wait[200ms]
		
		$giveRole[$guildID;$authorID;$getVar[cold]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[cold]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==traits3;]
		`
	}, 
	{
		name: "traitsMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[nerd]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[nerd]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[nerd]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[dumb]]
		
		$wait[200ms]
		
		$giveRole[$guildID;$authorID;$getVar[nerd]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[nerd]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==traits4;]
		`
	}, 
	{
		name: "traitsMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[dumb]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[dumb]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[dumb]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[nerd]]
		
		$wait[200ms]
		
		$giveRole[$guildID;$authorID;$getVar[dumb]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[dumb]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==traits5;]
		`
	}
]