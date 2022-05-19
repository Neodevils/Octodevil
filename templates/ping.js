module.exports = [
  {
    name: "c-ping", 
    code: `$reply[$messageID;yes]

Created ping slash interaction successfully.

$createApplicationCommand[$guildID;ping;Check bot's web socket speed and database.;true;slash]

$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
  }, 
  {
    name: "ping", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$interactionReply[$pingms for web socket, $dbPingms for database.]`
  }
]
