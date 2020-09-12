class Regression {
    // model > f(x, w), w
    constructor(model, w, cost, alpha) {
        this.model = model;
        this.w = w;
        this.cost = cost;
        this.alpha = alpha;
    }
    eval(datax, datay) {
        function JCal(model, w, cost) {
            var tSum = 0;
            for (var i = 0; i < datax.length(); i++) {
                var tY = model(datax.getArray(i), w);
                tSum += cost(datay.getArray(i)[0], tY);
            }
            return tSum /= datax.length();
        }
        var J = JCal(this.model, this.w, this.cost);
        var tW = [...this.w];
        var nW = [...this.w];
        var h = 0.000000001;
        for (var i = 0; i < this.w.length; i++) {
            tW[i] += h;
            nW[i] -= this.alpha * (JCal(this.model, tW, this.cost) - J) / h;
            tW[i] -= h;
        }
        this.w = nW;
    }
    predict(x) {
        return this.model(x, this.w);
    }
}






var tr = new Regression(
    function(x, w) {
        return w[0] + (w[1] * x[0]) + (w[2] * x[1] ** 2);
    },
    [1, 1, 1], cost.leastSquare, 0.0001
);


datax = new mArr([[1, 1], [2, 2], [3, 3], [8, 8]]);
datay = new mArr([2, 3, 4, 9]);

for(var i = 0; i < 1000; i++) tr.eval(datax, datay);
tr.eval(datax, datay);
console.log(tr.w, tr.predict([5, 5]));