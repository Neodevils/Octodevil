module.exports = ({
name: "create",
type:"interaction",
prototype:"slash",
code: `
$if[$slashOption[amount]==oneRole;{execute:oneRoleOption}]
$if[$slashOption[amount]==twoRole;{execute:twoRoleOption}]
$if[$slashOption[amount]==threeRole;{execute:threeRoleOption}]
$if[$slashOption[amount]==fourRole;{execute:fourRoleOption}]
$if[$slashOption[amount]==fiveRole;{execute:fiveRoleOption}]

$onlyPerms[manageroles;
{ "content" : "You don't have \`manageroles\` permission.",
"ephemeral" : "true", 
"options" : {
"interaction" : true}}
]

$onlyBotPerms[manageroles;
{ "content" : "I don't have \`manageroles\` permission.",
"ephemeral" : "true", 
"options" : {
"interaction" : true}}
]

$onlyBotPerms[useappcmds;
{ "content" : "I don't have \`use_application_command\` permission.",
"ephemeral" : "true", 
"options" : {
"interaction" : true}}
]

$onlyBotPerms[embedlinks;
{ "content" : "I don't have \`embedlinks\` permission.",
"ephemeral" : "true", 
"options" : {
"interaction" : true}}
]

$onlyIf[$guildID!=;
{ "content" : "This application command doesn't work in dm.",
"ephemeral":"true",
"options" : {
"interaction" : true}}]
    
$onlyIf[$interactionData[options._subcommand]==menu;]
    `
})
