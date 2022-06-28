  module.exports = [
  {
    name: "afk",
    type: 'interaction',
    prototype: 'slash',
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
> $customEmoji[git_closed] __$slashOption[cause]__ reason.}
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
    
>>> $customEmoji[git_closed] **Succesfully removed your AFK status.**

$customEmoji[git_details] Tap to message to see details.
||$customEmoji[git_clock] Been afk for・\`<t:$sum[$dateStamp;$getglobaluservar[afkss]]:R>\`
$customEmoji[git_hint] Your old afk reason was・\`$getGlobalUserVar[afkr]\`.
$customEmoji[git_next] While you are afk・You've been mentioned \`$getGlobalUserVar[afkmm]\` times.
$customEmoji[git_mention] The user mentioned you last time・\`$getGlobalUserVar[afkaa]\`||
    
    $elseif[$mentioned[1;yes]!=$authorID]
    $if[$getGlobalUserVar[afk;$mentioned[1]]==true]
    
    $setGlobalUserVar[afkaa;$userTag[$authorID];$mentioned[1;no]]

    $setGlobalUserVar[afkmm;$sum[$getGlobalUserVar[afkmm;$mentioned[1;no]];1];$mentioned[1;no]]

    $reply[$messageID;yes]

    $description[1;$customEmoji[git_alert] Hey $userTag 👋
The member you pinged is on __afk status__ right now!

$customEmoji[git_closed] Their reason is...
>>> *\`$getGlobalUserVar[afkr;$mentioned[1;yes]]\`* for $parseDate[$sub[$dateStamp;$getglobaluservar[afkss;$mentioned[1;yes]]];time]]

    $endif
    $endelseif
    $endif
    $wait[1ms]
    `
  }
]
