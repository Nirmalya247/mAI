activation = {
    sigmoid: function(x) {
        return 1 / (1 + Math.exp(-x));
    },
    tanh: function(x) {
        return Math.tanh(x);
    },
    relu: function(x) {
        return Math.max(0, x);
    },
    leakyRelu: function(x) {
        return Math.max(0.1 * x, x);
    },
    elu: function(x) {
        return x >= 0 ? x : 0.01 * (Math.exp(x) - 1);
    }
}