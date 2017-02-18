chrome.storage.sync.get('focus', function(item){
  if (item.focus === 'On'){
    let newPosts = document.querySelectorAll('[data-testid="fbfeed_story"]');
    for (let i = 0; i < newPosts.length; i++){
      newPosts[i].style.display = 'none';
    };
    window.scrollTo(0,0);
  }
});

//Hides new posts if user scrolls
var observer = new MutationObserver(function(mutations){
  mutations.forEach(function(mutation){
    chrome.storage.sync.get('focus', function(item){
      if (item.focus === 'On'){
        let newPosts = document.querySelectorAll('[data-testid="fbfeed_story"]');
        for (let i = 0; i < newPosts.length; i++){
          newPosts[i].style.display = 'none';
        };
        window.scrollTo(0,0);
      }
    });
  })
})

//Checks for changes in DOM
var body = document.body
observer.observe(body, {
	childList: true,
	characterData: true
});
