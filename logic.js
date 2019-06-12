let shapes;
let points = [];
let showShapes = false;
let trail = 60*60*5;
let origin;
let shapesImg;

function setup(){
    var canvas = createCanvas(floor(window.innerWidth*0.99), floor(window.innerHeight*0.95));

    shapes = new Array(50).fill().map(circ => {
        let c = new Circle(random(width), random(height), random(50, 100));
        let b = new Box(c.position.x, c.position.y, random(50, 100), random(50,100));
        let rand = Math.random();
        let rand2 = Math.random();
        let op = (rand < 1/3)? intersect: (rand < 2/3)? negate: union
        return new SimpleComplex(c, b, op, round(rand2));
    });

    origin = createVector(width/2, height/2);

    shapesImg = createGraphics(width, height);

    shapes.forEach(s => s.draw(shapesImg));
    shapes.forEach(s => s.draw(shapesImg));

    background(0);
}

function draw(){
    background(0);
    stroke(255);
    noFill();
    for(let i = 0; i < 1; i++){
        let d = Infinity;
        let totalD = 0;
        p = origin.copy();
        let lastP = p;
        let angle = createVector(mouseX-p.x, mouseY-p.y).heading();
        if(showShapes){
            image(shapesImg, 0, 0);
        }
        strokeWeight(2);
        noFill();
        for(let i = 0; i < 256 && d > 0; i++){
            strokeWeight(1);
            d = min(shapes.map(s => s.dist(p)).concat([p.x, width-p.x-1, p.y, height-p.y-1]));
            ellipse(p.x, p.y, d*2, d*2);
            lastP = p.copy();
            p = p.add(p5.Vector.fromAngle(angle).mult(d));
            line(p.x, p.y, lastP.x, lastP.y);
            strokeWeight(5);
            point(p.x, p.y);
            totalD += d;
        }
        points.splice(0,0,p);
    }
    points.splice(trail);
    stroke(255);
    strokeWeight(3);
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

function mouseClicked(){
    origin = createVector(mouseX, mouseY);
}

function shuffle2(arr){
    return arr.map((curr, ind) => {
        let rand = floor(random(arr.length));
        let swapped = arr[rand];
        arr[rand] = curr;
        return swapped;
    });
}

function keyTyped(){
    if(key == "1") showShapes = !showShapes;
}