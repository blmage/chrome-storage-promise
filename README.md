# chrome-storage-promise

Promise-based variants of Chrome storage functions.

### Before

```javascript
chrome.storage.local.clear(() => {
  if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log('Storage cleared.');
    }
});

chrome.storage.local.get('example', result => {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError);
  } else {
    console.log(`example = ${result.example}`);
  }
});

chrome.storage.local.getBytesInUse(null, size => {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError);
  } else {
    console.log(`Total storage size: ${size}.`);
  }
});

chrome.storage.local.remove('example', () => {
  if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log('example was removed.');
    }
});

chrome.storage.local.set({ example: 'value' }, () => {
  if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log('example was set.');
    }
});
```

### After

```javascript
import ChromeStorage from 'chrome-storage-promise';

try {
  await ChromeStorage.local.clear();
} catch (error) {
  console.error(error);
}

try {
  const example = await ChromeStorage.local.get('example');
  console.log(example);
} catch (error) {
  console.error(error);
}

try {
  const size = await ChromeStorage.local.getBytesInUse(null);
  console.log(`Total storage size: ${size}.`);
} catch (error) {
  console.error(error);
}

try {
  await ChromeStorage.local.remove('example');
  console.log('example was removed.');
} catch (error) {
  console.error(error);
}

try {
  await ChromeStorage.local.set({ example: 'value' });
  console.log('example was set.');
} catch (error) {
  console.error(error);
}
```
