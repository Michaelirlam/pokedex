export type CacheEntry<T> = {
    createdAt: number;
    val: T
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalID: NodeJS.Timeout | undefined = undefined;
    #interval: number; 

    constructor (number: number) {
        this.#interval = number;
        this.#startReapLoop();
    }

    add<T>(key: string, val: T) {
        this.#cache.set(
            key,
            { createdAt: Date.now(), val }
        );
    }

    get<T>(key: string): T | undefined {
        return this.#cache.get(key)?.val ?? undefined;
    }

    #reap() {
        for (const [key, value] of this.#cache.entries()) {
            if ((Date.now() - value.createdAt) >= this.#interval) {
                this.#cache.delete(key)
            }
        };
    }

    #startReapLoop() {
        const func = () => this.#reap();
        this.#reapIntervalID = setInterval(func, this.#interval);
    }

    stopReapLoop() {
        clearInterval(this.#reapIntervalID);
        this.#reapIntervalID = undefined;
    }
}