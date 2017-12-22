    //map
    Array.prototype.mapTest = function (callback, thisArg) {

        var T, A, k;
        var O = Object(this);
        var len = O.length;

        if (thisArg) {
            T = thisArg;
        }
        A = new Array(len);
        k = 0;

        while (k < len) {
            var kValue, mappedValue;
            if (k in O) {
                kValue = O[k];
                mappedValue = callback.call(T, kValue, k, O);
                A[k] = mappedValue;
            }
            k++;
        }

        return A;
    };

    //reduce
    Object.defineProperty(Array.prototype, 'reduceTest', {
        value: function (callback) {
            var o = Object(this);
            var len = o.length;
            var k = 0;
            var value;

            if (arguments.length >= 2) {
                value = arguments[1];
            } else {
                while (k < len && !(k in o)) {
                    k++;
                }
                value = o[k++];
            }

            while (k < len) {
                if (k in o) {
                    value = callback(value, o[k], k, o);
                }
                k++;
            }

            return value;
        }
    });

    //forEach
    Array.prototype.forEachTest = function (callback, thisArg) {
        var T, k;
        var O = Object(this);
        var len = O.length;

        if (arguments.length > 1) {
            T = thisArg;
        }
        k = 0;

        while (k < len) {
            var kValue;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };

    //some
    Array.prototype.someTest = function (fun) {
        var t = Object(this);
        var len = t.length;
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(thisArg, t[i], i, t))
                return true;
        }

        return false;
    };

    //filter
    Array.prototype.filterTest = function (fun) {
        var t = Object(this);
        var len = t.length;
        var res = [];
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        
        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i];
                if (fun.call(thisArg, val, i, t))
                    res.push(val);
            }
        }
        
        return res;
    };