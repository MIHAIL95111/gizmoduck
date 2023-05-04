input.onButtonPressed(Button.A, function () {
    i += 1
    if (i == 4) {
        music.stopAllSounds()
        i = 0
    }
    if (i == 1) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
    if (i == 2) {
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
    }
    if (i == 3) {
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    }
})
let GIZMODUCK = 0
let i = 0
basic.showIcon(IconNames.Snake)
neZha.setMotorSpeed(neZha.MotorList.M1, -50)
neZha.setMotorSpeed(neZha.MotorList.M2, -50)
i = 0
basic.forever(function () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 180)
    basic.pause(500)
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
    basic.pause(500)
})
basic.forever(function () {
    GIZMODUCK = PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)
    if (GIZMODUCK >= 5 && GIZMODUCK <= 25) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 100)
        neZha.setMotorSpeed(neZha.MotorList.M2, -100)
        basic.pause(500)
        neZha.setMotorSpeed(neZha.MotorList.M1, -50)
        neZha.setMotorSpeed(neZha.MotorList.M2, -50)
    }
})
basic.forever(function () {
    if (input.lightLevel() < 10) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, true)
    } else {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
    }
})
