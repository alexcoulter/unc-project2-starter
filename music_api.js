var axios = require("axios");

var genre = "";
// genre = "indie";

getPopularArtists(genre);
//top artists
function getPopularArtists() {
  var queryURL =
    "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=eb468e00eb576b259b24d5682bafa312&format=json";
  if (genre) {
    queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists";
    queryURL += "&tag=" + genre;
    queryURL += "&api_key=eb468e00eb576b259b24d5682bafa312&format=json";
  }

  axios({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    if (genre) {
      var res = response.data.topartists.artist;
    } else {
      var res = response.data.artists.artist;
    }
    // console.log(res);
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].name);
      console.log(res[i].url);
    }
  });
}

//
//get artist info
var artist = "destroyer";
artistInfo(artist);

function artistInfo(artist) {
  var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo";
  queryURL += "&artist=" + artist;
  queryURL += "&api_key=eb468e00eb576b259b24d5682bafa312&format=json";

  axios({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var res = response.data.artist;
    // console.log(res);
    console.log(res.url);
    console.log(res.bio.summary);
    console.log(res.similar.artist);
  });
}
