module.exports = {
  name: "timeout",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $interactionreply[;{newEmbed:
    {author:Shhhh!:$authorAvatar}
    {thumbnail:$userAvatar[$slashOption[member]]}
    {description:**$customEmoji[kaeruError] ┇ $username timeouted $userTag[$slashOption[member]] *!* pwease keep the channel safe. . ₊˚**}
    {field:๑ time:$customEmoji[kaeruTimeout] <t:$truncate[$divide[$get[time];1000]]:R>}
    {field:﹠reason:$customEmoji[kaeruDiscussReport] $replaceText[$interactionData[options.data[3].value];undefined;No reason given!!]}{color:$getVar[redHex]}
  }]

  $let[time;$timeoutMember[$guildID;$slashOption[member];$slashOption[time]$slashOption[unit];yes;$replaceText[$interactionData[options.data[3].value];undefined;No reason given!!]]]

  $onlyForRoles[$getVar[owner];$getVar[admin];$getVar[mod];{"content":"$customEmoji[kaeruAlert] You don't have any staff role to make question of the daily (｡ﾉ_ﾉ)","ephemeral": "true", "options": {"interaction": true}}]
  `
}
