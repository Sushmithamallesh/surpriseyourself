chrome.browserAction.onClicked.addListener(function(activeTab){
  // TODO add reminder maybe some times a day
  // TODO Can I put some analytics here
  // add reminder when you open some other website you shouldnt be opening
 
  chrome.storage.sync.get({
    urls: [
      "https://pocket.co",
      "https://ankiweb.net/decks/"
    ],
    visits: {},
  }, function(settings) {
    var page = settings.urls[Math.floor(Math.random() * settings.urls.length)]


    settings.visits[page] = settings.visits[page] || []
    settings.visits[page].push(new Date())
    chrome.storage.sync.set({ visits: settings.visits })

    chrome.tabs.create({ url: page });
  });
});
