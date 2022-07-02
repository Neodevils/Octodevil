module.exports = [
  {
    name: "giveaway",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $setTimeout[giveawayDelete;7d;{}]

    $editMessage[$get[e];{newEmbed:
      {title:。$customEmoji[git_gift]﹕prize・$get[prize]}
      {thumbnail:$servericon}
      {description:$customEmoji[git_tag]・**hosted by:** <@$get[host]>\n$customEmoji[git_verified]・**winner:** <@$get[winner]>\n$customEmoji[git_clock]・**ended:** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n。$customEmoji[git_eye]﹕participants・**$get[participated]** users \*˙︶˙\*)ﾉ}
      {footer:giveaway ended at}
      {timestamp:$get[endstamp]}
      {color:$getVar[invisibleHex]}}]

    $sendMessage[{"content":"<@$get[winner]>, you have won **$nonEscape[$get[prize]]** ヾ(＾-＾)ノ", "components":"{actionRow:{button:Redirect me, please!:5:https#COLON#//discord.com/channels/$guildID/$channelID/$get[e]:false:$nonEscape[$customEmoji[git_arrow_up]]}}"}]

    $onlyIf[$getMessageVar[ended]==false;]
    
    $onlyIf[$get[winner]!=;$customEmoji[git_clock] Uhh... Due to low participation, the giveaway has been cancelled... (っ◞‸◟c)]
    
    $setMessageVar[ended;true;$get[e]]

    $let[winner;$randomText[$joinSplitText[#SEMI#]]]

    $removeTextSplitElement[$getTextSplitLength]
    
    $textSplit[$getMessageVar[joinedusers;$get[e]];@]
    
    $let[participated;$getMessageVar[joined;$get[e]]]
    
    $wait[$get[time]]
    
    $setMessageVar[endstamp;$get[endstamp];$get[e]]
    
    $setMessageVar[hoster;$authorid;$get[e]]
    
    $setmessagevar[prize;$get[prize];$get[e]]

    $let[e;$apiMessage[$channelID;;{newEmbed:{thumbnail:$servericon}{title:。$customEmoji[git_gift]﹕prize・$get[prize]}{description:$customEmoji[git_tag]・**hosted by:** <@$authorID>\n$customEmoji[git_verified]・**winner:** ||if you join now, you can win!||\n$customEmoji[git_clock]・**time:** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n。$customEmoji[git_eye]﹕participants・**No one** has joined this giveaway for now 👀}{footer:giveaway has started~}{color:$getVar[invisibleHex]}};{actionRow:{button:Join:2:join_giveaway:false:$nonEscape[$customEmoji[git_arrow_up]]}{button:Re-roll:2:reroll_giveaway:false:$nonEscape[$customEmoji[git_redo]]}{button:End:2:end_giveaway:false:$nonEscape[$customEmoji[git_plug]]}};;;;;yes]]

    $interactionReply[Done! :3;;;;;yes]
    
    $let[endstamp;$sum[$dateStamp;$parseTime[$get[time]]]]
    
    $let[prize;$slashOption[prize]]
    
    $let[time;$slashOption[time]$slashOption[unit]]
    
    $onlyPerms[manageserver;{"content":"$nonEscape[$customEmoji[git_alert]] You don't have \`manageserver\` permission :3", "ephemeral": true, "options": {"interaction": true}}]
    `
  }, 
  {
    type: 'interaction',
    prototype: "button",
    code: `
    $editmessage[$get[msg];{newEmbed:{thumbnail:$authorAvatar}{title:。$customEmoji[git_gift]﹕prize・$get[prize]}{description:$customEmoji[git_tag]・**hosted by:** <@$get[host]>\n$customEmoji[git_verified]・**winner:** who will be tho :3\n$customEmoji[git_clock]・**ending..:** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n。$customEmoji[git_eye]﹕participants・**$get[participated]** users \*˙︶˙\*)ﾉ}{footer:last participant#COLON# $userTag #COLON#3}{color:$randomText[F3ECB8;F5CAB3;A8D3DA;B590CA;FFAAA7;FFD3B4;D5ECC2;98DDCA;F2E1C1;F6AE99;B97A95;716F81]}}]
    $setmessagevar[joinedusers;$getmessagevar[joinedusers;$get[msg]]$authorid@;$get[msg]]
    $setmessagevar[joined;$get[participated];$get[msg]]
    $onlyif[$get[condition]==false;]

    $interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];false;$customEmoji[kaeruClosed] Joined to giveaway :3];true;$customEmoji[git_pending] Uhm.. You have already joined this giveaway OwO?];ended;$customEmoji[git_alert] The giveaway already ended D:];;;;;yes]
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
    
    $editmessage[$get[e];{newEmbed:{thumbnail:$authorAvatar}{title:。$customEmoji[git_gift]﹕prize・$get[prize]}{description:$customEmoji[git_tag]・**hosted by:** <@$get[host]>\n$customEmoji[git_verified]・**new winner:** <@$get[winner]>\n$customEmoji[git_clock]・**ended:** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n。$customEmoji[git_eye]﹕participants・**$get[participated]** members had joined \*˙︶˙\*)ﾉ}{footer:OwO}{color:$randomText[F3ECB8;F5CAB3;A8D3DA;B590CA;FFAAA7;FFD3B4;D5ECC2;98DDCA;F2E1C1;F6AE99;B97A95;716F81]}}]
    
    $sendMessage[{"content":"<@$get[winner]>, wakey wakey up! You have won **$nonEscape[$get[prize]]** ヾ(＾-＾)ノ", "components":"{actionRow:{button:Redirect me, please!:5:https#COLON#//discord.com/channels/$guildID/$channelID/$get[e]:false:$nonEscape[$customEmoji[git_arrow_up]]}}"};no]
    
    $onlyIf[$get[winner]!=;$customEmoji[git_clock] Uhh... Due to low participation, the giveaway has been cancelled... (っ◞‸◟c)]
    
    $setmessagevar[ended;true;$get[e]]
    
    $let[winner;$randomtext[$joinsplittext[;]]]
    
    $removetextsplitelement[$gettextsplitlength]
    
    $textsplit[$getmessagevar[joinedusers;$get[e]];@]
    
    $let[participated;$getmessagevar[joined;$get[e]]]
    
    $let[e;$get[msg]]
    
    $onlyif[$get[condition]==perform;]

    $interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;$customEmoji[kaeruLoop] re-rolled the giveaway];true;$customEmoji[git_alert] this giveaway has not ended yet humm...];false;customEmoji[git_alert] Uhh... You do not have \`manageserver\` permission. .];;;;;yes]
    
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
    
    $editmessage[$get[e];{newEmbed:{thumbnail:$authorAvatar}{title:。$customEmoji[git_gift]﹕prize・$get[prize]}{description:$customEmoji[git_tag]・**hosted by:** <@$get[host]>\n$customEmoji[git_verified]・**winner:** <@$get[winner]>\n$customEmoji[git_clock]・**ended:** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n。$customEmoji[git_eye]﹕participants・**$get[participated]** members had joined \*˙︶˙\*)ﾉ}{footer:forced to end owo}{color:$randomText[F3ECB8;F5CAB3;A8D3DA;B590CA;FFAAA7;FFD3B4;D5ECC2;98DDCA;F2E1C1;F6AE99;B97A95;716F81]}}]
    
    $sendMessage[{"content":"<@$get[winner]>, You have won **$nonEscape[$get[prize]]** ヾ(＾-＾)ノ", "components":"{actionRow:{button:lemme see!:5:https#COLON#//discord.com/channels/$guildID/$channelID/$get[e]:false:$nonEscape[$customEmoji[git_arrow_up]]}}"};no]
    
    $onlyif[$get[winner]!=;$customEmoji[git_clock] Uhh... Due to low participation, the giveaway has been cancelled... (っ◞‸◟c)]
    
    $setmessagevar[ended;true;$get[e]]
    
    $let[winner;$randomtext[$joinsplittext[;]]]
    
    $removetextsplitelement[$gettextsplitlength]
    
    $textsplit[$getmessagevar[joinedusers;$get[e]];@]
    
    $let[participated;$getmessagevar[joined;$get[e]]]
    
    $let[e;$get[msg]]
    
    $onlyif[$get[condition]==perform;]
    
    $interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;$customEmoji[git_verified] ended the giveaway :3];true;$customEmoji[git_pending] humm, giveaway already ended thou. . .];false;$customEmoji[git_alert] Uhh... You do not have \`manageserver\` permission. .];;;;;yes]
    
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
