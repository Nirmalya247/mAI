class mArr {
    constructor(shape, initialValue) {
        if (Array.isArray(shape) && initialValue == null) {
            function getDim(a) {
                var dim = [];
                for (;;) {
                    dim.push(a.length);
                    if (Array.isArray(a[0])) {
                        a = a[0];
                    } else {
                        break;
                    }
                }
                return dim;
            }
            this.shape = getDim(shape);
            this.value = shape.flat();
            return;
        }
        var l = 1;
        for (var i = 0; i < shape.length; i++) {
            l *= shape[i];
        }
        this.shape = shape;
        if (Array.isArray(initialValue)) {
            if (l == 1) this.value = [initialValue.flat()[0]];
            else this.value = new Array(...initialValue.flat()).slice(0, l);
        } else if (typeof(initialValue) == 'number') {
            this.value = new Array(l).fill(initialValue)
        } else if (typeof(initialValue) == 'string' && initialValue == 'rand') {
            this.value = new Array(l);
            for (var i = 0; i < l; i++) {
                this.value[i] = Math.random();
            }
        }
    }
    length() {
        return this.shape[0];
    }
    get(pos) {
        var t = [0];
        var d = 1;
        var shape = [];
        var shapechange = false;
        if (typeof(pos) == 'number') {
            pos = [pos];
        }
        for (var i = pos.length; i < this.shape.length; i++) {
            pos.push('*');
        }
        for (var i = this.shape.length - 1; i >= 0; i--) {
            if (pos[i] == '*') {
                shape.unshift(this.shape[i]);
                shapechange = true;
                var tt = [];
                for (var k = 0; k < this.shape[i]; k++) {
                    for (var j = 0; j < t.length; j++) {
                        tt.push(t[j] + d * k);
                    }
                }
                t = tt;
            } else {
                for (var j = 0; j < t.length; j++) {
                    t[j] += d * pos[i];
                }
            }
            d *= this.shape[i];
        }
        for (var i = 0; i < t.length; i++) {
            t[i] = this.value[t[i]];
        }
        if (shapechange) {
            return new mArr(shape, t);
        }
        return new mArr([1], t);
    }
    getArray(pos) {
        return this.get(pos).print()[0];
    }
    sum() {
        var tPos = [];
        for (var i = 1; i < this.shape.length; i++) tPos.push(this.shape[i]);
        var ret = new mArr(tPos, 0);
        var t = 1;
        for (var i = 0; i < tPos.length; i++) t *= tPos[i];
        for (var i = 0; i < this.value.length; i++) ret.value[i % t] += this.value[i];
        return ret;
    }
    print() {
        var ret = this.value;
        for (var i = this.shape.length - 1; i >= 0; i--) {
            var t1 = [];
            for (var j = 0; j < ret.length; j++) {
                var t2 = [];
                for (var k = 0; k < this.shape[i]; j++, k++) {
                    t2.push(ret[j]);
                }
                j--;
                t1.push(t2);
            }
            ret = t1;
        }
        return ret;
    }
    printStr() {
        return JSON.stringify(this.print());
    }
}
/*
var a = new mArr([2, 3, 3]);
a.value = [1, 2, 3,
           2, 3, 4,
           5, 6, 7,
           2, 3, 4,
           5, 6, 7,
           8, 9, 10];
var b = new mArr([3, 3]);
b.value = [1, 2, 3,
           2, 3, 4,
           5, 6, 7];
console.log(a.get([1, 1, 1]));
console.log(a.sum().value);
console.log(b.get([1, 1]));
console.log(b.sum().print());

console.log(a.print());
*/