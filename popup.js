document.getElementById("convertBtn").addEventListener("click", function() {
    browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        let tab = tabs[0];
        if (tab.url.includes("/shorts/")) {
            const newUrl = tab.url.replace("/shorts/", "/watch?v=");
            browser.tabs.update(tab.id, { url: newUrl });
        }
    });
});
