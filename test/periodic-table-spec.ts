
/// <reference path="../node_modules/@types/node/index.d.ts" />
/// <reference path="../node_modules/@types/mocha/index.d.ts" />

import * as chai from "chai";
import { AtomicElement, PeriodicTable } from "../src/periodic-table";

const assert = chai.assert;
const dataPath = '../data';
const pt = new PeriodicTable(dataPath);
const data = require(dataPath) as AtomicElement[];

describe('periodic-table', function () {

    describe('#all() Array', function () {
        it('should return the whole dataset', function () {
            assert.equal(pt.all().length, data.length);
            assert.deepEqual(pt.all(), data);
        });
    });

    describe('.elements[name]', function () {
        it('should contain the whole set of elements', function () {
            var names = data.map(function (elem) {
                return elem.name;
            });
            names.forEach(function (name) {
                assert.ok(pt.elements[name]);
            });
        });
    });

    describe('.symbols[symbol]', function () {
        it('should contain the whole set of symbols', function () {
            var symbols = data.map(function (elem) {
                return elem.symbol;
            });
            symbols.forEach(function (symbol) {
                assert.ok(pt.symbols[symbol]);
            });
        });
    });

    describe('.numbers[atomicNumber]', function () {
        it('should contain the whole set of atomic numbers', function () {
            var numbers = data.map(function (elem) {
                return elem.atomicNumber;
            });
            numbers.forEach(function (number) {
                assert.ok(pt.numbers[number]);
            });
        });
    });

});
