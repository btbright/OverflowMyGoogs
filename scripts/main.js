chrome.omnibox.onInputEntered.addListener(function(text) {
  chrome.tabs.update({url:"http://google.com/search?q=site:stackoverflow.com "+encodeURIComponent(text)});
});