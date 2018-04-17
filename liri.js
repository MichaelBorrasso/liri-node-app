require("dotenv").config();
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var request = require("request");
var fs = require("fs");
var arg1 = process.argv[2];
var arg2 = process.argv[3];
// .slice(3).join(" ")<-----Might need this?
runLiri();
//====================================================================================================================
//TWITTER
function runLiri() {

  if (arg1 === 'my-tweets') {

    var params = { screen_name: 'BorrassoMichael', count: 20 };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
      if (!error)
        for (var i = 0; i < tweets.length; i++) {
          var logTweets = i + 1 + ". Tweet: " + tweets[i].text + "\n    Created: " + tweets[i].created_at;
          console.log(logTweets);
        }
      else {
        console.log(error);
      }});}
        //==================================================================================================================================
        //SPOTIFY
        if(arg1 === 'spotify-this-song'); {
          if (arg2.length < 1) { arg2 = "The Sign Ace of Base" }
          
          else {
            spotify.search({ type: 'track', query: arg2 }, function (err, data) {
              if (err) {
                return console.log('Error occurred: ' + error);
              }
              else {
                console.log(JSON.stringify(data.tracks.items[0].album.artists[0].name));
                console.log(JSON.stringify(data.tracks.items[0].href));
                console.log(JSON.stringify(data.tracks.items[0].name));
                console.log(JSON.stringify(data.tracks.items[0].album.name));
              };

              //==========================================================================================================================================
              //OMDB
              if(arg1 === 'movie-this'); {
                if (arg2.length < 1) {
                  arg2 = "Mr. Nobody";
                };
              }
              // Loop through all the words in the node argument
              // And do a little for-loop magic to handle the inclusion of "+"s
              
              for (var i = 2; i < arg2.length; i++) {

                if (i > 2 && i < arg2.length) {

                  movieName = movieName + "+" + arg2[i];
                }
                else {

                  movieName += arg2[i];
                }
              }

              var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

              // This line is just to help us debug against the actual URL.
              // console.log(queryUrl);

              request(queryUrl, function (error, response, body) {

                // If the request is successful
                if (!error && response.statusCode === 200) {

                  // Parse the body of the site and recover just the imdbRating
                  // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
                  console.log("Title: " + JSON.parse(body).Title);
                  console.log("Year: " + JSON.parse(body).Year);
                  console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                  console.log("Rotten Tomatos: " + JSON.parse(body).Ratings[1].Value);
                  console.log("Country: " + JSON.parse(body).Country);
                  console.log("Language: " + JSON.parse(body).Language);
                  console.log("Plot: " + JSON.parse(body).Plot);
                  console.log("Actors: " + JSON.parse(body).Actors);

                }
              })
            }



            )
          }
        }
      }
    
    
  

