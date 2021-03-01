type Keys = string | string[];

interface StorageArea {
    onChanged(listener: (changes: object) => void): void,
    clear(): Promise<void>,
    get(keys: Keys | object | null): Promise<object>,
    getBytesInUse(keys: Keys | null): Promise<number>,
    remove(keys: Keys): Promise<void>,
    set(items: object): Promise<void>,
}

declare var ChromeStorage: {
    local: StorageArea,
    managed: StorageArea,
    sync: StorageArea,
};

export default ChromeStorage;
