module.exports = [
  {
    name: "c-wyr", 
    code: `$reply[$messageID;yes]
    
Created would you rather slash interaction successfully.
    
$createApplicationCommand[$guildID;wyr;Make a would you rather.;true;slash;opt1:1st option:true:3;opt2:2nd option:true:3]
    
$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
  },
  {
    name: "wyr", 
    type: 'interaction', 
    prototype: 'slash', 
    code: `$sendMessage[{
            "content":"Would you rather?\\n1. $slashOption[opt1]\\n\\n2. $slashOption[opt2]", 
            "fetchReply" : true, 
            "options": { 
                "reactions" : ["1️⃣","2️⃣"], 
                "interaction" : true 
            }
        }]

$onlyBotPerms[addreactions;
    {
        "content": "I need \`ADD_REACTIONS\` permission.",
        "options":{
            "interaction" : true
        }
    }
]
$onlyBotPerms[embedlinks;
    {
	    "content": "I need \`EMBED_LINKS\` permission.",
	    "options":{
		    "interaction" : true
	    }
    }
]`
  }
]