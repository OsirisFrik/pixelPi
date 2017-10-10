'use strict'

var pixel = require("node-pixel");
var wpi = require('wiring-pi');

wpi.setup('wpi');
wpi.pinMode(7, wpi.OUTPUT);

var ledOn = false;

var strip = new pixel.Strip({
  board: this,
  strips: [{pin: 7, length: 3}]
});

var p = strip.pixel(0);
p.color('#0000FF');

setInterval(function () {
  if (!ledOn) {
    strip.show();
    ledOn = false;
  } else {
    p.off();
    p.color();
    strip.show()
  }
}, 10000);
