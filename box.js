class Box{
    constructor(x, y, l, w){
        this.position = createVector(x, y);
        this.dimensions = createVector(l, w);
    }

    dist(point){
        let temp = point.sub(this.position.copy().sub(this.dimensions));
        return max(temp.array());
    }

    draw(){
        push();
        rectMode(CENTER);
        translate(this.position.x, this.position.y);
        rect(this.dimensions.x, this.dimensions.y);
        pop();
    }
}
