
/// <reference path="../node_modules/@types/node/index.d.ts" />
/// <reference path="../node_modules/@types/mocha/index.d.ts" />

import * as chai from "chai";
import * as util from '../src/util';

const assert = chai.assert;

describe('periodic-table/util', () => {

    describe('#atomicMass(formula String) Number', () => {
        it('should return the correct atomic mass sum', () => {
            let mass = (1.00794 * 2) + 15.9994;
            let test = util.atomicMass('H2 O');
            assert.equal(test, mass);
        });
    });

});
