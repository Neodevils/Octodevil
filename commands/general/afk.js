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
    $changeNickname[$authorID;{afk} $nickname;User went to afk status.]
    $else
    $changeNickname[$authorID;{afk} $nickname;User went to afk status.]
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
    
    $setGlobalUserVar[afkss;$dateStamp]
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
    $changeNickname[$authorID;$replaceText[$nickname;{afk} ;];They're no longer on afk status.]
    $endif
    $endif
    $endif

    $deleteVar[afk;$authorID]
    $deleteVar[afkaa;$authorID]
    $deleteVar[afkmm;$authorID]
    $deleteVar[afkr;$authorID]
    $deleteVar[afkss;$authorID]
    
>>> $customEmoji[git_closed] **Succesfully removed your AFK status.**

$customEmoji[git_details] Tap the message to see details.
||$customEmoji[git_clock] Marked as AFK・<t:$truncate[$divide[$getGlobalUserVar[afkss];1000]]:R>
$customEmoji[git_hint] Your old afk reason was・\`$getGlobalUserVar[afkr]\`.
$customEmoji[git_next] While you are afk・You've been mentioned \`$getGlobalUserVar[afkmm]\` times.
$customEmoji[git_mention] The user mentioned you last time・\`$getGlobalUserVar[afkaa]\`||
    
    $elseif[$mentioned[1;yes]!=$authorID]
    $if[$getGlobalUserVar[afk;$mentioned[1]]==true]
    
    $setGlobalUserVar[afkaa;$userTag[$authorID];$mentioned[1;no]]

    $setGlobalUserVar[afkmm;$sum[$getGlobalUserVar[afkmm;$mentioned[1;no]];1];$mentioned[1;no]]
    
    $if[$isUserDmEnabled[$mentioned[1;no]]==true]
    $sendDM[$customEmoji[git_mention] • **$userTag** mentioned you
>>> 
$noMentionMessage
In __$serverName__.;$mentioned[1;no]]
    $endif
    
    $reply[$messageID;yes]

    $description[1;$customEmoji[git_alert] Hey $userTag 👋
The member you pinged is on __afk status__ right now!

$customEmoji[git_clock] • <t:$truncate[$divide[$getGlobalUserVar[afkss;$mentioned[1;no]];1000]]:R>
And you're the one who $customEmoji[git_mention] mentioned them last \`🙃\`]
    $color[1;$getVar[gitHex]]

    $endif
    $endelseif
    $endif
    `
  }
]
