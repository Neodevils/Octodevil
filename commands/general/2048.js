module.exports = {
  name: "2048",
  code: `
  $djsEval[const { TwoZeroFourEight } = require("leaf-utils");

await TwoZeroFourEight({
    message: message,
    slash_command: false,
    time: 300000,
    embed: {
        title: "2048",
        color: "#F38E05",
    },
    left: {
        label: " ",
        style: "SECONDARY",
        emoji: "◀️",
    },
    up: {
        label: " ",
        style: "PRIMARY",
        emoji: "⬆️",
    },
    down: {
        label: " ",
        style: "PRIMARY",
        emoji: "⬇️",
    },
    right: {
        label: " ",
        style: "SECONDARY",
        emoji: "▶️",
    },
    winMessage: "GG, You win",
    loseMessage: "You lose",
    authorOnly: "Only <@{{author}}> can use this button!",
});yes]
  `
}