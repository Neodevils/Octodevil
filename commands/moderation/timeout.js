module.exports = {
  name: "timeout",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $interactionreply[;{newEmbed:
    {author:$randomText[Stop right there!; Shhhh!;Oof!; Well, you deserved.;Oops!]:$authorAvatar}
    {thumbnail:$userAvatar[$slashOption[member]]}
    {description:$customEmoji[git_timeout] **$username** timeouted **__$userTag[$slashOption[member]]__**.
> Let's keep the channels clean! 🙌🏻}
    {field: — Time:$customEmoji[git_clock] <t:$truncate[$divide[$get[time];1000]]:R>}
    {field:﹠reason:$customEmoji[git_write] $replaceText[$interactionData[options.data[3].value];undefined;No reason given.]}{color:$getVar[invisibleHex]}
  }]

  $let[time;$timeoutMember[$guildID;$slashOption[member];$slashOption[time]$slashOption[unit];yes;$replaceText[$interactionData[options.data[3].value];undefined;No reason given.]]]

  $onlyForRoles[$getVar[owner];$getVar[staff];{"content":"$nonEscape[$customEmoji[git_alert]] Not allowed to use it. Sad...","ephemeral": "true", "options": {"interaction": true}}]
  `
}
