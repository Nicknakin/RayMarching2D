class Box{
    constructor(x, y, l, w){
        this.position = createVector(x, y);
        this.dimensions = createVector(l, w);
    }

    dist(point){
        let dx = max(abs(point.x - this.position.x) - this.dimensions.x / 2, 0);
        let dy = max(abs(point.y - this.position.y) - this.dimensions.y / 2, 0);
        return sqrt(dx * dx + dy * dy);
    }

    draw(){
        push();
        rectMode(CENTER);
        stroke(255);
        strokeWeight(1);
        fill(255);
        translate(this.position.x, this.position.y);
        rect(0, 0, this.dimensions.x, this.dimensions.y);
        pop();
    }
}
