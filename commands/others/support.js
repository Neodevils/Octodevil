module.exports = [
	{
	  name: "supMsg",
		type: 'awaited',
		code: `
		$channelSendMessage[$channelID;{
		  "content": "$nonEscape[$customEmoji[kaeruIssue]] **— How can we help you? :3**",
		  "embeds": "{newEmbed:{thumbnail:$userAvatar[$clientID]}{description:>>> Please select a menu that you're requesting for help (≡^∇^≡)}{color:#fabd78}{footer:MinesaHub Help Desk:$serverIcon}{timestamp}{image:https://media.discordapp.net/attachments/774748031589023764/846327920905420810/Untitled1254_20201118215541.png}}",
		  "components": "{actionRow:{selectMenu:supMenu_$getServerVar[caseNum]:Please select a thread type:1:1:no:{selectMenuOptions:Coding:sup0:— Stuck on a part of coding? Let us help to you.(๑'ᴗ')ゞ:no:<:kaeruDiscussCode:969585474140250172>}{selectMenuOptions:Reporting:sup1:— Did someone break the rules? We would like to know it and do the action! ʕ•ᴥ•ʔﾉ♡:no:<:kaeruDiscussReport:969347837123002469>}{selectMenuOptions:Others:sup2:— Suggesting, partnershipping or for wanting to claim rewards ヾ(´︶\`♡)ﾉ:no:<:kaeruDiscussOthers:969569146465579018>}}}"
		}]
	  `
	},
  {
    type: 'interaction',
    prototype: 'selectMenu',
    code: `
    $if[1==1;{execute:supMsg}; ]
    
		$channelSendMessage[$get[id];Hello <@&959007276402901032> team, <@$authorID> needs your help :3]
		
		$let[id;$createThread[$channelID;✾ Coding Thread﹕Issue ⌗$getServerVar[caseNum];60;private;$messageID;yes]]

		$interactionUpdate[;{newEmbed:
		  {title:$customEmoji[kaeruCodingLabel1]$customEmoji[kaeruCodingLabel2]}
			{thumbnail:$authorAvatar}
			{description:$customEmoji[kaeruIssue] Created Issue succesfully! 
> *Since thread created for you, you can send your error and code to thread. We will check it as soon as possible!*}
			{color:$getVar[purpleHex]}
			{footer:MinesaHub Coding support:$serverIcon}
			{timestamp}
		};{actionRow:
			{selectMenu:eee:e:1:1:yes:
				{selectMenuOptions:code support thread has been created!:sup0:e:yes:<:kaeruDiscussCode:969585474140250172>}
			}
		}]
		$setServerVar[caseNum;$sum[$getServerVar[caseNum];1]]
		
		$cooldown[1h;{"content" : "$nonEscape[$customEmoji[kaeruAlert]] You've already created an issue thread, but you can also wait %time% to create a new one :3","ephemeral" : true,"options" : {"interaction" : true}}]
		
    $onlyIf[$interactionData[values[0]]==sup0;]
		`
	},
	{
		type: 'interaction',
		prototype: 'selectMenu',
		code: `
		$if[1==1;{execute:supMsg}; ]
		
		$channelSendMessage[$get[id];<@&959007092537192458>, <@$authorID> wants to report something!]
		
		$let[id;$createThread[$channelID;❖ Report Thread﹕Issue ⌗$getServerVar[caseNum];60;private;$messageID;yes]]

		$interactionUpdate[;{newEmbed:
			{title:$customEmoji[kaeruReportLabel1]$customEmoji[kaeruReportLabel2]}
			{thumbnail:$authorAvatar}
			{description:$customEmoji[kaeruIssue] Created Issue succesfully!
> *Please give details as much as you can, so report team can do more things!*}
			{color:$getVar[redHex]}
			{footer:MinesaHub Reporting:$serverIcon}
			{timestamp}
		};{actionRow:
			{selectMenu:ae:e:1:1:yes:
				{selectMenuOptions:reporting thread has been created!:sup0:e:yes:<:kaeruDiscussReport:969347837123002469>}
			}
		}]

		$setServerVar[caseNum;$sum[$getServerVar[caseNum];1]]
		
		$cooldown[1h;{"content" : "$nonEscape[$customEmoji[kaeruAlert]] You've already created an issue thread, but you can also wait %time% to create a new one :3","ephemeral" : true,"options" : {"interaction" : true}}]
		
    $onlyIf[$interactionData[values[0]]==sup1;]
		`
	},
	{
		type: 'interaction',
		prototype: 'selectMenu',
		code: `
		$if[1==1;{execute:supMsg}; ]
		
		$channelSendMessage[$get[id];<@&962292010310586429>, <@$authorID> wants to discuss about something!]
		
		$let[id;$createThread[$channelID;☆ Others Thread﹕Issue ⌗$getServerVar[caseNum];60;private;$messageID;yes]]

		$interactionUpdate[;{newEmbed:
			{title:$customEmoji[kaeruOthersLabel1]$customEmoji[kaeruOthersLabel2]}
			{thumbnail:$authorAvatar}
			{description:$customEmoji[kaeruIssue] Created Issue succesfully!
> *We would like to hear out what you really want to talk about :3*}
			{color:6b7783}
			{footer:MinesaHub Others:$serverIcon}
			{timestamp}
		};{actionRow:
			{selectMenu:ae:e:1:1:yes:
				{selectMenuOptions:others type thread has been created!:sup0:e:yes:<:kaeruDiscussOthers:969569146465579018>}
			}
		}]

		$setServerVar[caseNum;$sum[$getServerVar[caseNum];1]]
		
		$cooldown[1h;{"content" : "$nonEscape[$customEmoji[kaeruAlert]] You've already created an issue thread, but you can also wait %time% to create a new one :3","ephemeral" : true,"options" : {"interaction" : true}}]
    
    $onlyIf[$interactionData[values[0]]==sup2;]
		`
	}
]
