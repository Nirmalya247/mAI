class DenseLayer {
    // input > nodes(node count), activation, inputSize
    constructor(nodes, activation = activation.leakyRelu, inputSize = 0) {
        this.nodes = nodes;
        this.activation = activation;
        this.inputSize = inputSize;

        this.nodeValues = new mArr([nodes], 0);
    }
    setInputSize(n) {
        this.inputSize = n;
        this.w = new mArr([this.nodes, n + 1], 'rand');
    }
    calculateByInput(dataIn) {

    }
}