module.exports = {
  name: "create",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $if[$slashOption[amount]==oneRole;{execute:oneRoleOption}]

  $if[$slashOption[amount]==twoRole;{execute:twoRoleOption}]

  $if[$slashOption[amount]==threeRole;{execute:threeRoleOption}]

  $if[$slashOption[amount]==fourRole;{execute:fourRoleOption}]

  $if[$slashOption[amount]==fiveRole;{execute:fiveRoleOption}]

  $onlyIf[$interactionData[options._subcommand]==menu;]
  `
}
