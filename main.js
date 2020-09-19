//Made by Tuhin
//Visit https://tu.hin.life
//Contact me@mailtuhin.ml

const express = require('express')
var OAuth = require('oauth');
var request = require('request');
const app = express()
const port = 8080

// replace these with yahoo weather crediantials
// you will get it from https://developer.yahoo.com/weather/ for free
var yahoo_weather_app_id = "CKcKjnRA";
var yahoo_weather_client_id = "dj0yJmk9U1NhZFdvcjRDQ2FQJmQ9WVdrOVEwdGpTMnB1VWtFbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWEz";
var yahoo_weather_client_secret = "f65742b96a3f3b7efd505622b049dcda776590f6";


app.get('/', (req, res) => {
    res.send(`<html><title>Weather API</title><body><h1 style="text-align: center;">Server is Running</h1><br><p style="text-align: center;"><strong>Automatically fetch weather from IP's Location</strong><br /><strong>Method: GET</strong><br /><tt>https://[YOUR-URL]/auto</tt></p><br><p style="text-align: center;"><strong>Fetch weather From Location</strong><br /><strong>Method: GET</strong><br /><tt>https://[YOUR-URL]/loc?query={<strong>PLACE-NAME</strong>}</tt></p><p style="text-align: center;">ex.</p><p style="text-align: center;"><tt>https://[YOUR-URL]/loc?query=bolpur</tt></p><br><p style="text-align: center;"><strong>Fetch weather From GEO Location</strong><br /><strong>Method: GET</strong><br /><tt>https://[YOUR-URL]/geolocation?lat={<strong>Latitude</strong>}&amp;lon={<strong>Longitude</strong>}</tt></p><p style="text-align: center;">ex.</p><p style="text-align: center;"><tt>https://[YOUR-URL]/geolocation?lat=23.66188&amp;lon=87.697304</tt></p><br><br><p style="text-align: center;"><strong>An Open Source Project by</strong></p><p style="text-align: center;"><strong><a title="TUHIN KANTI PAL" href="https://tu.hin.life">TUHIN KANTI PAL</a></strong></p><p style="text-align: center;"><strong>Github&nbsp;Repository</strong></p><p style="text-align: center;"><strong><a href="https://github.com/cachecleanerjeet/weather-api">https://github.com/cachecleanerjeet/weather-api</a></strong></p><br></body></html>`)
})

// automatically fetch from ip
app.get('/auto', (req, res) => {

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
                "X-Yahoo-App-Id": (yahoo_weather_app_id)
            };
            var requestweather = new OAuth.OAuth(
                null,
                null,
                (yahoo_weather_client_id),
                (yahoo_weather_client_secret),
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


// manually fetch from location name
app.get('/loc', (req, res) => {
    let location = req.query.query;
    var header = {
        "X-Yahoo-App-Id": (yahoo_weather_app_id)
    };
    var requestweather = new OAuth.OAuth(
        null,
        null,
        (yahoo_weather_client_id),
        (yahoo_weather_client_secret),
        '1.0',
        null,
        'HMAC-SHA1',
        null,
        header
    );
    requestweather.get(
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=' + location + '&format=json',
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
    res.status(200);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/json');
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Open-Source', 'https://github.com/cachecleanerjeet/weather-api');
})

// manually fetch from geolocation
app.get('/geolocation', (req, res) => {
    let lat = req.query.lat;
    let lon = req.query.lon;
    var header = {
        "X-Yahoo-App-Id": (yahoo_weather_app_id)
    };
    var requestweather = new OAuth.OAuth(
        null,
        null,
        (yahoo_weather_client_id),
        (yahoo_weather_client_secret),
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
    res.status(200);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/json');
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Open-Source', 'https://github.com/cachecleanerjeet/weather-api');
})

app.listen(port, () => {
    console.log('Listening on Port 8080')
})