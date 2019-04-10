const request = require("request")
const geocode = require("./utils/geocode")

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



geocode("ss",(err,data)=>{
    console.log(err)
    console.log(data)
})
