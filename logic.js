let shapes;
let points = [];
let drawShapes = false;
let trail = 1000;

function setup(){
    createCanvas(floor(window.innerWidth*0.99), floor(window.innerHeight*0.95));

    shapes = new Array(50).fill().map(circ => new Circle(random(width), random(height), 20));
    shapes = shapes.concat(shapes.map(sq => new Box(random(width), random(height), random(5, 20), random(5, 20))));

    background(0);
}

function draw(){
    background(0);
    stroke(255);
    noFill();
    let d = 0;
    let totalD = 0;
    p = createVector(width/2, height/2);
    let lastP = p;
    let angle = frameCount*(2*PI)/trail*0.9;
    if(drawShapes){
        angle = createVector(mouseX-p.x, mouseY-p.y).heading();
        shapes.forEach(s => s.draw());
    }
    strokeWeight(2);
    for(let i = 0; i < 256; i++){
        strokeWeight(1);
        d = min(shapes.map(circ => circ.dist(p)).concat([p.x, width-p.x-1, p.y, height-p.y-1]));
        ellipse(p.x, p.y, d*2, d*2);
        lastP = p.copy();
        p = p.add(p5.Vector.fromAngle(angle).mult(d));
        line(p.x, p.y, lastP.x, lastP.y);
        strokeWeight(5);
        point(p.x, p.y);
        totalD += d;
    }

    points.splice(0,0,p);
    points.splice(trail);
    stroke(255);
    strokeWeight(1);
    points.forEach((p, index) => point(p.x, p.y));
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

function mouseClicked(){
    drawShapes = !drawShapes;
}