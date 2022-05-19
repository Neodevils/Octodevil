module.exports = {
  name: "set-profile",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $interactionReply[Updated your profile succesfully :3;{newEmbed:
    {title:$getUserVar[profileTitle]}
    {description:$getUserVar[profileDescription]}
    {color:$getVar[brownHex]}
  }]

  $setUserVar[profileTitle;$slashOption[title]]

  $setUserVar[profileDescription;$slashOption[description]]
  `
}