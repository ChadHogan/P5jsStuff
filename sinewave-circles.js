let startAngel = 0; 
let angleVel = 0.23;
var r = 250;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(51);
    startAngel += 0.015;
    let angle = startAngel;
    var r = 250;
    for (let x = 0; x <= width; x += 15) {
        let y = map(sin(angle), -1, 1, 100, 200);
        stroke(164);
        strokeWeight(1);
        ellipse(x, y, r);
        angle+= angleVel;
        r *= 0.90
    }
}
