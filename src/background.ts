// Background service worker: keeps a click counter in chrome.storage.
chrome.runtime.onMessage.addListener((msg: { type?: string }, _sender, sendResponse) => {
  if (msg.type !== 'increment') return false;
  void chrome.storage.local.get({ count: 0 }).then(async ({ count }) => {
    const next = (count as number) + 1;
    await chrome.storage.local.set({ count: next });
    sendResponse({ count: next });
  });
  return true;
});
