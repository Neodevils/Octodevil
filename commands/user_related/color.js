module.exports = [
	{
		name:"color", 
		code: `
		$thumbnail[1;https://media.discordapp.net/attachments/861208192121569280/993257632339075243/Balksz122_20220608150208.png]
		$title[1;ʕ•ᴥ• ʕ  · ﻌ ·  ʔ •ᴥ•ʔ Colors]
		$description[1;₍ $customEmoji[dp_star6] ₎ Pick any color that fits to you!
>>> ﹒﹒﹒﹒$customEmoji[git_commit]﹒﹒﹒﹒ 
┊ \` 1 \`<@&801612652920438784> 
┊ \` 2 \`<@&993254456277868544> 
┊ \` 3 \`<@&801613602440216617> 
┊ \` 4 \`<@&801615185096867871> 
┊ \` 5 \`<@&805430953958309908> 
┊ \` 6 \`<@&805433136615653416> 
┊ \` 7 \`<@&805435812786470932>
┊ \` 8 \`<@&959044181190381609> ]
		$image[1;https://media.discordapp.net/attachments/861208192121569280/993257257141817374/AddText_07-03-11.47.15.png]
		$color[1;$getServerVar[gitHex]]
		$addSelectMenu[1;menuCustomId;;1;8;no;୭ sunset:﹒Color:801612652920438784:false:$nonEscape[$customEmoji[git_commit]];୭ caramel:﹒Color:993254456277868544:false:$nonEscape[$customEmoji[git_commit]];୭ pineapple:﹒Color:801613602440216617:false:$nonEscape[$customEmoji[git_commit]];୭ bananya:﹒Color:801615185096867871:false:$nonEscape[$customEmoji[git_commit]];୭ palm:﹒Color:805430953958309908:false:$nonEscape[$customEmoji[git_commit]];୭ ocean:﹒Color:805433136615653416:false:$nonEscape[$customEmoji[git_commit]];୭ sandy:﹒Color:805435812786470932:false:$nonEscape[$customEmoji[git_commit]];୭ shelly:﹒Color:959044181190381609:false:$nonEscape[$customEmoji[git_commit]]]
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
