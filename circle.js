class Circle{
    constructor(x, y, r){
        this.position = createVector(x, y);
        this.radius = this.r = r;
    }

    dist(point){
        return point.sub(this.position).mag()-this.r;
    }

    draw(){
        push();
        stroke(255);
        fill(255);
        translate(this.position.x, this.position.y);
        ellipse(this.position.x, this.position.y, this.r, this.r);;
        pop();
    }
}
