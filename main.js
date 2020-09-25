//Made by Tuhin
//Visit https://tu.hin.life
//Contact me@mailtuhin.ml

const express = require('express')
const OAuth = require('oauth');
const request = require('request');
const app = express()

// replace these with yahoo weather crediantials (quoted objects)
// you will get it from https://developer.yahoo.com/weather/ for free
var yahoo_weather_app_id = process.env.yahoo_weather_app_id || "app_id";
var yahoo_weather_client_id = process.env.yahoo_weather_client_id || "client_id";
var yahoo_weather_client_secret = process.env.yahoo_weather_client_secret || "Client_Secret";


app.get('/', (req, res) => {
    res.send(`
    Server is Running<br><br>Api Documentation <a href="https://github.com/cachecleanerjeet/weather-api/#readme">Here</a>.<br><br>An Open Source Project by <a href="https://tu.hin.life">Tuhin</a>.`)
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
                'https://weather-ydn-yql.media.yahoo.com/forecastrss?lat=' + lat + '&lon=' + lon + '&format=json&u=c',
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
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=' + location + '&format=json&u=c',
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
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?lat=' + lat + '&lon=' + lon + '&format=json&u=c',
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

app.listen(process.env.PORT || 8080, () => {
    console.log('Listening')
})