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


    var params = { screen_name: 'BorrassoMichael', count: 20 };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) 
            //  var data = [tweets.screen_name, tweets.text, tweets.created_at];
            for (var i = 0; i < tweets.length; i++)
                //  { var date = tweets[i].created_at; }

                // console.log(tweets);
                console.log(tweets);


            //  console.log(JSON.stringify(tweets.screen_name, tweets.text, tweets.created_at, null, 2));
        }


     );

    

