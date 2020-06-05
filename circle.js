class Circle{
    constructor(x, y, r){
        this.position = createVector(x, y);
        this.radius = this.r = r;
    }

    dist(point){
        return point.dist(this.position)-this.r/2;
    }

    draw(){
        push();
        stroke(255);
        strokeWeight(1);
        fill(255);
        translate(this.position.x, this.position.y);
        ellipse(0, 0, this.r, this.r);;
        pop();
    }
}
