module.exports = [
  {
    name: "c-delApps", 
    code: `$reply[$messageID;yes]

Created Deleting ~~applications~~ interaction successfully.

$createApplicationCommand[$guildID;delete-app;Delete my application command in this server.;true;slash;name:Please write it is name:true:3]

$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
  }, 
  {
    name: "delete-app", 
    prototype: 'slash',
    type: 'interaction', 
    code: `
    $interactionReply[$slashOption[name] application deleted successfully in this guild.]
    
    $deleteApplicationCommand[$guildID;$getApplicationCommandID[$slashOption[name];$guildID]]
		`
  }
]