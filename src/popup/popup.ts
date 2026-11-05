const countEl = document.getElementById('count')!;
const statusEl = document.getElementById('status')!;
const render = (n: number) => (countEl.textContent = `Clicks saved: ${n}`);

void chrome.storage.local.get({ count: 0 }).then(({ count }) => render(count as number));

document.getElementById('go')!.addEventListener('click', async () => {
  const { count } = (await chrome.runtime.sendMessage({ type: 'increment' })) as { count: number };
  render(count);
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab?.id === undefined) return;
  try {
    const { highlighted } = (await chrome.tabs.sendMessage(tab.id, { type: 'highlight' })) as { highlighted: number };
    statusEl.textContent = `${highlighted} headings`;
  } catch {
    statusEl.textContent = 'No content script on this page.';
  }
});
