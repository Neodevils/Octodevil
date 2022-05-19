module.exports = [
  {
    name: "c-help", 
    code: `
    $reply[$messageID;yes]

		Created help slash interaction successfully.

		$createApplicationCommand[$guildID;help;See bot's commands.;true;slash]

		$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]
		`
  }, 
  {
		name: "help",
		type: 'interaction',
		prototype: 'slash',
		code:`
		$interactionReply[Select a menu option to show category.
		;
		;{actionRow:
			{selectMenu:helpMenu_$authorID:Tap here to select a page.:1:1:false:
				{selectMenuOptions:My awesome first page:0:Some awesome description.:no:1⃣}
				{selectMenuOptions:My awesome second page:1:Some cool description.:no:2⃣}
			}
		}]
		`
	}, 
	{
		type: 'interaction', 
		prototype: "selectMenu", 
		code: `
		$interactionUpdate[My awesome first menu
		;
		;
		{actionRow:
			{selectMenu:helpMenu_$authorID:Tap here to select a page.:1:1:false:
				{selectMenuOptions:My awesome first page:0:Some awesome description.:yes:1⃣}
				{selectMenuOptions:My awesome second page:1:Some cool description.:no:2⃣}
			}
		}]

		$onlyIf[$interactionData[customId]==helpMenu_$interactionData[author.id];]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Only <@$advancedTextSplit[$interactionData[customId];_;2]> can use this menu.", "ephemeral" : true,"options" : {"interaction" : true}}]

		$onlyIf[$interactionData[values[0]]==0;]
		`
	}, 
	{ 
		type: 'interaction', 
		prototype: "selectMenu", 
		code: `
		$interactionUpdate[My awesome second menu.
		;
		;{actionRow:
			{selectMenu:helpMenu_$authorID:Tap here to select a page.:1:1:false:
				{selectMenuOptions:My awesome first page:0:Some awesome description.:no:1⃣}
				{selectMenuOptions:My awesome second page:1:Some cool description.:yes:2⃣}
			}
		}]
		
		$onlyIf[$interactionData[customId]==helpMenu_$interactionData[author.id];]

		$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Only <@$advancedTextSplit[$interactionData[customId];_;2]> can use this menu.","ephemeral" : true,"options" : {"interaction" : true}}]

		$onlyIf[$interactionData[values[0]]==1;]
		`
	}
]