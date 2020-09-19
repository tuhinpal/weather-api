//Made by Tuhin
//Visit https://tu.hin.life
//Contact me@mailtuhin.ml

const express = require('express')
var OAuth = require('oauth');
var request = require('request');
const app = express()
const port = 3000

app.get('/', (req, res) => {

    // fetching ip
    var options = {
        'method': 'GET',
        'url': 'https://pt-ip.tk/'
    };
    request(options, function(error, response) {
        if (error) throw new Error(error);
        var ip = (response.body);

        //fetching location
        var options = {
            'method': 'GET',
            'url': 'https://tools.keycdn.com/geo.json?host=' + (ip)
        };
        request(options, function(error, response) {
            if (error) throw new Error(error);
            var loc = JSON.parse(response.body);
            var lon = loc.data.geo.longitude;
            var lat = loc.data.geo.latitude;

            //fetching weather
            var header = {
                //replace with your yahoo app id
                "X-Yahoo-App-Id": "CKcKjnRA"
            };
            var requestweather = new OAuth.OAuth(
                null,
                null,
                //replace with your yahoo client id
                'dj0yJmk9U1NhZFdvcjRDQ2FQJmQ9WVdrOVEwdGpTMnB1VWtFbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWEz',

                //replace with your yahoo client secret
                'f65742b96a3f3b7efd505622b049dcda776590f6',
                '1.0',
                null,
                'HMAC-SHA1',
                null,
                header
            );
            requestweather.get(
                'https://weather-ydn-yql.media.yahoo.com/forecastrss?lat=' + lat + '&lon=' + lon + '&format=json',
                null,
                null,
                function(err, data, result) {
                    if (err) {
                        res.send('An Error Occurred' + (err))
                    } else {
                        res.send(data)

                    }
                }
            );
        });
    });
    res.status(200);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/json');
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Open-Source', 'https://github.com/cachecleanerjeet/weather-api');
})
app.listen(port, () => {
    console.log('Listening on Port 3000')
})