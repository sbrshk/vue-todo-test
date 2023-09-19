export function useRandom() {
    const randomizeInt = (max: number) => Math.floor(Math.random() * max);
    return { randomizeInt };
}
