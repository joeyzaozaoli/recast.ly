var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      maxResults: options.max || 5,
      q: options.query,
      type: 'video',
      videoEmbeddable: 'true',
      key: options.key
    },

    success: function(data) {
      console.log('get success', data);
      callback(data.items);
    },

    error: function(data) {
      console.log('get failure', data);
    }
  });
};

window.searchYouTube = searchYouTube;
