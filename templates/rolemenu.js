module.exports = [
  {
    name: "c-rolemenu",
    code: `
    $reply[$messageID;no]
    Created role menu slash interaction successfully.

$createApplicationCommand[$guildID;role-menu;Make a role menu.;true;slash;role_1:Please select a role.:true:8;role_2:Please select a role.:true:8]

$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]
    `
  },
  {
    name: "role-menu",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[Please pick your roles!\n>>> <@&$slashOption[role_1]>\n<@&$slashOption[role_2]>
      ;
      ;{actionRow:
        {selectMenu:roleMenu::1:2:false:
          {selectMenuOptions:$roleName[$slashOption[role_1]]:$slashOption[role_1]::false}
          {selectMenuOptions:$roleName[$slashOption[role_2]]:$slashOption[role_2]::false}
        }
      }
    ]
    `
  },
  {
    name: "roleMenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $interactionfollowUp[$get[selects]]

    $let[selects;$textSplitMap[giveTakeCmd]]

    $interactionDefer[yes]

    $textSplit[$interactionData[values.join(",")];,]
    `
  },
  {
    name: "giveTakeCmd",
    type: "awaited",
    $if: "v4",
    code: `
    $textTrim[   
      $if[$hasRoles[$guildId;$interactionData[author.id];$message[1]]==true]
        $takeRole[$guildid;$interactionData[author.id];$message[1]]
          Removed <@&$message[1]> from <@$interactionData[author.id]>.
      $else
        $giveRole[$guildId;$interactionData[author.id];$message[1]]
          Added <@&$message[1]> to <@$interactionData[author.id]>.
      $endif
    ]
    `
  }
]
