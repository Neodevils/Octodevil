module.exports = (bot) => {
  bot.status({
    text: "$formatDate[$dateStamp;LT] $timezone[Asia/Manila] PH",
    type: 'STREAMING', 
    status: 'dnd', 
    url: 'https://discord.gg/C4hfT69K',
    time: 6
  });
  
  bot.status({
    text: "$formatDate[$dateStamp;LT] $timezone[Turkey] TR",
    type: 'STREAMING',
    status: 'dnd',
    url: 'https://discord.gg/C4hfT69K',
    time: 6
  })
}
