module.exports = {
  Bot: {
		token: process.env.TOKEN,
    prefix: "!",
		intents: ["GUILDS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MEMBERS"],
		database: {
      db: require('aoi.mongo'),
      type: "aoi.mongo",
      path: process.env.CLUSTER,
    },
    cache: {
      messages: 0,
      permissionOverwrites: 0,
      presences: 0,
      reactions: 0,
      reactionUsers: 0,
      threads: 0,
      threadMembers: 0,
      guildBans: 0,
      guildEmojiRoles: 0,
      guildInvites: 0,
      guildStickers: 0
    }
  }
}
