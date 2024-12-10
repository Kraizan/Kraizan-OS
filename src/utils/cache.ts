interface CacheItem<T> {
  data: T;
  timestamp: number;
}

const ONE_DAY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export const getCachedData = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (!item) return null;

  const cachedItem: CacheItem<T> = JSON.parse(item);
  const now = new Date().getTime();

  if (now - cachedItem.timestamp > ONE_DAY) {
    localStorage.removeItem(key);
    return null;
  }

  return cachedItem.data;
};

export const setCachedData = <T>(key: string, data: T): void => {
  const cacheItem: CacheItem<T> = {
    data,
    timestamp: new Date().getTime(),
  };
  localStorage.setItem(key, JSON.stringify(cacheItem));
}; 