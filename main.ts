let x = 0
let y = 0
for (let index = 0; index < 5; index++) {
    if (y % 2 == 0) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(100)
        }
        y += 1
    } else {
        x = 4
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            x += -1
            basic.pause(100)
        }
        y += 1
    }
}
