# Weather-API<br>
#### World's First Unlimited Free Weather API, Made with NodeJS<br><br>

**Features:**<br>
- Auto Fetch Weather using IP's Location.<br>
- Unlimited API Calls.<br>
- Weather Forecasts (Next Ten Days).<br>
- Fetch Weather From Location (City Name).<br>
- Fetch weather From Geo Location (Lat & Lon).<br>
- Low Latency.<br>
- Open Source So Deploy Your Own.<br>
- Totally Free of Cost.<br><br>

### API Calls (Method : GET):<br><br>

**Automatically fetch weather from IP's Location (Only works if server & client connects directly [No Proxy]):**<br>

```html
https://[YOUR-URL]/auto
##ex
https://weather.thetuhin.com/auto
```

**Manually Fetch weather From Location:**<br>

```html
https://[YOUR-URL]/loc?query={PLACE-NAME}
##ex
https://weather.thetuhin.com/loc?query=bolpur
```


**Fetch weather From GEO Location:**<br>

```html
https://[YOUR-URL]/geolocation?lat={Latitude}&lon={Longitude}
##ex
https://weather.thetuhin.com/?lat=23.66188&lon=87.697304
```

### Result:

```json
{
  "location": {
    "city": "Bolpur",
    "region": " WB",
    "woeid": 2289871,
    "country": "India",
    "lat": 23.66188,
    "long": 87.697304,
    "timezone_id": "Asia/Kolkata"
  },
  "current_observation": {
    "wind": {
      "chill": 30,
      "direction": 203,
      "speed": 12
    },
    "atmosphere": {
      "humidity": 80,
      "visibility": 16.1,
      "pressure": 997,
      "rising": 0
    },
    "astronomy": {
      "sunrise": "5:29 am",
      "sunset": "5:31 pm"
    },
    "condition": {
      "text": "Thunderstorms",
      "code": 4,
      "temperature": 30
    },
    "pubDate": 1601020800
  },
  "forecasts": [
    {
      "day": "Fri",
      "date": 1600972200,
      "low": 26,
      "high": 30,
      "text": "Thunderstorms",
      "code": 4
    },
    {
      "day": "Sat",
      "date": 1601058600,
      "low": 25,
      "high": 30,
      "text": "Thunderstorms",
      "code": 4
    },
        ##More
    ]
}
```

<br><br>
### Deploy Your Own:<br><br>

**1. Create an App for Yahoo Weather API 👇**

- Open this Url<br>
<tt>https://developer.yahoo.com/weather/</tt>
- Go to <tt>'Get your API Keys'</tt> section and click <tt>'Create an App'</tt>.
- Give a Name of it.
- Application Type will be <tt>'Web Application'</tt>.
- Give any URL in <tt>'Redirect URI(s)'</tt>.
- <tt>'API Permissions'</tt> will be default.
- Now click on <tt>'Create App'</tt>.
- You will get <tt>'App ID' & 'Client ID' & 'Client Secret'</tt> in next page.<br><br>

**2. Deploy the API:**<br><br>
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/cachecleanerjeet/weather-api/tree/master)<br><br>

Deploy to VPS or Local Machine 👇 <br><br>
*NodeJS & Npm are Required.*<br>

```bash
apt install npm
apt install nodejs

git clone https://github.com/cachecleanerjeet/weather-api.git
cd weather-api

//edit main.js
nano main.js
//after that add your api credentials

npm install
node main.js
```

<br>

### Using this API:
- [Weather BOT](https://t.me/weatheroftoday_bot "weather-bot") - [Github](https://github.com/cachecleanerjeet/weather-bot "Github")

*Impliment this API on your Project  & send a message [here](https://t.me/t_projects "here") to get featured in this section.*
<br>

<br><br>
## Star this Repo if you Liked it ⭐⭐⭐

<br><br>
<p align="center"> <b>My Website & Social</b></p>
<br>
<p align="center">
 
 <a href="https://tu.hin.life">
    <img alt="Website" width="30px" src="https://firebasestorage.googleapis.com/v0/b/webtuhin.appspot.com/o/githubstatic%2Fwebsite.svg?alt=media&token=5c3ea7e0-d4f7-4566-b78a-bdee6c65f03e" />
  </a>  
..
<a href="https://fb.me/jeeetpaul">
    <img alt="Facebook" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/facebook.svg" />
  </a>  
..
  <a href="https://www.instagram.com/jeeetpaul">
    <img alt="Instagram" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/instagram.svg" />
  </a>
..
  <a href="https://www.youtube.com/channel/UCa4FMtLpYcOBtjKOZgzTFNA">
    <img alt="YouTube" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/youtube.svg" />
  </a>
..
  <a href="https://blog.iamtuhin.ga">
    <img alt="Blogger" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/blogger.svg" />
  </a>
  
</p>

