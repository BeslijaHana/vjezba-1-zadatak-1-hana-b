let broj_gostiju = 0
input.onButtonPressed(Button.A, function () {
    if (broj_gostiju < 10) {
        broj_gostiju += 1
    } else {
        basic.showString("nema mjesta")
    }
})
input.onButtonPressed(Button.B, function () {
    if (broj_gostiju > 0) {
        broj_gostiju += -1
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    basic.showNumber(broj_gostiju)
})
