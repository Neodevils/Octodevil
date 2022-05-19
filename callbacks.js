module.exports = (bot) => {
  bot.onMessage();
  bot.onMessageDelete();
	bot.onMessageUpdate();
  bot.onInteractionCreate();
	bot.onJoin();
	bot.onLeave();
	bot.onChannelCreate();
	bot.onChannelDelete();
	bot.onChannelUpdate();
	bot.onMemberUpdate();
}