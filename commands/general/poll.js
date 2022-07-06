module.exports = {
  name: "poll",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $sendMessage[{
    "content": "$customEmoji[git_table] *$username created a poll.*",
    "embeds": "{newEmbed:{title:$slashOption[title]}{description:>>> • $slashOption[option_1]\\n\\n• $slashOption[option_2]\\n\\n$if[$slashOption[option_3]!=;• $slashOption[option_3]]\\n\\n$if[$slashOption[option_4]!=;• $slashOption[option_4]]\\n\\n$if[$slashOption[option_5]!=;• $slashOption[option_5]]}{color:$getVar[invisibleHex]}{thumbnail:}}",
    "fetchReply": true, 
    "options": {
      "reactions": [
        "1️⃣",
        "2️⃣",
        "3️⃣",
        "4️⃣",
        "5️⃣"
        ],
      "interaction": true
    }
  }]
  `
} 
