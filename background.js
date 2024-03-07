browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.includes('youtube.com/shorts')) {
        browser.tabs.executeScript(tabId, {file: 'content.js'});
    }
});
