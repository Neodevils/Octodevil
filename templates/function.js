module.exports = [
  {
    name: "c-function", 
    code: `$reply[$messageID;yes]

Created function slash interaction successfully.

$createApplicationCommand[$guildID;function;Find an aoi.js function and see the usage.;true;slash;name:Please write it is name:true:3]

$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]
		`
  }, 
	{
		name: "function",
		type: 'interaction', 
		prototype: 'slash', 
		code: `
		$interactionFollowUp[;{newEmbed:
			{title:Searched for $slashOption[name]}
			{author:aoi.js (stable)}
			{thumbnail:$userAvatar[$clientID]}
			{field: Usage:\`\`\`
$jsonRequest[https://api.leref.ga/functions/$interactionData[options.data[0].value];data[0].usage;{"content":"Couldn't find that function"}]\`\`\`}
			
			{field:Source:[Source Code]($replaceText[https://github.com/Leref/aoi.js/blob/master/package/functions/funcs/$interactionData[options.data[0].value].js;$;]):yes}}
			{timestamp}
			{color: #abcdef}
		}]
   $interactionDefer
		`
	}
]
