module.exports = [
  {
    name: "giveaway",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $setTimeout[giveawayDelete;7d;{}]

    $editMessage[$get[e];{newEmbed:{thumbnail:$servericon}{title:。$customEmoji[kaeruGift]﹕prize・$get[prize]}{description:$customEmoji[kaeruAvatar]・**hosted by:** <@$get[host]>\n$customEmoji[kaeruAchievement]・**winner:** <@$get[winner]>\n$customEmoji[kaeruTimeout]・**ended:** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n。$customEmoji[kaeruEye]﹕participants・**$get[participated]** users \*˙︶˙\*)ﾉ}{footer:giveaway ended at}{timestamp:$get[endstamp]}{color:FFAAAA}}]

    $sendMessage[{"content":"<@$get[winner]>, you have won **$nonEscape[$get[prize]]** ヾ(＾-＾)ノ", "components":"{actionRow:{button:lemme see!:5:https#COLON#//discord.com/channels/$guildID/$channelID/$get[e]:false:<:kaeruUp:968774957804945419>}}"}]

    $onlyIf[$getMessageVar[ended]==false;]
    
    $onlyIf[$get[winner]!=;$customEmoji[kaeruTimeout] Uhh... Due to low participation, the giveaway has been cancelled... (っ◞‸◟c)]
    
    $setMessageVar[ended;true;$get[e]]

    $let[winner;$randomText[$joinSplitText[#SEMI#]]]

    $removeTextSplitElement[$getTextSplitLength]
    
    $textSplit[$getMessageVar[joinedusers;$get[e]];@]
    
    $let[participated;$getMessageVar[joined;$get[e]]]
    
    $wait[$get[time]]
    
    $setMessageVar[endstamp;$get[endstamp];$get[e]]
    
    $setMessageVar[hoster;$authorid;$get[e]]
    
    $setmessagevar[prize;$get[prize];$get[e]]

    $let[e;$apiMessage[$channelID;;{newEmbed:{thumbnail:$servericon}{title:。$customEmoji[kaeruGift]﹕prize・$get[prize]}{description:$customEmoji[kaeruAvatar]・**hosted by:** <@$authorID>\n$customEmoji[kaeruAchievement]・**winner:** ||if you join now, you can win!||\n$customEmoji[kaeruTimeout]・**time:** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n。$customEmoji[kaeruEye]﹕participants・**No one** has joined this giveaway for now 👀}{footer:giveaway has started~}{color:$getVar[blueHex]}};{actionRow:{button:join:2:join_giveaway:false:<:kaeruVerified:968520487124742144>}{button:re-roll:2:reroll_giveaway:false:<:kaeruLoop:968764675745542164>}{button:end:2:end_giveaway:false:<:kaeruAlert:968495584472342628>}};;;;;yes]]

    $interactionReply[Done! :3;;;;;yes]
    
    $let[endstamp;$sum[$dateStamp;$parseTime[$get[time]]]]
    
    $let[prize;$slashOption[prize]]
    
    $let[time;$slashOption[time]$slashOption[unit]]
    
    $onlyPerms[manageserver;{"content":"$nonEscape[$customEmoji[kaeruAlert]] You don't have \`manageserver\` permission :3", "ephemeral": true, "options": {"interaction": true}}]
    `
  }, 
  {
    type: 'interaction',
    prototype: "button",
    code: `
    $editmessage[$get[msg];{newEmbed:{thumbnail:$authorAvatar}{title:。$customEmoji[kaeruGift]﹕prize・$get[prize]}{description:$customEmoji[kaeruAvatar]・**hosted by:** <@$get[host]>\n$customEmoji[kaeruAchievement]・**winner:** who will be tho :3\n$customEmoji[kaeruTimeout]・**ending..:** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n。$customEmoji[kaeruEye]﹕participants・**$get[participated]** users \*˙︶˙\*)ﾉ}{footer:last participant#COLON# $userTag #COLON#3}{color:$randomText[F3ECB8;F5CAB3;A8D3DA;B590CA;FFAAA7;FFD3B4;D5ECC2;98DDCA;F2E1C1;F6AE99;B97A95;716F81]}}]
    $setmessagevar[joinedusers;$getmessagevar[joinedusers;$get[msg]]$authorid@;$get[msg]]
    $setmessagevar[joined;$get[participated];$get[msg]]
    $onlyif[$get[condition]==false;]

    $interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];false;$customEmoji[kaeruClosed] Joined to giveaway :3];true;$customEmoji[kaeruNotVerified] Uhm.. You have already joined this giveaway OwO?];ended;$customEmoji[kaeruAlert] The giveaway already ended D:];;;;;yes]
    $let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;ended];false;$get[condition]]]
    $let[condition;$checkcontains[$getmessagevar[joinedusers;$interactiondata[message.id]];$authorid]]
    $let[participated;$sum[$getmessagevar[joined;$get[msg]];1];$get[msg]]
    $let[host;$getmessagevar[hoster;$get[msg]]]
    $let[endstamp;$getmessagevar[endstamp;$get[msg]]]
    $let[prize;$getmessagevar[prize;$get[msg]]]
    $let[msg;$interactiondata[message.id]]

    $onlyIf[$interactionData[customId]==join_giveaway;]`
  }, 
  {
    type: 'interaction',
    prototype: "button",
    code: `
    $setTimeout[giveawayDelete;30m;{}]
    
    $editmessage[$get[e];{newEmbed:{thumbnail:$authorAvatar}{title:。$customEmoji[kaeruGift]﹕prize・$get[prize]}{description:$customEmoji[kaeruAvatar]・**hosted by:** <@$get[host]>\n$customEmoji[kaeruAchievement]・**new winner:** <@$get[winner]>\n$customEmoji[kaeruTimeout]・**ended:** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n。$customEmoji[kaeruEye]﹕participants・**$get[participated]** members had joined \*˙︶˙\*)ﾉ}{footer:OwO}{color:$randomText[F3ECB8;F5CAB3;A8D3DA;B590CA;FFAAA7;FFD3B4;D5ECC2;98DDCA;F2E1C1;F6AE99;B97A95;716F81]}}]
    
    $sendMessage[{"content":"<@$get[winner]>, wakey wakey up! You have won **$nonEscape[$get[prize]]** ヾ(＾-＾)ノ", "components":"{actionRow:{button:lemme see!:5:https#COLON#//discord.com/channels/$guildID/$channelID/$get[e]:false:<:kaeruUp:968774957804945419>}}"};no]
    
    $onlyIf[$get[winner]!=;$customEmoji[kaeruTimeout] Uhh... Due to low participation, the giveaway has been cancelled... (っ◞‸◟c)]
    
    $setmessagevar[ended;true;$get[e]]
    
    $let[winner;$randomtext[$joinsplittext[;]]]
    
    $removetextsplitelement[$gettextsplitlength]
    
    $textsplit[$getmessagevar[joinedusers;$get[e]];@]
    
    $let[participated;$getmessagevar[joined;$get[e]]]
    
    $let[e;$get[msg]]
    
    $onlyif[$get[condition]==perform;]

    $interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;$customEmoji[kaeruLoop] re-rolled the giveaway];true;$customEmoji[kaeruAlert] this giveaway has not ended yet humm...];false;customEmoji[kaeruAlert] Uhh... You do not have \`manageserver\` permission. .];;;;;yes]
    
    $let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;$replacetext[$replacetext[$get[condition];true;perform];false;false]];false;$get[condition]]]
    
    $let[condition;$hasperms[$guildID;$authorid;manageserver]]
    
    $let[host;$getmessagevar[hoster;$get[msg]]]
    
    $let[endstamp;$getmessagevar[endstamp;$get[msg]]]
    
    $let[prize;$getmessagevar[prize;$get[msg]]]
    
    $let[msg;$interactiondata[message.id]]

    $onlyIf[$interactionData[customId]==reroll_giveaway;]`
  }, 
  {
    type: 'interaction',
    prototype: "button",
    code: `
    $setTimeout[giveawayDelete;1h;{}]
    
    $editmessage[$get[e];{newEmbed:{thumbnail:$authorAvatar}{title:。$customEmoji[kaeruGift]﹕prize・$get[prize]}{description:$customEmoji[kaeruAvatar]・**hosted by:** <@$get[host]>\n$customEmoji[kaeruAchievement]・**winner:** <@$get[winner]>\n$customEmoji[kaeruTimeout]・**ended:** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n。$customEmoji[kaeruEye]﹕participants・**$get[participated]** members had joined \*˙︶˙\*)ﾉ}{footer:forced to end owo}{color:$randomText[F3ECB8;F5CAB3;A8D3DA;B590CA;FFAAA7;FFD3B4;D5ECC2;98DDCA;F2E1C1;F6AE99;B97A95;716F81]}}]
    
    $sendMessage[{"content":"<@$get[winner]>, You have won **$nonEscape[$get[prize]]** ヾ(＾-＾)ノ", "components":"{actionRow:{button:lemme see!:5:https#COLON#//discord.com/channels/$guildID/$channelID/$get[e]:false:<:kaeruUp:968774957804945419>}}"};no]
    
    $onlyif[$get[winner]!=;$customEmoji[kaeruTimeout] Uhh... Due to low participation, the giveaway has been cancelled... (っ◞‸◟c)]
    
    $setmessagevar[ended;true;$get[e]]
    
    $let[winner;$randomtext[$joinsplittext[;]]]
    
    $removetextsplitelement[$gettextsplitlength]
    
    $textsplit[$getmessagevar[joinedusers;$get[e]];@]
    
    $let[participated;$getmessagevar[joined;$get[e]]]
    
    $let[e;$get[msg]]
    
    $onlyif[$get[condition]==perform;]
    
    $interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;$customEmoji[kaeruVerified] ended the giveaway :3];true;$customEmoji[kaeruNotVerified] humm, giveaway already ended thou. . .];false;$customEmoji[kaeruAlert] Uhh... You do not have \`manageserver\` permission. .];;;;;yes]
    
    $let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];false;$replacetext[$replacetext[$get[condition];true;perform];false;false]];true;$get[condition]]]
    
    $let[condition;$hasPerms[$guildID;$authorid;manageserver]]
    
    $let[host;$getmessagevar[hoster;$get[msg]]]
    
    $let[endstamp;$getmessagevar[endstamp;$get[msg]]]
    
    $let[prize;$getmessagevar[prize;$get[msg]]]
    
    $let[msg;$interactiondata[message.id]]

    $onlyIf[$interactionData[customId]==end_giveaway;]
    `
  },
  {
    name: "giveawayDelete",
    type: 'timeout',
    code: `
    $deleteVar[hoster;$messageID]
    $deleteVar[ended;$messageID]
    $deleteVar[joinedusers;$messageID]
    $deleteVar[joined;$messageID]
    $deleteVar[endstamp;$messageID]
    $deleteVar[prize;$messageID]
    `
  }
]
