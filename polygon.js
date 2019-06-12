class Polygon{
    constructor(x, y, r, numSides){
        this.position = createVector(x, y);
        this.r = r;
        this.numSides = numSides;
        this.box = new Box(x, y, r, r*tan(PI/numSides));
    }

    dist(p){
        return min(new Array(ceil(this.numSides/2)).fill().map((s, index) => {
            return this.box.distRot(p.copy(), index*2*PI/this.numSides);
        }));
    }
}