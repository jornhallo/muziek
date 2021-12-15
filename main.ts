input.onButtonPressed(Button.A, function () {
    music.playMelody("E B C5 A B G A F ", 181)
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(107)
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
basic.showLeds(`
    . . . . .
    # . # . #
    # # . # #
    # . . . #
    # . . . #
    `)
basic.forever(function () {
    soundExpression.happy.play()
    music.setVolume(255)
    basic.showString("muziek")
    led.plotBarGraph(
    2,
    4
    )
})
