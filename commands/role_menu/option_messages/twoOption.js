module.exports = {
  name:"twoRoleOption",
  type:"awaited",
  code:`
  $apiMessage[$if[$slashOption[channel]==;$channelID;$if[$channelType[$if[$slashOption[channel]==;$channelid;$slashOption[channel]]]==text;$slashOption[channel];$channelID]];;{newEmbed:
    {title:$if[$slashOption[title]==;Role menu;$slashOption[title]]}
    {description:$slashOption[description] }
    {color:$if[$slashOption[color]==;$getVar[invisibleHex];$if[$isValidHex[$slashOption[color]]==true;$slashOption[color];$getVar[invisibleHex]]]}
    {image:$if[$interactionData[options.resolved.attachments.get("$slashOption[image]")?.url]==undefined;;$interactionData[options.resolved.attachments.get("$slashOption[image]")?.url]]}
    {thumbnail:$if[$interactionData[options.resolved.attachments.get("$slashOption[thumbnail]")?.url]==undefined;;$interactionData[options.resolved.attachments.get("$slashOption[thumbnail]")?.url]]}
  };{actionRow:
    {selectMenu:menuCustomId::1:2:false:
      {selectMenuOptions:$roleName[$findRole[$splitText[1]]]:$findRole[$splitText[1]]:$splitText[2]:false:$nonEscape[$if[$isCustomEmoji[$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;1];:;2]]]]==false;$nonEscape[$customEmoji[git_commit]];$if[$arrayAt[emoji;1]==;$nonEscape[$customEmoji[git_commit]];$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;1];:;2]]]]]]}
      {selectMenuOptions:$roleName[$findRole[$splitText[3]]]:$findRole[$splitText[3]]:$splitText[4]:false:$nonEscape[$if[$isCustomEmoji[$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;2];:;2]]]]==false;$nonEscape[$customEmoji[git_commit]];$if[$arrayAt[emoji;2]==;$nonEscape[$customEmoji[git_commit]];$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;2];:;2]]]]]]}
    }
  }]

  $wait[1s]
  
  $interactionReply[$customEmoji[git_verified] Created Double Role Menu Succesful.;;;;;yes]  
  
  $onlyIf[$charCount[$splitText[2]]<30;
  {"content":"$nonEscape[$customEmoji[git_alert]] First option's description reached max character.\\n> \`The limit is 30 characters.\`",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $onlyIf[$charCount[$splitText[4]]<30;
  {"content":"$nonEscape[$customEmoji[git_alert]] Second option's description reached max character.\\n> \`The limit is 30 characters.\`",
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
  
  $onlyIf[$charCount[$arrayFilter[roleIds;$arrayAt[roleIds;1];==]]<23;
  {"content":"$nonEscape[$customEmoji[git_alert]] There is matching role ids.",
    "ephemeral":"true",
    "options":{"interaction":true}
  }]
  
  $createArray[roleIds;$findRole[$splitText[1]];$findRole[$splitText[3]]]
  $textsplit[$slashOption[roles];+]
  $createArray[emoji;$joinSplitText[;]]
  $textsplit[$slashOption[emoji];/]
  
  `
  }