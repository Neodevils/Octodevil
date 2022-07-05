module.exports = [
  {
    type: 'join',
    channel: '722267447935238215',
    code: `
    $attachment[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png;1]?size=4096&middle=$uri[Welcome to MinesaHub;encode]&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=$uri[Now we are $membersCount members;encode]&background=https://media.discordapp.net/attachments/861208192121569280/993915713075032084/AddText_07-03-09.24.03.png&text=%23ffffff&avatarborder=%23fcbfcb&avatarbg=%23FF28b3;welcome.png]

    $giveRole[$guildID;$authorID;801607349290139688]

    $onlyForServers[697039582922801182;]
    `
  },
  {
    type: 'leave',
    channel: '961144092782374942',
    code: `
    $attachment[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png;1]?size=4096&middle=$uri[Goodbye;encode]&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=$uri[Now we are $membersCount members;encode]&background=https://media.discordapp.net/attachments/861208192121569280/993915713075032084/AddText_07-03-09.24.03.png&text=%23ffffff&avatarborder=%23fcbfcb&avatarbg=%23FF28b3;welcome.png]

    $onlyForServers[697039582922801182;]
    `
  }
]
