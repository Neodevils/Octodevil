module.exports = [
  {
    name: "afk",
    $if: "v4",
    code: `
    $if[$rolePosition[$highestRole]>$rolePosition[$highestRole[$clientID]]]
    $if[$hasPerms[$guildID;$clientID;managenicknames]==true]
    $if[$authorID!=$ownerID]
    $if[$nickname!=]
    $changeNickname[$authorID;⊖ $nickname;User went to afk status.]
    $else
    $changeNickname[$authorID;⊖ $nickname;User went to afk status.]
    $endif
    $endif
    $endif
    $endif
    
    $interactionReply[;{newEmbed:
      {author:$userTag:$authorAvatar}
      {description:$customEmoji[git_moon] You marked yourself as afk with...
> 
> $customEmoji[git_closed] __$slashOption[cause]__}
      {color:$getVar[gitHex]}
      {footer:— When did I become afk?}
      {timestamp}
    }]
    
    $setGlobalUserVar[afk;true]
    $wait[1ms]
    $setGlobalUserVar[afkr;$slashOption[cause]]
    $onlyIf[$getGlobalUserVar[afk]!=true;]`
  },
  {
    name: "$alwaysExecute",
    $if: "v4",
    code: `
    $if[$getGlobalUserVar[afk]==true;]
    $if[$rolePosition[$highestRole]>$rolePosition[$highestRole[$clientID]]]
    $if[$hasPerms[$guildID;$clientID;managenicknames]==true]
    $if[$authorID!=$ownerID]
    $changeNickname[$authorID;$replaceText[$nickname;⊖ ;;]; They're no longer on afk status.]
    $endif
    $endif
    $endif

    $deleteIn[9s]
    $deleteVar[afk;$authorID]
    $deleteVar[afkaa;$authorID]
    $deleteVar[afkmm;$authorID]
    $deleteVar[afkr;$authorID]
    $deleteVar[afkss;$authorID]
    
    $description[1;$customEmoji[git_verified] Succesfully removed your AFK status.
You have been afk for \`$parseDate[$sub[$dateStamp;$getglobaluservar[afkss]];time]\`, $randomText[woah;nice] \`😲\`
>>> $customEmoji[git_hint] __your old afk reason was__・\`$getGlobalUserVar[afkr]\`.
$customEmoji[git_next] __while you are afk__・you have been mentioned \`$getGlobalUserVar[afkmm]\` times.
$customEmoji[kaeruRight] the member mentioned you last time・\`$getGlobalUserVar[afkaa]\` ]
    
    $elseif[$mentioned[1;yes]!=$authorID]
    $if[$getGlobalUserVar[afk;$mentioned[1]]==true]
    
    $setGlobalUserVar[afkaa;$userTag[$authorID];$mentioned[1;no]]

    $setGlobalUserVar[afkmm;$sum[$getGlobalUserVar[afkmm;$mentioned[1;no]];1];$mentioned[1;no]]

    $reply[$messageID;yes]

    $description[1;$customEmoji[mnsImportant] **Hey dear, the member you pinged is on idle status right now!**
__Their reason is__
>>> *\`$getGlobalUserVar[afks;$mentioned[1;no]]\`* for $parseDate[$sub[$dateStamp;$getglobaluservar[afkss;$mentioned[1;no]]];time]]

    $endif
    $endelseif
    $endif
    $wait[1ms]
    `
  }
]
