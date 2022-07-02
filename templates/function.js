module.exports = [
  {
    name: "c-function",
    code: `
    $reply[$messageID;yes]
      
    Created function slash interaction command successfully.
      
    $createApplicationCommand[$guildID;function;Check usage of function ;true;slash;{ 
        "name" : "name",
        "description" : "Please pick the function you're search for.",
        "required" : true,
        "type" : 3,
        "autocomplete" : true
      }]


      $onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]
      `
  },
  {
    name: "function",
    type: "interaction",
    $if: "v4",
    prototype: "slash",
    code: `
    $if[$isAutocomplete==true]
  
      $if[$message[1]!=&&$message[1]!=$]
        $autocompleteRespond[$djseval[
          JSON.stringify(client.functionManager.functions.filter(x => x.toLowerCase().startsWith("$slashOption[name]".toLowerCase())).map(x =>{  return {name : x, value : x.toLowerCase()}}));yes]]
        
      $endif
    
    $else
  
      $interactionReply[>>> Function Name\n\`\`\`js\n$slashOption[name]\n\`\`\`\n\nUsage\`\`\`js\n$djseval[const a = client.functionManager.usage.get(client.functionManager.functions.find(x => x.toLowerCase().startsWith(args.join(" ").toLowerCase()))?.toLowerCase()) 
      a === null ? " No Params" : a === undefined ? " No Usage." : client.functionManager.functions.find(x => x.toLowerCase().startsWith(args.join(" ").toLowerCase()))+a;yes]\n\`\`\`
      ]
    
    $endif
    `
  }
]
