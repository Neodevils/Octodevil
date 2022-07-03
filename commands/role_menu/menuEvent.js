module.exports = [{
  name: "menuCustomId",
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionfollowUp[>>> $get[answers]]
$let[answers;$arrayMap[values;awaitChanging;
    ]]
$interactionDefer[yes]
$createarray[values;$nonEscape[$interactionData[values.join(";")]]]

$onlyBotPerms[manageroles;
{ "content" : "I don't have \`manageroles\` permission.",
"ephemeral" : "true", 
"options" : {
"interaction" : true}}
]
    `,
},{
name: "awaitChanging",
type: "awaited",
$if: "v4",
code: `
$textTrim[
$if[$hasRoles[$guildId;$interactionData[author.id];{value}]==true]
$takeRole[$guildid;$interactionData[author.id];{value}]
Removed <@&{value}>
$else
$giveRole[$guildId;$interactionData[author.id];{value}]
Added <@&{value}>
$endif
]
`
}]
