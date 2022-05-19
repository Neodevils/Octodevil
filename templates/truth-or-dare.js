module.exports = [
    {
		name: "c-tod",
		code: `$reply[$messageID;yes]

        Created truth or dare slash interaction successfully.
		
        $createApplicationCommand[$guildID;tod;Play truth or dare;true;slash]
		
		$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
	},
    {
        name: "tod", 
        type: 'interaction', 
        prototype: 'slash', 
        code: `$interactionReply[Truth or Dare?;;{actionRow:{button:Truth:3:truthButton:false}{button:Dare:4:dareButton:false}}]`
    },
    {
        name: "truthButton", 
        type: 'interaction', 
        prototype: 'button', 
        code: `$interactionUpdate[$randomText[Have you ever told truth;Did you make anybody mad], $username?;;{actionRow:{button:Truth:3:truthButton:true}{button:Dare:4:dareButton:true}}]`
    },
    {
        name: "dareButton", 
        type: 'interaction', 
        prototype: 'button', 
        code: `$interactionUpdate[$randomText[Open cam;Send us a voicemail of your], $username.;;{actionRow:{button:Truth:3:truthButton:true}{button:Dare:4:dareButton:true}}]`
    }
]