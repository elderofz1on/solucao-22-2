timeanddate.onMinuteChanged(function () {
    HackbitOLEDDisplay.clear()
    timeanddate.numericTime(function (hour, minute, second, month, day, year) {
        HackbitOLEDDisplay.writeStringNewLine("" + day + "-" + month + "-" + year)
    })
    HackbitOLEDDisplay.writeStringNewLine(timeanddate.time(timeanddate.TimeFormat.HHMM24hr))
    hackbitmotors.StepperDegree(hackbitmotors.Steppers.M2, 6)
    hackbitmotors.MotorStopAll()
})
timeanddate.setDate(10, 26, 2021)
timeanddate.setTime(8, 16, 0, timeanddate.MornNight.PM)
HackbitOLEDDisplay.init(128, 64)
HackbitOLEDDisplay.clear()
