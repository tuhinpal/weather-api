# Weather-API
#### World's First Unlimited Free Weather API, Made with NodeJS

**Features:**
- Auto Fetch Weather using IP's Location.
- Unlimited API Calls.
- Weather Forecasts (Next Ten Days).
- Fetch Weather From Location (City Name).
- Fetch weather From Geo Location (Lat & Lon).
- Open Source So Deploy Your Own.
- Totally Free of Cost.

### API Calls (Method : GET):

**Automatically fetch weather from IP's Location (Only works if server & client connects directly [No Proxy]):**

```html
https://[YOUR-URL]/auto

##ex
https://tidang.deta.dev/auto
```

**Manually Fetch weather From Location:**

```html
https://[YOUR-URL]/location/{PLACE-NAME}

##ex
https://tidang.deta.dev/location/kolkata
```


**Fetch weather From GEO Location:**

```html
https://[YOUR-URL]/geolocation/{Latitude}/{Longitude}

##ex
https://tidang.deta.dev/geolocation/22.54994/88.371582
```

### Result:

```json
{
    "status": true,
    "weather_info": {
        "location": {
            "city": "Kolkata",
            "region": " WB",
            "woeid": 2295386,
            "country": "India",
            "lat": 22.54994,
            "long": 88.371582,
            "timezone_id": "Asia/Kolkata"
        },
        "current_observation": {
            "wind": {
                "chill": 26,
                "direction": 225,
                "speed": 11
            },
            "atmosphere": {
                "humidity": 63,
                "visibility": 16.1,
                "pressure": 1009,
                "rising": 0
            },
            "astronomy": {
                "sunrise": "5:59 am",
                "sunset": "5:40 pm"
            },
            "condition": {
                "text": "Sunny",
                "code": 32,
                "temperature": 26
            },
            "pubDate": 1614481200
        },
        "forecasts": [
            {
                "day": "Sun",
                "date": 1614450600,
                "low": 20,
                "high": 35,
                "text": "Sunny",
                "code": 32
            },
            # More
        ]
    }
}
```


### Deploy Your Own:

**1. Create an App for Yahoo Weather API 👇**

- Open this Url <br>
<code>https://developer.yahoo.com/weather/</code>
- Go to <code>'Get your API Keys'</code> section and click <code>'Create an App'</code>.
- Give a Name of it.
- Application Type will be <code>'Web Application'</code>.
- Give any URL in <code>'Redirect URI(s)'</code>.
- <code>'API Permissions'</code> will be default.
- Now click on <code>'Create App'</code>.
- You will get <code>'App ID' & 'Client ID' & 'Client Secret'</code> in next page.

**2. Deploy the API:**

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/cachecleanerjeet/weather-api/tree/master)


Deploy to VPS or Local Machine 👇 
*NodeJS & Npm are Required.*

```bash
apt install npm
apt install nodejs

git clone https://github.com/cachecleanerjeet/weather-api.git
cd weather-api

//edit config.js
nano config.js
//after that add your api credentials

npm install
node main.js
```

#### Project is comptible with <code>deta.sh</code> 


### License & Copyright :
- This Project is [Apache-2.0](https://github.com/cachecleanerjeet/weather-api/blob/master/LICENSE) Licensed
- Copyright 2021 by [Tuhin Kanti Pal](https://github.com/cachecleanerjeet)

### Connect :
- [Channel](https://telegram.dog/tprojects)
- [Support Group](https://telegram.dog/t_projects)

