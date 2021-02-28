const app = require('express')();
const cors = require('cors');
const axios = require('axios');
const OAuth = require('oauth');
const { APP_ID, CLIENT_ID, CLIENT_SECRET } = require('./config');

const headers = {
    'Access-Control-Allow-Headers': '*',
    'Made-By': 'Tuhin Kanti Pal, https://github.com/cachecleanerjeet',
    'Open-Source': 'https://github.com/cachecleanerjeet/weather-api',
    'x-powered-by': 'Tuhin'
}

app.use(cors({ /* Cors Middleware */
    origin: '*',
    optionsSuccessStatus: 200
}))

app.set('json spaces', 4) /* Format the JSON in a Nice Way */

app.get('/', (req, res) => { /* Route '/' */
    res.status(200).json({
        status: true,
        msg: "Alive"
    })
})

app.get('/auto', async(req, res) => { /* Route '/auto' */
    res.set(headers)
    try {
        var ip_info = (await axios.get(`https://ipapi.co/${req.get('X-Forwarded-For')}/json/`)).data; /* Get the user's IP data */

        new OAuth.OAuth(null, null, CLIENT_ID, CLIENT_SECRET, '1.0', null, 'HMAC-SHA1', null, { "X-Yahoo-App-Id": APP_ID }).get(`https://weather-ydn-yql.media.yahoo.com/forecastrss?lat=${ip_info.latitude}&lon=${ip_info.longitude}&format=json&u=c`, null, null, function(error, result) { /* Get weather data from Loc & Lon*/
            res.status(200).json({
                status: true,
                ip_info,
                weather_info: JSON.parse(result)
            })
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            msg: "Something went wrong"
        })
    }
})

app.get('/location/:loc', async(req, res) => { /* Route '/location/{location}' */
    res.set(headers)
    try {
        var reqLoc = req.params.loc; /* Get the location name from params */

        new OAuth.OAuth(null, null, CLIENT_ID, CLIENT_SECRET, '1.0', null, 'HMAC-SHA1', null, { "X-Yahoo-App-Id": APP_ID }).get(`https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${reqLoc}&format=json&u=c`, null, null, function(error, result) { /* Get weather data from Location */
            res.status(200).json({
                status: true,
                weather_info: JSON.parse(result)
            })
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            msg: "Something went wrong"
        })
    }
})

app.get('/geolocation/:lat/:lon', async(req, res) => { /* Route '/geolocation/{lat}/{lon}' */
    res.set(headers)
    try {
        var reqLat = req.params.lat; /* Get the Latitude from params */
        var reqLon = req.params.lon; /* Get the Longitude from params */

        new OAuth.OAuth(null, null, CLIENT_ID, CLIENT_SECRET, '1.0', null, 'HMAC-SHA1', null, { "X-Yahoo-App-Id": APP_ID }).get(`https://weather-ydn-yql.media.yahoo.com/forecastrss?lat=${reqLat}&lon=${reqLon}&format=json&u=c`, null, null, function(error, result) { /* Get weather data from Loc & Lon*/
            res.status(200).json({
                status: true,
                weather_info: JSON.parse(result)
            })
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            msg: "Something went wrong"
        })
    }
})

module.exports = app /* deta.sh */

app.listen(process.env.PORT || 8080, () => { /* Default Express Listen */
    console.log(`Listening at Port: ${process.env.PORT || 8080}`)
})