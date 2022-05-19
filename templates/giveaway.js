module.exports = [
	{
		name: "c-giveaway",
		code: `$reply[$messageID;yes]
		
Created Giveaway Slash Interaction Command.
		
$createApplicationCommand[$guildID;giveaway;Create a giveaway.;true;slash;[{"name":"time", "description":"please enter time.", "type": 10, "required":true}, {"name" : "unit", "type" : 3, "required" : true, "description" : "Please pick unit of time.", "choices" : [{"name" : "second", "value" : "s"}, {"name" : "minute", "value" : "m"}, {"name" : "hour", "value" : "h"}, {"name" : "day", "value" : "d"}]}, {"name":"prize", "description":"please enter the prize", "type": 3, "required":true}]]

$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
	},
	{
		name: "giveaway",
		type: 'interaction', 
		prototype: 'slash', 
		code: `$editMessage[$get[edit];Giveaway ended.\nprize: $get[prize]\nwinner:<@$get[winner]>\nended: <t:$truncate[$divide[$get[endstamp];1000]]:R>\nparticipated: $get[participated] users.]

$sendMessage[<@$get[winner]> won $get[prize].]

$onlyIf[$getMessageVar[ended]==false;]
$onlyIf[$get[winner]!=;Due low participants, giveaway cancelled.]

$setMessageVar[ended;true;$get[edit]]

$let[winner;$randomText[$joinSplitText[#SEMI#]]]

$removeTextSplitElement[$getTextSplitLength]
$textSplit[$getMessageVar[joinedusers;$get[edit]];@]

$let[participated;$getMessageVar[joined;$get[edit]]]

$wait[$get[time]]

$setMessageVar[endstamp;$get[endstamp];$get[edit]]
$setMessageVar[hoster;$authorID;$get[edit]]
$setMessageVar[prize;$get[prize];$get[edit]]

$let[edit;$apimessage[$channelid;prize: $get[prize]\nhosted by: <@$authorID>\nwinner: 1 winner\ntime: <t:$truncate[$divide[$get[endstamp];1000]]:R>\nparticipians: 0;;{actionRow:{button:join:3:join_giveaway:false:✅}{button:reroll:1:reroll_giveaway:false:🔄}{button:end:4:end_giveaway:false:❌}};;;;;yes]]
$wait[1s]
$interactionReply[Created the giveaway.;;;;;yes]

$let[endstamp;$sum[$dateStamp;$parseTime[$get[time]]]]
$let[prize;$slashOption[prize]]
$let[time;$slashOption[time]$slashOption[unit]]


$onlyPerms[manageserver;{"content":"You're missing \`MANAGE_SERVER\` permission
", "ephemeral": true, "options": {"interaction": true}}]
`
	}, 
	{
		type: 'interaction', 
		prototype:"button",
		code:`$editMessage[$get[msg];prize: $get[prize]\nhosted by: <@$get[host]>\nwinner: 1\ntime <t:$truncate[$divide[$get[endstamp];1000]]:R>\n$get[participated] members joined this giveaway.]

$setMessageVar[joinedusers;$getMessageVar[joinedusers;$get[msg]]$authorID@;$get[msg]]
$setMessageVar[joined;$get[participated];$get[msg]]

$onlyIf[$get[condition]==false;]

$interactionReply[$replaceText[$replaceText[$replaceText[$get[condition];false;Joined to giveaway];true;You have joined to giveaway already.];ended;The giveaway has been ended already.];;;;;yes]

$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;ended];false;$get[condition]]]
$let[condition;$checkContains[$getMessageVar[joinedusers;$interactionData[message.id]];$authorID]]
$let[participated;$sum[$getMessageVar[joined;$get[msg]];1];$get[msg]]
$let[host;$getMessageVar[hoster;$get[msg]]]
$let[endstamp;$getMessageVar[endstamp;$get[msg]]]
$let[prize;$getMessageVar[prize;$get[msg]]]
$let[msg;$interactionData[message.id]]

$onlyIf[$interactionData[customId]==join_giveaway;]`
	},
	{
		type: 'interaction', 
		prototype:"button",
		code:`$sendMessage[<@$get[winner]> is the new winner of $get[prize].]

$onlyIf[$get[winner]!=;Due low participants, giveaway cancelled.]

$setMessageVar[ended;true;$get[edit]]

$let[winner;$randomText[$joinSplitText[;]]]
$removeTextSplitElement[$getTextSplitLength]
$textSplit[$getMessageVar[joinedusers;$get[edit]];@]
$let[participated;$getMessageVar[joined;$get[edit]]]
$let[e;$get[msg]]

$onlyIf[$get[condition]==perform;]

$interactionReply[$replaceText[$replaceText[$replaceText[$get[condition];perform;rerolled the giveaway.];true;This giveaway has not ended yet.];false;You do not have \`MANAGE_SERVER\` permission.];;;;;yes]

$let[condition;$replaceText[$replaceText[$getMessageVar[ended;$get[msg]];true;$replaceText[$replaceText[$get[condition];true;perform];false;false]];false;$get[condition]]]
$let[condition;$hasPerms[$guildID;$authorID;manageserver]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]

$onlyIf[$interactionData[customId]==reroll_giveaway;]`
	},
	{
		type: 'interaction', 
		prototype:"button",
		code:`$editMessage[$get[edit];Giveaway forced to end.\nprize: $get[prize]\nforce end winner:<@$get[winner]>\nended: <t:$truncate[$divide[$get[endstamp];1000]]:R>\nparticipated: $get[participated] users.]

$sendmessage[<@$get[winner]> is the winner of $get[prize]]

$onlyif[$get[winner]!=;Due low participants, giveaway couldn't forced to end.]

$setmessagevar[ended;true;$get[edit]]

$let[winner;$randomtext[$joinsplittext[;]]]

$removetextsplitelement[$gettextsplitlength]

$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$let[e;$get[msg]]

$onlyif[$get[condition]==perform;]

$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;Ended the giveaway.];true;Giveaway already ended.];false;You do not have \`MANAGE_SERVER\` permission.];;;;;yes]

$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];false;$replacetext[$replacetext[$get[condition];true;perform];false;false]];true;$get[condition]]]
$let[condition;$hasperms[$guildID;$authorid;manageserver]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]

$onlyIf[$interactionData[customId]==end_giveaway;]`
	}
]
