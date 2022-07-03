module.exports = ({
  name:"oneRoleOption",
 type:"awaited",
 code:`
$apiMessage[$if[$slashOption[channel]==;$channelID;$if[$channelType[$if[$slashOption[channel]==;$channelid;$slashOption[channel]]]==text;$slashOption[channel];$channelID]];;
{newEmbed:
{title:$if[$slashOption[title]==;Role menu;$slashOption[title]]}
{description:$slashOption[description] }
{color:$if[$slashOption[color]==;BLACK;$if[$isValidHex[$slashOption[color]]==true;$slashOption[color];BLACK]]}{image:$if[$interactionData[options.resolved.attachments.get("$slashOption[image]")?.url]==undefined;;$interactionData[options.resolved.attachments.get("$slashOption[image]")?.url]]}{thumbnail:$if[$interactionData[options.resolved.attachments.get("$slashOption[thumbnail]")?.url]==undefined;;$interactionData[options.resolved.attachments.get("$slashOption[thumbnail]")?.url]]}};
{actionRow:
{selectMenu:menuCustomId::1:1:false:{selectMenuOptions:$roleName[$findRole[$splitText[1]]]:$findRole[$splitText[1]]:$splitText[2]:false:$nonEscape[$if[$isCustomEmoji[$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;1];:;2]]]]==false;$nonEscape[$customEmoji[git_commit]];$if[$arrayAt[emoji;1]==;$nonEscape[$customEmoji[git_commit]];$nonEscape[$customEmoji[$advancedTextSplit[$arrayAt[emoji;1];:;2]]]]]]}}}]

$interactionReply[$customEmoji[git_verified];;;;;yes] 

$onlyIf[$charCount[$splitText[2]]<30;
{"content":"Option description reached max character. \`the limit is 30 characters.\`",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$onlyIf[$roleExists[$findRole[$splitText[1]]]==true;
{"content":"The first role provided doesn't exists.",
  "ephemeral":"true",
  "options":{"interaction":true}
}]

$textsplit[$slashOption[roles];+]
$createArray[emoji;$joinSplitText[;]]
$textsplit[$slashOption[emoji];/]
`
})
