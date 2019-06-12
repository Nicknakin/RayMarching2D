let box, circle;

function setup(){
    createCanvas(window.innerWidth*0.99, window.innerHeight*0.96);

    box = new Box(width/2, height/2, 10, 10);
    circle = new Circle(width/2 + 20, height/2, 10);
    background(0);
}

function draw(){
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            let pos = createVector(y, x);
            let dists = [box.dist(pos), circle.dist(pos)];
            let dist = min(dists);
            console.log(dists, dist);
            if(dist <= 1){
                stroke(255);
                point(x, y);
            }
        }
    }
    noLoop();
}
