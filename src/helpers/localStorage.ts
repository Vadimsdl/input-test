interface ILocalStorageItem<T> {
  key: string;
  value: T;
}

interface ILocalStorageKey {
  key: string;
}

export const setLocalStorageItem = ({
  key,
  value,
}: ILocalStorageItem<any>): void => {
  const stringify = JSON.stringify(value);
  localStorage.setItem(key, stringify);
};

export const setLocalStorageItems = (arr: ILocalStorageItem<any>[]): void => {
  arr.forEach((item) => {
    setLocalStorageItem({ key: item.key, value: item.value });
  });
};

export const removeLocalStorageItem = ({ key }: ILocalStorageKey): void =>
  localStorage.removeItem(key);

export const getLocalStorageItem = <T>({ key }: ILocalStorageKey): T => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const getLocalStorageItems = (arr: ILocalStorageKey[]): string[] =>
  arr.map((item) => getLocalStorageItem({ key: item.key }));
