module.exports = [{
name: "icon",
type: 'interaction', 
prototype: 'slash', 
code: `
$if[$interactionData[options.data[0].options[0].value]==lewd_neko;{execute:lewdNeko}]

$if[$interactionData[options.data[0].options[0].value]==nsfw_avatar;{execute:nsfwAvatar}]

$if[$interactionData[options.data[0].options[0].value]==yuri;{execute:yuri}]

$if[$interactionData[options.data[0].options[0].value]==trap;{execute:trap}]

$if[$interactionData[options.data[0].options[0].value]==tits;{execute:tits}]

$if[$interactionData[options.data[0].options[0].value]==solo_girl;{execute:soloGirl}]

$if[$interactionData[options.data[0].options[0].value]==pussy;{execute:pussy}]

$if[$interactionData[options.data[0].options[0].value]==lewd_kemo;{execute:lewdKemo}]

$if[$interactionData[options.data[0].options[0].value]==holo;{execute:holo}]

$if[$interactionData[options.data[0].options[0].value]==kitsune;{execute:kitsune}]

$if[$interactionData[options.data[0].options[0].value]==keta;{execute:keta}]

$if[$interactionData[options.data[0].options[0].value]==futanari;{execute:futanari}]

$if[$interactionData[options.data[0].options[0].value]==hentai_jpg;{execute:hentaiJpg}]

$if[$interactionData[options.data[0].options[0].value]==femdom;{execute:femdom}]

$if[$interactionData[options.data[0].options[0].value]==eros;{execute:eros}]

$if[$interactionData[options.data[0].options[0].value]==feet_jpg;{execute:feet}]

$if[$interactionData[options.data[0].options[0].value]==cum_jpg;{execute:cumJpg}]

$if[$interactionData[options.data[0].options[0].value]==blowjob;{execute:blowjob}]

$onlyIf[$interactionData[options._subcommand]==nsfw;]
`
}, {
    name: "lewdNeko", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **lewd neko picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/lewd]]
`
}, {
    name: "nsfwAvatar", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **nsfw avatar**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/nsfw_avatar]]
`
}, {
    name: "yuri", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **yuri picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/yuri]]
`
}, {
    name: "trap", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **trap picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/trap]]
`
}, {
    name: "tits", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **tits picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/tits]]
`
}, {
    name: "soloGirl", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **solo girl picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/solo]]
`
}, {
    name: "pussy", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **pussy picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/pussy_jpg]]
`
}, {
    name: "lewdKemo", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **lewd kemo picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/lewdkemo]]
`
}, {
    name: "holo",
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **holo picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/$randomText[holoero;hololewd]]
`
}, {
    name: "kitsune", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **kitsune picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/lewdk]]
`
}, {
    name: "keta", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **keta picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/keta]]
`
}, {
    name: "futanari", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **futanari picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/futanari]]
`
}, {
    name: "hentaiJpg", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **hentai picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/hentai]]
`
}, {
    name: "femdom", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **femdom picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/femdom]]
`
}, {
    name: "eros", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **erotic picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/$randomText[erok;ero;erokemo;eroyuri]]]
`
}, {
    name: "feet", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **feet picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/$randomText[erofeet;feet]]
`
}, {
    name: "cumJpg", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **cum picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/cum_jpg]]
`
}, {
    name: "blowjob", 
    type: 'awaited', 
    code: `
$interactionFollowup[;{newEmbed:{color:$getServerVar[hex]}{title:<a:dp_star6:835142297125519420> Here's your **blowjob picture**~}{image:$getObjectProperty[url]}}]
$interactionDefer[yes]
$createObject[$jsonRequest[https://nekos.life/api/v2/img/blowjob]]
`
}]  
