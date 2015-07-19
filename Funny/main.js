var red = [0,100,89];
var red1 = [0, 100, 63];
var orange = [40, 100, 60];
var yellow =[230,180,80];
var yellow1 = [ 0, 100, 0];

var green = [75, 100, 40];
var blue = [196, 77, 55];
var blue1=[0, 100, 63]
var purple = [280, 50, 60];

var myName = "B  Flipped  Z";
var letterColors = [red, red1,orange, green, yellow,yellow1,blue,blue1, purple];

if(10 < 3) {
    bubbleShape = 'square';
}
else {
    bubbleShape = 'circle';
}

drawName(myName, letterColors);
bounceBubbles();