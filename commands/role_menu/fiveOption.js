module.exports = ({
name:"fiveRoleOption",
 type:"awaited",
 code:`
$apiMessage[$if[$slashOption[channel]==;$channelID;$if[$channelType[$if[$slashOption[channel]==;$channelid;$slashOption[channel]]]==text;$slashOption[channel];$channelID]];;
{newEmbed:
{title:$if[$slashOption[title]==;Role menu;$slashOption[title]]}
{description:$slashOption[description] }{color:$if[$slashOption[color]==;BLACK;$if[$isValidHex[$slashOption[color]]==true;$slashOption[color];BLACK]]}{image:$if[$interactionData[options.resolved.attachments.get("$slashOption[image]")?.url]==undefined;;$interactionData[options.resolved.attachments.get("$slashOption[image]")?.url]]}{thumbnail:$if[$interactionData[options.resolved.attachments.get("$slashOption[thumbnail]")?.url]==undefined;;$interactionData[options.resolved.attachments.get("$slashOption[thumbnail]")?.url]]}};
{actionRow:
{selectMenu:menuCustomId::1:5:false:{selectMenuOptions:$roleName[$findRole[$splitText[1]]]:$findRole[$splitText[1]]:$splitText[2]:false:$nonEscape[$if[$isCustomEmoji[$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;1];:;2]]]]==false;$nonEscape[$customEmoji[2xz]];$if[$arrayAt[emoji;1]==;$nonEscape[$customEmoji[2xz]];$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;1];:;2]]]]]]}{selectMenuOptions:$roleName[$findRole[$splitText[3]]]:$findRole[$splitText[3]]:$splitText[4]:false:$nonEscape[$if[$isCustomEmoji[$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;2];:;2]]]]==false;$nonEscape[$customEmoji[2xz]];$if[$arrayAt[emoji;2]==;$nonEscape[$customEmoji[2xz]];$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;2];:;2]]]]]]}{selectMenuOptions:$roleName[$findRole[$splitText[5]]]:$findRole[$splitText[5]]:$splitText[6]:false:$nonEscape[$if[$isCustomEmoji[$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;3];:;2]]]]==false;$nonEscape[$customEmoji[2xz]];$if[$arrayAt[emoji;3]==;$nonEscape[$customEmoji[2xz]];$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;3];:;2]]]]]]}{selectMenuOptions:$roleName[$findRole[$splitText[7]]]:$findRole[$splitText[7]]:$splitText[8]:false:$nonEscape[$if[$isCustomEmoji[$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;4];:;2]]]]==false;$nonEscape[$customEmoji[2xz]];$if[$arrayAt[emoji;4]==;$nonEscape[$customEmoji[2xz]];$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;4];:;2]]]]]]}{selectMenuOptions:$roleName[$findRole[$splitText[9]]]:$findRole[$splitText[9]]:$splitText[10]:false:$nonEscape[$if[$isCustomEmoji[$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;5];:;2]]]]==false;$nonEscape[$customEmoji[2xz]];$if[$arrayAt[emoji;5]==;$nonEscape[$customEmoji[2xz]];$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;5];:;2]]]]]]}}}]
$wait[2s]

$interactionReply[✅;;;;;yes] 

$onlyIf[$charCount[$splitText[2]]<30;
{"content":"First option description reached max character. \`the limit is 30 characters.\`",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$charCount[$splitText[4]]<30;
{"content":"Second option description reached max character. \`the limit is 30 characters.\`",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$charCount[$splitText[6]]<30;
{"content":"Third option description reached max character. \`the limit is 30 characters.\`",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$charCount[$splitText[8]]<30;
{"content":"Fourth option description reached max character. \`the limit is 30 characters.\`",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$charCount[$splitText[10]]<30;
{"content":"Fifth option description reached max character. \`the limit is 30 characters.\`",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$roleExists[$findRole[$splitText[1]]]==true;
{"content":"The first role provided doesn't exists.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$roleExists[$findRole[$splitText[3]]]==true;
{"content":"The second role provided doesn't exists.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$roleExists[$findRole[$splitText[5]]]==true;
{"content":"The third role provided doesn't exists.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$roleExists[$findRole[$splitText[7]]]==true;
{"content":"The fourth role provided doesn't exists.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$roleExists[$findRole[$splitText[9]]]==true;
{"content":"The fifth role provided doesn't exists.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$splitText[1]!=;
{"content":"You need to provide the first role.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$splitText[3]!=;
{"content":"You need to provide a second role.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$splitText[5]!=;
{"content":"You need to provide a third role.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$splitText[7]!=;
{"content":"You need to provide a fourth role.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$splitText[9]!=;
{"content":"You need to provide a fifth role.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

lyIf[$charCount[$arrayFilter[roleIds;$arrayAt[roleIds;1];==]]<23;
{"content":"[1] There is matching role ids.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$charCount[$arrayFilter[roleIds;$arrayAt[roleIds;2];==]]<23;
{"content":"[2] There is matching role ids.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$charCount[$arrayFilter[roleIds;$arrayAt[roleIds;3];==]]<23;
{"content":"[3] There is matching role ids.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$charCount[$arrayFilter[roleIds;$arrayAt[roleIds;4];==]]<23;
{"content":"[4] There is matching role ids.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$charCount[$arrayFilter[roleIds;$arrayAt[roleIds;5];==]]<23;
{"content":"[5] There is matching role ids.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$createArray[roleIds;$findRole[$splitText[1]];$findRole[$splitText[3]];$findRole[$splitText[5]];$findRole[$splitText[7]];$findRole[$splitText[9]]]
$textsplit[$slashOption[roles];+]
$createArray[emoji;$joinSplitText[;]]
$textsplit[$slashOption[emoji];/]
`  
})
