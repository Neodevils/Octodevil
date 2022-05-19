module.exports = [
	{
		name:"color", 
		code: `
		$addField[1;ʕ•ᴥ• ʕ  · ﻌ ·  ʔ •ᴥ•ʔ Color;₍ $customEmoji[dp_star6] ₎ Pick any color that fits to you!
>>> ﹒﹒﹒﹒$customEmoji[mns_sparkles]﹒﹒﹒﹒ 
┊ \`1  \`<@&$getVar[pyro]>
┊ \`2  \`<@&$getVar[geo]>
┊ \`3  \`<@&$getVar[anemo]>
┊ \`4  \`<@&$getVar[dendro]>
┊ \`5  \`<@&$getVar[cyro]>
┊ \`6  \`<@&$getVar[hydro]>
┊ \`7  \`<@&$getVar[electro]>]
		$image[1; https://media.discordapp.net/attachments/861208192121569280/959363158663897088/minesa_divider.png]
		$color[1; $getServerVar[brownHex]]
		$addSelectMenu[1;colorMenu;✨︎ Pick your color ✨︎;1;1;no;pyro:❀ flame:color0:false:<:mns_1:959369153561628722>;geo:✿ soil:color1:false:<:mns_2:959369202853101579>;anemo:❀ wind:color2:false:<:mns_3:959369250571690034>;dendro:✿ nature:color3:false:<:mns_4:959369293760430111>;cyro:❀ ice:color4:false:<:mns_5:959369356758896661>;hydro:✿ water:color5:false:<:mns_6:959369408642416713>;electro:❀ lightning:color6:false:<:mns_7:959433929482444850>]
		`
	}, 
	{
		name: "colorMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[pyro]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[pyro]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[pyro]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[geo]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[anemo]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[dendro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[cyro]]
		
		$wait[200ms]

		$takeRole[$guildID;$authorID;$getVar[hydro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[electro]]
		
		$wait[200ms]
		
		$giveRole[$guildID;$authorID;$getVar[pyro]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[pyro]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==color0;]
		`
	}, 
	{
		name: "colorMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[geo]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[geo]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[geo]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[pyro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[anemo]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[dendro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[cyro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[hydro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[electro]]
		
		$wait[200ms]
		
		$giveRole[$guildID;$authorID;$getVar[geo]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[geo]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==color1;]
		`
	},
	{
		name: "colorMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[anemo]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[anemo]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[anemo]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[geo]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[pyro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[dendro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[cyro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[hydro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[electro]]
		
		$wait[200ms]
		
		$giveRole[$guildID;$authorID;$getVar[anemo]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[anemo]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==color2;]
		`
	},
	{
		name: "colorMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[dendro]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[dendro]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[dendro]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[geo]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[anemo]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[pyro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[cyro]]
		
		$wait[200ms]

		$takeRole[$guildID;$authorID;$getVar[hydro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[electro]]
		
		$wait[200ms]
		
		$giveRole[$guildID;$authorID;$getVar[dendro]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[dendro]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==color3;]
		`
	},
	{
		name: "colorMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[cyro]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[cyro]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[cyro]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[geo]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[anemo]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[dendro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[pyro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[hydro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[electro]]
		
		$wait[200ms]
		
		$giveRole[$guildID;$authorID;$getVar[cyro]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[cyro]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==color4;]
		`
	},
	{
		name: "colorMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[hydro]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[hydro]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[hydro]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[geo]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[anemo]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[dendro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[cyro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[pyro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[electro]]
		
		$wait[200ms]
		
		$giveRole[$guildID;$authorID;$getVar[hydro]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[hydro]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==color5;]
		`
	},
	{
		name: "colorMenu", 
		type: 'interaction', 
		$if: 'v4', 
		prototype: 'selectMenu', 
		code: `
		$if[$hasRoles[$guildid;$authorId;$getVar[electro]]==true]
		
		$takeRole[$guildID;$authorID;$getVar[electro]]

		$interactionReply[> $customEmoji[pas10] Successfully removed your __<@&$getVar[electro]>__ role.;;;;;yes]

		$else
		
		$takeRole[$guildID;$authorID;$getVar[geo]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[anemo]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[dendro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[cyro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[pyro]]
		
		$wait[200ms]
		
		$takeRole[$guildID;$authorID;$getVar[hydro]]
		
		$wait[200ms]
		
		$giveRole[$guildID;$authorID;$getVar[electro]]
		
		$interactionReply[> $customEmoji[dp_star6] Successfully claimed __<@&$getVar[electro]>__ role!;;;;;yes]
		
		$endif 
		
		$onlyIf[$interactionData[values[0]]==color6;]
		`
	}
]