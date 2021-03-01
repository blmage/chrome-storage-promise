const callAsAsync = (area, functionName, ...parameters) => new Promise(
  (resolve, reject) => {
    parameters.push(result => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(result);
      }
    });

    area[functionName](...parameters);
  }
);

const ChromeStorage = {
  local: {
    onChanged: listener => chrome.storage.local.onChanged(listener),
    clear: () => callAsAsync(chrome.storage.local, 'clear'),
    get: keys => callAsAsync(chrome.storage.local, 'get', keys),
    getBytesInUse: keys => callAsAsync(chrome.storage.local, 'getBytesInUse', keys),
    remove: keys => callAsAsync(chrome.storage.local, 'remove', keys),
    set: items => callAsAsync(chrome.storage.local, 'set', items),
  },
  managed: {
    onChanged: listener => chrome.storage.managed.onChanged(listener),
    clear: () => callAsAsync(chrome.storage.managed, 'clear'),
    get: keys => callAsAsync(chrome.storage.managed, 'get', keys),
    getBytesInUse: keys => callAsAsync(chrome.storage.managed, 'getBytesInUse', keys),
    remove: keys => callAsAsync(chrome.storage.managed, 'remove', keys),
    set: items => callAsAsync(chrome.storage.managed, 'set', items),
  },
  sync: {
    onChanged: listener => chrome.storage.sync.onChanged(listener),
    clear: () => callAsAsync(chrome.storage.sync, 'clear'),
    get: keys => callAsAsync(chrome.storage.sync, 'get', keys),
    getBytesInUse: keys => callAsAsync(chrome.storage.sync, 'getBytesInUse', keys),
    remove: keys => callAsAsync(chrome.storage.sync, 'remove', keys),
    set: items => callAsAsync(chrome.storage.sync, 'set', items),
  },
};

export default ChromeStorage;
