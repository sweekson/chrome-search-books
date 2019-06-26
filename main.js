
(function () {
  function search(selection) {
    chrome.tabs.create({ url: `https://search.books.com.tw/search/query/key/${selection}/cat/all` });
  }

  const menu = {
    id: 'SearchBooks',
    title: 'Search Books : %s',
    contexts: ['selection']
  };

  chrome.contextMenus.create(menu);

  chrome.contextMenus.onClicked.addListener(function (data) {
    if (data.menuItemId === menu.id) search(data.selectionText);
  });
})();