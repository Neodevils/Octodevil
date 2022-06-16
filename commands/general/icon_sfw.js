module.exports = [{
name: "icon",
type: 'interaction', 
prototype: 'slash', 
code: `
$if[$interactionData[options.data[0].options[0].value]==avatar_jpg;{execute:avatarJpg}]

$if[$interactionData[options.data[0].options[0].value]==neko_jpg;{execute:nekoJpg}]

$if[$interactionData[options.data[0].options[0].value]==meow_jpg;{execute:meowJpg}]

$if[$interactionData[options.data[0].options[0].value]==lizard_jpg;{execute:lizardJpg}]

$if[$interactionData[options.data[0].options[0].value]==foxgirl_jpg;{execute:foxJpg}]

$if[$interactionData[options.data[0].options[0].value]==neko_gif;{execute:nekoGif}]

$if[$interactionData[options.data[0].options[0].value]==kemonomimi_jpg;{execute:kemonomimiJpg}]

$if[$interactionData[options.data[0].options[0].value]==holo_jpg;{execute:holoJpg}]

$if[$interactionData[options.data[0].options[0].value]==woof_jpg;{execute:dogJpg}]

$if[$interactionData[options.data[0].options[0].value]==wallpaper_jpg;{execute:wallpaperJpg}]

$onlyIf[$interactionData[options._subcommand]==sfw;]
`
}, {
    name: "avatarJpg", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **avatar**~}{image:$getObjectProperty[url]}}]
$interactionDefer
$createObject[$jsonRequest[https://nekos.life/api/v2/img/avatar]]

$cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using interaction commands so fast, uhm pwease wait %time%-","ephemeral": true, "options":{"interaction" : true}}]
`
}, {
    name: "nekoJpg", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **neko picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer
$createObject[$jsonRequest[https://nekos.life/api/v2/img/neko]]

$cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using interaction commands so fast, uhm pwease wait %time%-","ephemeral": true, "options":{"interaction" : true}}]
`
}, {
    name: "meowJpg", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **cat picture 𓃠**~}{image:$getObjectProperty[url]}}]
$interactionDefer
$createObject[$jsonRequest[https://nekos.life/api/v2/img/meow]]

$cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using interaction commands so fast, uhm pwease wait %time%-","ephemeral": true, "options":{"interaction" : true}}]
`
}, {
    name: "lizardJpg", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **lizard picture 𓆈**~}{image:$getObjectProperty[url]}}]
$interactionDefer
$createObject[$jsonRequest[https://nekos.life/api/v2/img/lizard]]

$cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using interaction commands so fast, uhm pwease wait %time%-","ephemeral": true, "options":{"interaction" : true}}]
`
}, {
    name: "foxJpg", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **fox girl**~}{image:$getObjectProperty[url]}}]
$interactionDefer
$createObject[$jsonRequest[https://nekos.life/api/v2/img/fox_girl]]

$cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using interaction commands so fast, uhm pwease wait %time%-","ephemeral": true, "options":{"interaction" : true}}]
`
}, {
    name: "nekoGif", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **nya nya**~}{image:$getObjectProperty[url]}}]
$interactionDefer
$createObject[$jsonRequest[https://nekos.life/api/v2/img/ngif]]

$cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using interaction commands so fast, uhm pwease wait %time%-","ephemeral": true, "options":{"interaction" : true}}]
`
}, {
    name: "kemonomimiJpg", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **kemonomimi picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer
$createObject[$jsonRequest[https://nekos.life/api/v2/img/kemonomimi]]

$cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using interaction commands so fast, uhm pwease wait %time%-","ephemeral": true, "options":{"interaction" : true}}]
`
}, {
    name: "holoJpg", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **holo picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer
$createObject[$jsonRequest[https://nekos.life/api/v2/img/holo]]

$cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using interaction commands so fast, uhm pwease wait %time%-","ephemeral": true, "options":{"interaction" : true}}]
`
}, {
    name: "dogJpg", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **puppy picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer
$createObject[$jsonRequest[https://nekos.life/api/v2/img/woof]]

$cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using interaction commands so fast, uhm pwease wait %time%-","ephemeral": true, "options":{"interaction" : true}}]
`
}, {
    name: "wallpaperJpg", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **wallpaper**~}{image:$getObjectProperty[url]}}]
$interactionDefer
$createObject[$jsonRequest[https://nekos.life/api/v2/img/wallpaper]]

$cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using interaction commands so fast, uhm pwease wait %time%-","ephemeral": true, "options":{"interaction" : true}}]
`
}]