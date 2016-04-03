/// <reference path="../typings/main.d.ts" />

'use strict';

import {
    LCGArg,
    GEN3_ARG,
    GEN4_ARG,
    GEN4_ALTERNATIVE_ARG,
    calcInverseArg
} from '../';
import * as assert from 'power-assert';

function u32(lcgArg: LCGArg): LCGArg {
    return {
        multiplier: lcgArg.multiplier >>> 0,
        increment: lcgArg.increment >>> 0
    };
}

describe('calcInverseArg', () => {
    it('GEN3_INVERSE_ARG', () => {
        assert.deepEqual(u32(calcInverseArg(GEN3_ARG)), {multiplier: 0xeeb9eb65, increment: 0x0a3561a1});
    });

    it('GEN4_INVERSE_ARG', () => {
        assert.deepEqual(u32(calcInverseArg(GEN4_ARG)), {multiplier: 0xeeb9eb65, increment: 0x0a3561a1});
    });

    it('GEN4_ALTERNATIVE_INVERSE_ARG', () => {
        assert.deepEqual(u32(calcInverseArg(GEN4_ALTERNATIVE_ARG)), {multiplier: 0x9638806d, increment: 0x69c77f93});
    });
});