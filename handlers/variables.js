module.exports = (bot) => {
  
// Color Variables
  bot.variables({
    blueHex: "#79B8FF",
    gitHex: "#EC775C",
    invisibleHex: "#303136"
  });
  
// Staff Roles Variables
  bot.variables({
    owner: "801606644001013760",
    staff: "801606706374639666",
    extras: "836338427578286111"
  });
	
// Economy Variables
  bot.variables({
    profileTitle: "",
    profileDescription: "",
    ruby: 0,
    cube: 0,
    dailyMultiplier: 1,
    taskDone: 0,
    messageCount: 0,
    keyHolderCount: 0,
    starCount: 0,
    saluteTask: "false"
  });

// Others
  bot.variables({
    caseNum: 0,
    keyRole: "805451556081500220",
    randomString: ""
  });
  
// Giveaway Variables
  bot.variables({
    endstamp:"0",
    hoster:"",
    prize:"",
    joined:"0",
    joinedusers:"",
    ended:"false"
  });
  
// Afk Variables
  bot.variables({
    afkr: "",
    afk: "false",
    afkss:"",
    afkmm:"0",
    afkc: "0",
    afkaa:"No one mentioned you."
  });
}
