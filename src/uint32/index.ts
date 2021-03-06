'use strict';

import "babel-polyfill";
import {
    ILCGArg,
    GEN3_ARG,
    GEN3_INVERSE_ARG,
    GEN4_ARG,
    GEN4_INVERSE_ARG,
    GEN4_ALTERNATIVE_ARG,
    GEN4_ALTERNATIVE_INVERSE_ARG
} from './lcgArg';
import {generator} from './generator';
import {calcInverseArg} from './calcInverseArg';
import {toRandom, toHexString} from './util';

export type ILCGArg = ILCGArg;

export {
    GEN3_ARG,
    GEN3_INVERSE_ARG,
    GEN4_ARG,
    GEN4_INVERSE_ARG,
    GEN4_ALTERNATIVE_ARG,
    GEN4_ALTERNATIVE_INVERSE_ARG,
    generator,
    calcInverseArg,
    toRandom,
    toHexString
};