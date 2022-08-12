module.exports = {
  name: "to-do",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $interactionReply[
    ;{newEmbed:
      {title: $customEmoji[git_todo] To-Do}
      {description: Complete tasks to receive G-Pack and Rubies!}
      {field: $getUserVar[taskDone] of 3 tasks done:>>> • $if[$getUserVar[messageCount]>=100;$customEmoji[git_closed];$customEmoji[git_redo]] Send **100** messages in **$serverName** ($getUserVar[messageCount] / 100)\n• $if[$getUserVar[keyHolderCount]>=5;$customEmoji[git_closed];$customEmoji[git_redo]] Get mentioned **2** times ($getUserVar[keyHolderCount] / 2)\n• $if[$getUserVar[saluteTask]==1;$customEmoji[git_closed];$customEmoji[git_redo]] Use **\`/salute\`** command on a member
      }
      {field: You can also...: Use those those commands to earn G-Packs and Rubies#SEMI#\n>>> \n• \`/daily\`\n• \`/commission\`\n• \`/gamble\`\n• \`/key holder\`
      }
      {color: $getVar[blueHex]}
    }
  ]
  `
}
