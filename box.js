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

    distRot(point, theta){
        let p = point.copy();
        const rel = p.sub(this.position);
        const rotx = rel.x*cos(-theta) - rel.y*sin(-theta)
        const roty = rel.x*sin(-theta) + rel.y*cos(-theta)
        const dx = max(abs(rotx) - this.dimensions.x / 2, 0);
        const dy = max(abs(roty) - this.dimensions.y / 2, 0);
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
