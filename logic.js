let circles;
let points = [];

function setup(){
    createCanvas(800, 800);

    circles = new Array(50).fill().map(circ => new Circle(random(width), random(height), random(10, 20)));

    background(0);
}

function draw(){
    background(0);
    stroke(255);
    noFill();
    let angle = frameCount/100;
    let rayShooter = createVector(mouseX, mouseY);
    let d = 0;
    let totalD = 0;
    let p = createVector(width/2, width/2);
    circles.forEach(c => c.draw());
    for(let i = 0; i < 64; i++){
        d = min(circles.map(circ => circ.dist(p)));
        console.log(d);
        // p.add(p5.Vector.fromAngle(angle).mult(d));
        totalD += d;
        ellipse(p.x, p.y, d, d);
    }

    points.push(p);
    points.splice(50);
    stroke(255);
    points.forEach(p => point(p.x, p.y));
}

function union(a, b){
    return min(a, b);
}

function intersect(a, b){
    return max(a,b);
}

function negate(a, b){
    return max(a, -b);
}
