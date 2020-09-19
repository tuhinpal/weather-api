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
            "chill": 91,
            "direction": 68,
            "speed": 3.73
        },
        "atmosphere": {
            "humidity": 65,
            "visibility": 10.0,
            "pressure": 29.44,
            "rising": 0
        },
        "astronomy": {
            "sunrise": "5:27 am",
            "sunset": "5:37 pm"
        },
        "condition": {
            "text": "Scattered Thunderstorms",
            "code": 47,
            "temperature": 91
        },
        "pubDate": 1600495200
    },
    "forecasts": [
        {
            "day": "Sat",
            "date": 1600453800,
            "low": 78,
            "high": 92,
            "text": "Thunderstorms",
            "code": 4
        },
        {
            "day": "Sun",
            "date": 1600540200,
            "low": 80,
            "high": 96,
            "text": "Thunderstorms",
            "code": 4
        },
        {
            "day": "Mon",
            "date": 1600626600,
            "low": 79,
            "high": 83,
            "text": "Thunderstorms",
            "code": 4
        },
        {
            "day": "Tue",
            "date": 1600713000,
            "low": 78,
            "high": 86,
            "text": "Thunderstorms",
            "code": 4
        },
        {
            "day": "Wed",
            "date": 1600799400,
            "low": 78,
            "high": 87,
            "text": "Thunderstorms",
            "code": 4
        },
        {
            "day": "Thu",
            "date": 1600885800,
            "low": 79,
            "high": 88,
            "text": "Thunderstorms",
            "code": 4
        },
        {
            "day": "Fri",
            "date": 1600972200,
            "low": 79,
            "high": 89,
            "text": "Thunderstorms",
            "code": 4
        },
        {
            "day": "Sat",
            "date": 1601058600,
            "low": 78,
            "high": 89,
            "text": "Thunderstorms",
            "code": 4
        },
        {
            "day": "Sun",
            "date": 1601145000,
            "low": 78,
            "high": 90,
            "text": "Thunderstorms",
            "code": 4
        },
        {
            "day": "Mon",
            "date": 1601231400,
            "low": 78,
            "high": 91,
            "text": "Cloudy",
            "code": 26
        }
    ]
}
```

<br><br>
### Deploy Your Own:<br>

**NodeJS & Npm are Required.**<br>

```bash
apt install nodejs & npm

git clone https://github.com/cachecleanerjeet/weather-api.git
cd weather-api
npm install
node main.js
```

<br>

**Using Yahoo Weather API, if You want to use own Yahoo API Change Api Details in <tt>main.js</tt>.**

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

