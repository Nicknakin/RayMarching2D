class SimpleComplex{
    constructor(circle, box, operation, orderBool){
        this.position = circle.position.copy();
        this.circle = circle;
        this.box = box;
        this.operation = operation;
        this.orderBool = orderBool;
        this.shapeOrder = orderBool? [this.circle, this.box]: [this.box, this.circle];
        this.points;
    }

    dist(p){
        return this.operation(this.shapeOrder[0].dist(p), this.shapeOrder[1].dist(p));
    }
    
    draw(graphics){
        if(this.points){
            graphics.fill(255);
            graphics.stroke(255);
            graphics.strokeWeight(1);
            this.points.forEach(p => graphics.point(p.x, p.y));
        } else {
            this.points = [];
            let bigDim = max([this.circle.r].concat(this.box.dimensions.array()));
            for(let y = floor(this.position.y - bigDim/2); y <= this.position.y + bigDim/2; y++){
                for(let x = floor(this.position.x - bigDim/2); x <= this.position.x + bigDim/2; x++){
                    if(this.dist(createVector(x, y)) <= 0)
                        this.points.push(createVector(x, y));
                }
            }
        }
    }
}