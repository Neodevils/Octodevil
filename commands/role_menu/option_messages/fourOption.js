module.exports = {
  name:"fourRoleOption",
  type:"awaited",
  code:`
  $apiMessage[$if[$slashOption[channel]==;$channelID;$if[$channelType[$if[$slashOption[channel]==;$channelid;$slashOption[channel]]]==text;$slashOption[channel];$channelID]];;{newEmbed:
    {title:$if[$slashOption[title]==;Role menu;$slashOption[title]]}
    {description:$slashOption[description] }
    {color:$if[$slashOption[color]==;$getVar[invisibleHex];$if[$isValidHex[$slashOption[color]]==true;$slashOption[color];$getVar[invisibleHex]]]}
    {image:$if[$interactionData[options.resolved.attachments.get("$slashOption[image]")?.url]==undefined;;$interactionData[options.resolved.attachments.get("$slashOption[image]")?.url]]}
    {thumbnail:$if[$interactionData[options.resolved.attachments.get("$slashOption[thumbnail]")?.url]==undefined;;$interactionData[options.resolved.attachments.get("$slashOption[thumbnail]")?.url]]}
  };{actionRow:
    {selectMenu:menuCustomId::1:4:false:
      {selectMenuOptions:$roleName[$findRole[$splitText[1]]]:$findRole[$splitText[1]]:$splitText[2]:false:$nonEscape[$if[$isCustomEmoji[$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;1];:;2]]]]==false;$nonEscape[$customEmoji[git_commit]];$if[$arrayAt[emoji;1]==;$nonEscape[$customEmoji[git_commit]];$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;1];:;2]]]]]]}
      {selectMenuOptions:$roleName[$findRole[$splitText[3]]]:$findRole[$splitText[3]]:$splitText[4]:false:$nonEscape[$if[$isCustomEmoji[$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;2];:;2]]]]==false;$nonEscape[$customEmoji[git_commit]];$if[$arrayAt[emoji;2]==;$nonEscape[$customEmoji[git_commit]];$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;2];:;2]]]]]]}
      {selectMenuOptions:$roleName[$findRole[$splitText[5]]]:$findRole[$splitText[5]]:$splitText[6]:false:$nonEscape[$if[$isCustomEmoji[$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;3];:;2]]]]==false;$nonEscape[$customEmoji[git_commit]];$if[$arrayAt[emoji;3]==;$nonEscape[$customEmoji[git_commit]];$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;3];:;2]]]]]]}
      {selectMenuOptions:$roleName[$findRole[$splitText[7]]]:$findRole[$splitText[7]]:$splitText[8]:false:$nonEscape[$if[$isCustomEmoji[$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;4];:;2]]]]==false;$nonEscape[$customEmoji[git_commit]];$if[$arrayAt[emoji;4]==;$nonEscape[$customEmoji[git_commit]];$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;4];:;2]]]]]]}
    }
  }]
  
  $wait[2s]
  
  $interactionReply[$customEmoji[git_verified] Created Role Menu Succesful.;;;;;yes] 
  
  $onlyIf[$charCount[$splitText[2]]<30;
  {"content":"$nonEscape[$customEmoji[git_alert]] First option description reached max character. \\n> \`The limit is 30 characters.\`",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$charCount[$splitText[4]]<30;
  {"content":"$nonEscape[$customEmoji[git_alert]] Second option description reached max character. \\n> \`The limit is 30 characters.\`",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$charCount[$splitText[6]]<30;
  {"content":"$nonEscape[$customEmoji[git_alert]] Third option description reached max character. \\n> \`The limit is 30 characters.\`",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$charCount[$splitText[8]]<30;
  {"content":"$nonEscape[$customEmoji[git_alert]] Fourth option description reached max character. \\n> \`The limit is 30 characters.\`",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$roleExists[$findRole[$splitText[1]]]==true;
  {"content":"$nonEscape[$customEmoji[git_alert]] The first role provided doesn't exists.",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$roleExists[$findRole[$splitText[3]]]==true;
  {"content":"$nonEscape[$customEmoji[git_alert]] The second role provided doesn't exists.",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$roleExists[$findRole[$splitText[5]]]==true;
  {"content":"$nonEscape[$customEmoji[git_alert]] The third role provided doesn't exists.",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$roleExists[$findRole[$splitText[7]]]==true;
  {"content":"$nonEscape[$customEmoji[git_alert]] The fourth role provided doesn't exists.",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$splitText[1]!=;
  {"content":"$nonEscape[$customEmoji[git_alert]] You need to provide the first role.",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$splitText[3]!=;
  {"content":"$nonEscape[$customEmoji[git_alert]] You need to provide a second role.",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$splitText[5]!=;
  {"content":"$nonEscape[$customEmoji[git_alert]] You need to provide a third role.",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$splitText[7]!=;
  {"content":"$nonEscape[$customEmoji[git_alert]] You need to provide a fourth role.",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$charCount[$arrayFilter[roleIds;$arrayAt[roleIds;1];==]]<23;
  {"content":"$nonEscape[$customEmoji[git_alert]] [1] There is matching role ids.",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$charCount[$arrayFilter[roleIds;$arrayAt[roleIds;2];==]]<23;
  {"content":"$nonEscape[$customEmoji[git_alert]] [2] There is matching role ids.",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$charCount[$arrayFilter[roleIds;$arrayAt[roleIds;3];==]]<23;
  {"content":"$nonEscape[$customEmoji[git_alert]] [3] There is matching role ids.",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$charCount[$arrayFilter[roleIds;$arrayAt[roleIds;4];==]]<23;
  {"content":"$nonEscape[$customEmoji[git_alert]] [4] There is matching role ids.",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $createArray[roleIds;$findRole[$splitText[1]];$findRole[$splitText[3]];$findRole[$splitText[5]];$findRole[$splitText[7]]]
  $textsplit[$slashOption[roles];+]
  $createArray[emoji;$joinSplitText[;]]
  $textsplit[$slashOption[emoji];/]
  
  `  
  }