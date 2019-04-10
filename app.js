const request = require("request")

const url = "https://api.darksky.net/forecast/fcf3eea7b0b47d7ffb61ed729e8c9c70/37.8267,-122.4233?units=si"

request({
    url: url,
    json: true
}, (err, res) => {
    if(err){
        console.log("can not access darksky service")
    }else if(res.body.error){
        console.log(res.body.error)
    }
    else  {
        const forcastData = res.body
        console.log("Its currently", forcastData.currently.temperature, "degree out. there is a", forcastData.currently.precipProbability + "%", "chance of rain")
    }
})



const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/ismailia.json?access_token=pk.eyJ1Ijoib21hcjE0IiwiYSI6ImNqdTlwd3ZiMzBsdjYzeXBkMmJ4cDR0dzYifQ.Ghlv7MCv88FUH722XgmLjA"

request({url: url2, json:true}, (err, res) => {
    if(err){
        console.log("can not access geocode service")
    }
    else if(res.body.message){
        console.log(res.body.message)

    }else if(res.body.features.length === 0){
        console.log("there is no place match with your serach")

    }
    else{
        const geocodeData = res.body
        const lat = geocodeData.features[0].center[0]
        const long = geocodeData.features[0].center[1]

        console.log("lat: " + lat + " long: " + long)
    }
})
