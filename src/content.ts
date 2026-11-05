// Content script: answers "highlight" by colouring headings on the page.
chrome.runtime.onMessage.addListener((msg: { type?: string }, _sender, sendResponse) => {
  if (msg.type !== 'highlight') return false;
  const headings = document.querySelectorAll<HTMLElement>('h1, h2, h3');
  headings.forEach((h) => (h.style.backgroundColor = '#fde68a'));
  sendResponse({ highlighted: headings.length });
  return false;
});
