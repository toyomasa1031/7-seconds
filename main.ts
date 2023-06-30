input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    score = Math.abs(elapsed - 3000)
    if (score < 200) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1886, 5000, 255, 255, 750, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.Happy)
    } else if (score == 0) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(100)
    basic.clearScreen()
})
let score = 0
let elapsed = 0
let start = 0
start = 0
