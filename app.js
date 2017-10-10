'use strict'

pixel = require("node-pixel");
five = require("johnny-five");

var board = new five.Board(opts);
var strip = null;

board.on("ready", function() {

  strip = new pixel.Strip({
    board: this,
    controller: "FIRMATA",
    strips: [
      {
        pin: 7,
        length: 3
      }
    ], // this is preferred form for definition
    gamma: 2.8, // set to a gamma that works nicely for WS2812
  });

  strip.on("ready", function() {
    strip.pixel(0).color("#000");
    strip.pixel(1).color("red");
    strip.shift(1, pixel.FORWARD, true);
    strip.pixel(1).color; // will now be nothing
    strip.pixel(2).color; // will now be red.
  });
});
