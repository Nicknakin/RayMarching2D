class Box{
    constructor(x, y, l, w){
        this.position = createVector(x, y);
        this.dimensions = createVector(l, w);
    }

    dist(point){
        return point.sub(this.dimensions.sub(this.position));
    }

    draw(){
        push();
        rectMode(CENTER);
        translate(this.position.x, this.position.y);
        rect(this.dimensions.x, this.dimensions.y);
    }
}
