mMath = {
    sum: function(a, b) {
        var ret = null;
        var t = a;
        var bigLen = b.value.length;
        if (a.value.length > b.value.length) {
            ret = new mArr(a.shape, a.value);
            t = b;
            bigLen = a.value.length;
        } else ret = new mArr(b.shape, b.value);
        
        for (var i = 0; i < bigLen;) {
            for (var j = 0; j < t.value.length; i++, j++) {
                ret.value[i] += t.value[j];
            }
        }
        return ret;
    },
    sub: function(a, b) {
        var ret = new mArr(a.shape, a.value);
        for (var i = 0; i < a.value.length;) {
            for (var j = 0; j < b.value.length; i++, j++) {
                ret.value[i] -= b.value[j];
            }
        }
        return ret;
    },
    derivative: function(f, data, on, h=0.00000001) {
        var td = {...data}; td[on] += h; return (f(td) - f(data)) / h;
    }
}
/*
function fxy(data) {return data.x ** 2 * data.y ** 2 + data.x * data.y - 3;}
function fxy0(data) {return data[0] ** 2 * data[1] ** 2 + data[0] * data[1] - 3;}
function fdx(data) {return 2 * data.x * Math.pow(data.y, 2) + data.y;}
function fdy(data) {return 2 * data.y * Math.pow(data.x, 2) + data.x;}
*/