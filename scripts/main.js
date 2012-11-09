chrome.omnibox.onInputEntered.addListener(function(text) {
  chrome.tabs.update({url:"http://google.com/#q=site:stackoverflow.com "+encodeURIComponent(text)});
});