interface IFunction<A> {
    (...args: any[]): A;
}

interface IMethods<A> {
    bool: boolean,
    left?: IFunction<A>
}

interface IMethodsPromise<A> {
    bool?: () => Promise<boolean>,
    left?: IFunction<A>
}

interface Ilens<A, B> {
    get(obj: A): B,

    set(value: B, obj: A): A
}
// @ts-ignore
export {IFunction, IMethods, IMethodsPromise, Ilens}
