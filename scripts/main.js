chrome.omnibox.onInputEntered.addListener(function(text) {
  //var tab = ce.getActiveTab();
  chrome.tabs.update({url:"http://google.com/#q=site:stackoverflow.com "+text});
});