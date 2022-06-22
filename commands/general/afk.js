module.exports = [
  {
    name: "afk",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $setGlobalUserVar[afk;evet]
    
    $setGlobalUserVar[afks;$slashOption[cause]]
    
    $setGlobalUserVar[afkss;$dateStamp]

    $interactionReply[;{newEmbed:
      {author:$userTag:$authorAvatar}
      {description:$customEmoji[mnsIdle] You set yourself to afk status. . .
||$customEmoji[kaeruApproved] afk reason⁀➷*$slashOption[cause]*||}
      {color:$getVar[blueHex]}
      {footer:— when did I become afk?⁀➷}
      {timestamp}
    }]
		`
	},
  {
    name: "$alwaysExecute",
    code: `
    $deleteIn[7s]

    $setGlobalUserVar[afkaa;$userTag[$authorID];$mentioned[1;no]]

    $setGlobalUserVar[afkmm;$sum[$getGlobalUserVar[afkmm;$mentioned[1;no]];1];$mentioned[1;no]]

    $reply[$messageID;yes]

    $description[1;$customEmoji[mnsImportant] **Hey dear, the member you pinged is on idle status right now!**
__Their reason is__
>>> *\`$getGlobalUserVar[afks;$mentioned[1;no]]\`* for $parseDate[$sub[$dateStamp;$getglobaluservar[afkss;$mentioned[1;no]]];time]]

    $color[1;$getVar[redHex]]
    
    $onlyIf[$getGlobalUserVar[afk;$mentioned[1;no]]==evet;]
    
    $suppressErrors
		`
	},
  {
    name: "$alwaysExecute",
    code: `
    $deleteIn[9s]
    $deleteVar[afk;$authorID]
    $deleteVar[afkaa;$authorID]
    $deleteVar[afkmm;$authorID]
    $deleteVar[afks;$authorID]
    $deleteVar[afkss;$authorID]

    $description[1;$customEmoji[mnsVerified] Succesfully removed your idle status!
You have been afk for \`$parseDate[$sub[$dateStamp;$getglobaluservar[afkss]];time]\`, $randomText[woah;nice] :0
>>> $customEmoji[mnsHint] __your old afk reason was__・\`$getGlobalUserVar[afks]\`.
$customEmoji[kaeruRight] __while you are afk__・you have been mentioned \`$getGlobalUserVar[afkmm]\` times.
$customEmoji[kaeruRight] the member mentioned you last time・\`$getGlobalUserVar[afkaa]\` ]

    $color[1;$getVar[greenHex]]

    $onlyIf[$getGlobalUserVar[afk;$authorid]==evet;]

    $suppressErrors
		`
	}
]
