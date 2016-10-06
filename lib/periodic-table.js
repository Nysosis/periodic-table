'use strict';
var PeriodicTable = (function () {
    function PeriodicTable(dataPath) {
        var data = require(dataPath);
        this.all = function () { return data; };
        this.elements = data.reduce(function (agg, element) {
            agg[element.name] = element;
            return agg;
        }, {});
        this.symbols = data.reduce(function (agg, element) {
            agg[element.symbol] = element;
            return agg;
        }, {});
        this.numbers = data.reduce(function (agg, element) {
            agg[element.atomicNumber] = element;
            return agg;
        }, {});
    }
    return PeriodicTable;
}());
exports.PeriodicTable = PeriodicTable;
;
