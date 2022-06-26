module.exports = [
	{
	  name: "supMsg",
		type: 'awaited',
		code: `
		$apiMessage[$channelID
		;$customEmoji[git_issue] — How can we help to you?
		;{newEmbed:
		  {thumbnail:https://media.discordapp.net/attachments/861208192121569280/990687631581016145/Balksz140_20220626213833.png}
		  {description:> Please select a menu that you're requesting for help.}
		  {color:$getVar[invisibleHex]}
		  {footer:MinesaHub Help Desk:$serverIcon}
		  {timestamp}
		}
		;{actionRow:{selectMenu:supMenu_$getServerVar[caseNum]:Select The Issue Type:1:1:no:
		  {selectMenuOptions:Coding Issue:sup0:— Stuck on a part of coding? Let us help to you 👋:no:<:git_code_review:990691387886419989>}
		  {selectMenuOptions:General Issue:sup1:— Have an issue with members, server or anything else?:no:<:git_review_requested:990691558716239913>}
		  {selectMenuOptions:Others:sup2:— Suggesting, partnershipping or asking any questions to staff team.:no:<:git_comment:990691505847033896>}
		}}
		]
	  `
	},
  {
    type: 'interaction',
    prototype: 'selectMenu',
    code: `
    $if[1==1;{execute:supMsg}; ]
    
		$channelSendMessage[$get[id];Hello <@&959007276402901032> team, <@$authorID> needs your help :3]
		
		$let[id;$createThread[$channelID;⨀ New Issue ⌗$getServerVar[caseNum];60;private;$messageID;yes]]

		$interactionUpdate[;{newEmbed:
		  {title:$customEmoji[kaeruCodingLabel1]$customEmoji[kaeruCodingLabel2]}
			{thumbnail:$authorAvatar}
			{description:$customEmoji[git_issue] Created Issue succesfully! 
> *Since created thread for you, you can send your error and code to thread. We will check it as soon as possible.*}
			{color:$getVar[gitHex]}
			{footer:MinesaHub Coding Support:$serverIcon}
			{timestamp}
		};{actionRow:
			{selectMenu:a::1:1:yes:
				{selectMenuOptions:Code Support Thread Created!:sup0:e:yes:<:git_code_review:990691387886419989>}
			}
		}]
		
		$setServerVar[caseNum;$sum[$getServerVar[caseNum];1]]
		
    $onlyIf[$interactionData[values[0]]==sup0;]
		`
	},
	{
		type: 'interaction',
		prototype: 'selectMenu',
		code: `
		$if[1==1;{execute:supMsg}; ]
		
		$channelSendMessage[$get[id];<@&959007092537192458>, <@$authorID> wants to report something!]
		
		$let[id;$createThread[$channelID;⨀ New Issue ⌗$getServerVar[caseNum];60;private;$messageID;yes]]

		$interactionUpdate[;{newEmbed:
			{title:$customEmoji[kaeruReportLabel1]$customEmoji[kaeruReportLabel2]}
			{thumbnail:$authorAvatar}
			{description:$customEmoji[git_issue] Created Issue succesfully!
> *Please give details as much as you can, so report team can understand you better!*}
			{color:$getVar[gitHex]}
			{footer:MinesaHub Staffs Team:$serverIcon}
			{timestamp}
		};{actionRow:
			{selectMenu:a::1:1:yes:
				{selectMenuOptions:reporting thread has been created!:sup0:e:yes:<:git_review_requested:990691558716239913>}
			}
		}]

		$setServerVar[caseNum;$sum[$getServerVar[caseNum];1]]
		
    $onlyIf[$interactionData[values[0]]==sup1;]
		`
	},
	{
		type: 'interaction',
		prototype: 'selectMenu',
		code: `
		$if[1==1;{execute:supMsg}; ]
		
		$channelSendMessage[$get[id];<@&962292010310586429>, <@$authorID> wants to discuss about something!]
		
		$let[id;$createThread[$channelID;⨀ New Issue ⌗$getServerVar[caseNum];60;private;$messageID;yes]]

		$interactionUpdate[;{newEmbed:
			{title:$customEmoji[kaeruOthersLabel1]$customEmoji[kaeruOthersLabel2]}
			{thumbnail:$authorAvatar}
			{description:$customEmoji[git_issue] Created Issue succesfully!
> *We would like to discuss about what you're talking about.*}
			{color:$getVar[blueHex]}
			{footer:MinesaHub Discussion:$serverIcon}
			{timestamp}
		};{actionRow:
			{selectMenu:a::1:1:yes:
				{selectMenuOptions:others type thread has been created!:sup0:e:yes:<:git_comment:990691505847033896>}
			}
		}]

		$setServerVar[caseNum;$sum[$getServerVar[caseNum];1]]
    
    $onlyIf[$interactionData[values[0]]==sup2;]
		`
	}
]
