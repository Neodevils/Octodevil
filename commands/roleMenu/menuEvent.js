module.exports = [
  {
    name: "menuCustomId",
    type: "interaction",
    prototype: 'selectMenu',
    code: `
    $interactionFollowUp[$get[answers]]

    $let[answers;$arrayMap[values;awaitChanging;]]

    $interactionDefer[yes]

    $createarray[values;$nonEscape[$interactionData[values.join(";")]]]
    `
  },
  {
    name: "awaitChanging",
    type: "awaited",
    $if: "v4",
    code: `
    $textTrim[
    $if[$hasRoles[$guildId;$interactionData[author.id];{value}]==true]
    $takeRole[$guildid;$interactionData[author.id];{value}]
    $customEmoji[git_removed] Removed\n> <@&{value}>
    $else
    $giveRole[$guildId;$interactionData[author.id];{value}]
    $customEmoji[git_added] Added\n> <@&{value}>
    $endif
    ]
    `
  }
]
