import {IFunction} from './interfaces';

const {assign} = Object;
// @ts-ignore
const apply = (...fns) => (...args) => fns.map(fn => fn(...args));
// @ts-ignore
const match = <A>(guard) => (left: IFunction<A>, right: IFunction<A>) => (...args) => (..._) => guard(...args) ? right(..._, ...args) : left(..._, ...args);
// @ts-ignore
const extract = (_) => (...methods) => methods.reduce((acc, method) => assign(acc, {[method]: (...args) => _[method](...args)}), {});

export {apply, match, extract}
