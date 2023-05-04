GIZMODUCK = 0
basic.show_icon(IconNames.SNAKE)
neZha.set_motor_speed(neZha.MotorList.M1, -50)
neZha.set_motor_speed(neZha.MotorList.M2, -50)

def on_forever():
    neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, 180)
    basic.pause(500)
    neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
    basic.pause(500)
basic.forever(on_forever)

def on_forever2():
    global GIZMODUCK
    GIZMODUCK = PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J1,
        PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM)
    if GIZMODUCK >= 5 and GIZMODUCK <= 25:
        neZha.set_motor_speed(neZha.MotorList.M1, 100)
        neZha.set_motor_speed(neZha.MotorList.M2, -100)
        basic.pause(500)
        neZha.set_motor_speed(neZha.MotorList.M1, -50)
        neZha.set_motor_speed(neZha.MotorList.M2, -50)
basic.forever(on_forever2)
