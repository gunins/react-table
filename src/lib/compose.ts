import {IFunction} from "./interfaces";

// @ts-ignore
const pipe = <A>(fn: IFunction<A>, ...fns: IFunction<A>[]) => (param, ...staticArgs): A => fns.reduce((acc, f) => f(acc), fn(param, ...staticArgs));

const compose = <A>(...fns: IFunction<A>[]) => {
    const [head, ...tail] = fns.reverse();
    return pipe<A>(head, ...tail);
};

// @ts-ignore
const pipeAsync = <A>(fn, ...fns) => (param, ...staticArgs) => fns
    .reduce((acc, f) => acc
    // @ts-ignore
        .then((_): Promise<A> => f(_, ...staticArgs)), fn(param, ...staticArgs));

const composeAsync = <A>(...fns: IFunction<Promise<A>>[]) => {
    const [head, ...tail] = fns.reverse();
    return pipeAsync<A>(head, ...tail);
};

export {compose, composeAsync, pipe, pipeAsync}
