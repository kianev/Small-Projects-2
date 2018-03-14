var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, "any", false];
var ColorRed = 0;
var ColorBlue = 1;
var ColorGreen = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
console.log(backgroundColor);
