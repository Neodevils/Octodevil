module.exports = [
  {
    name: "c-afk", 
    code: `$reply[$messageID;yes]

Created afk slash interaction successfully.

$createApplicationCommand[$guildID;afk;Set yourself on afk status.;true;slash;reason:please describe a reason.:true:3]

$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
  }, 
  {
    name: "afk", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$interactionReply[You're now afk at "$parseDate[$dateStamp;date]" with "$slashOption[reason]" reason.]

$setUserVar[afkStatus;yes]
$setUserVar[afkReason;$slashOption[reason]]
$setUserVar[afkOnTime;$dateStamp]`
  },
  {
  	name: "$alwaysExecute",
  	code: `$deleteIn[10s]
 	
$reply[$messageID;yes]

The member you mentioned is afk, cause "$getUserVar[afkReason;$mentioned[1;no]]" for $parseDate[$sub[$dateStamp;$getUserVar[afkOnTime;$mentioned[1;no]]];time] 

$onlyIf[$getUserVar[afkStatus;$mentioned[1;no]]==yes;]`
  },
  {
  	name: "$alwaysExecute",
  	code: `$deleteIn[10s]

$deleteVar[afkStatus;$authorID_$guildID]
$deleteVar[afkReason;$authorID_$guildID]
$deleteVar[afkOnTime;$authorID_$guildID]

$reply[$messageID;yes]

Welcome back, you have been afk for $parseDate[$sub[$dateStamp;$getUservar[afkOnTime]];time], reason: $getUserVar[afkReason]

$onlyIf[$getUserVar[afkStatus;$authorID]==yes;]`
  }
]
