var five = require("johnny-five");
var SerialPort = require('serialport');

/*
* Rename boards or ports
*/
var ports = [
  { id: "A", port: "/dev/ttyACM0" },
  { id: "B", port: "/dev/ttyUSB0" },
  { id: "C", port: "/dev/ttyUSB1" }
];

/*
* Start boards by blinking LED on pin 13, each have different blink time
*/
new five.Boards(ports).on("ready", function() {

  console.log("READY!");

  var led0 = new five.Led({
        pin: 13,
        board: this.byId("A")
      });

  var led1 = new five.Led({
        pin: 13,
        board: this.byId("B")
      });

  var led2 = new five.Led({
        pin: 13,
        board: this.byId("C")
      });

  /* blinking times */
  led0.blink(1000);
  led1.blink(2000);
  led2.blink(3000);
});