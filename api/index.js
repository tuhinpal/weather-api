const OAuth = require('oauth');
module.exports = async(req, res) => {
    var location = req.query.query;
    var header = {
        "X-Yahoo-App-Id": process.env.YAHOO_APP_ID
    };
    var requestweather = new OAuth.OAuth(
        null,
        null,
        process.env.YAHOO_CLIENT_ID,
        process.env.YAHOO_CLIENT_SECRET,
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
                var jsondata = JSON.parse(data);
                res.status(200).send(jsondata)
            }
        }
    );
}
