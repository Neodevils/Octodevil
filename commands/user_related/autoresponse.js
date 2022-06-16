module.exports = [
  {
    name: "mica",
    nonPrefixed: true,
    code: `
    $reply[$messageID;no]
    
    **Neo**'s $randomText[baby;wife;honeyy;sweetheart;dear;heart] <:mns_puff:926060335620845578>

    $onlyIf[$checkContains[$message;mica;Mica]==true;]
    `
  }, {
    name: "ell",
    nonPrefixed: true,
    code: `
    $reply[$messageID;no]
    
    In need of oxygen? Slide into her DM and we shall do a fair trade.

    $onlyIf[$checkContains[$message;Ell;ell]==true;]
    `
  }, {
    name: "neo",
    nonPrefixed: true,
    code: `
    $reply[$messageID;no]
    
    This is the best auto-respond ever <:mns_tfbruh:912732886778654811>

    $onlyIf[$checkContains[$message;Neo;neo]==true;]
    `
  }, {
    name: "kiro",
    nonPrefixed: true,
    code: `
    $reply[$messageID;no]

    I love him <:mns_omeirl:889115129386504232>

    $onlyIf[$checkContains[$message;kiro;Kiro]==true;]
    `
  }, {
    name: "mango",
    nonPrefixed: true,
    code: `
    $reply[$messageID;no]

    https://cdn.discordapp.com/attachments/736571695170584576/788883258120994876/IMG_20201217_003942.jpg

    $serverCooldown[5s;spamming be like to see mango eheheh{delete:5s}]

    $onlyIf[$checkContains[$message;mango;Mango;ian;Ian]==true;]
    `
  }, {
    name: "riku",
    nonPrefixed: true,
    code: `
    $reply[$messageID;no]
    
    He doesn't even be afraid to show off his true colors, cause he can't even think straight <:mns_oyessir:889218230164521023>

    $onlyIf[$checkContains[$message;riku;Riku]==true;]
    `
  }, {
    name: "cheese",
    nonPrefixed: true,
    code: `
    $reply[$messageID;no]
    
    hi

    $onlyIf[$checkContains[$message;cheese;Cheese]==true;]
    `
  }
]
