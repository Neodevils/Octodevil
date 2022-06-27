module.exports = [
  {
    name: "c-qotd",
    code: `
    $reply[$messageID;yes]

		Created qotd slash interaction successfully.

		$createApplicationCommand[$guildID;qotd;Ask question of daily.;true;slash;question:please ask your question.:true:3]

		$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]
		`
  },
  {
    name: "qotd",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $createThread[$channelID;Today's qotd;1440;public;$get[id]]

    $let[id;$sendMessage[{
      "content": "Asking question of the day!\\n\\nQuestion: $slashOption[question]", 
      "fetchReply": true, 
      "options": {
        "interaction":true 
      }
    };yes]]
    `
  }
]
