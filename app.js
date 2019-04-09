const request = require("request")

const url = "https://api.darksky.net/forecast/fcf3eea7b0b47d7ffb61ed729e8c9c70/37.8267,-122.4233?units=si"

request({
    url: url,
    json: true
}, (err, res) => {
    if (!err) {
        const forcastData = res.body
        //console.log("Its currently", forcastData.currently.temperature, "degree out. there is a", forcastData.currently.precipProbability + "%", "chance of rain")
    }
})



const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoib21hcjE0IiwiYSI6ImNqdTlwd3ZiMzBsdjYzeXBkMmJ4cDR0dzYifQ.Ghlv7MCv88FUH722XgmLjA"

request({url: url2, json:true}, (err, res) => {
    if(!err){
        const geocodeData = res.body
        const lat = geocodeData.features[0].center[0]
        const long = geocodeData.features[0].center[1]

        console.log("lat: " + lat + " long: " + long)
    }
})
