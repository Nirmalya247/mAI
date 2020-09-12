// layers> nodes, cost, inShape

class MNN {
    constructor(data) {
        this.layers = data.layers;
    }
}
class ANNLayer {
    // nodes, cost, 
    constructor(data) {
        this.nodes = data.nodes;
        this.cost = data.cost;
    }
}