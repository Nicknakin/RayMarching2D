class Circle{
    constructor(x, y, r){
        this.position = createVector(x, y);
        this.radius = this.r = r;
    }

    dist(point){
        return point.sub(this.position.sub(this.radius));
    }

    draw(){
        push();
        translate(this.position.x, this.position.y);
        ellipse(this.x, this.y, this.r, this.r);;
    }
}
