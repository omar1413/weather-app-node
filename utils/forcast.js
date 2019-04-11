const request = require("request")

const forcast = (lat, long, callback) => {

    const url = "https://api.darksky.net/forecast/fcf3eea7b0b47d7ffb61ed729e8c9c70/"+lat+","+long+"?units=si"
    let msgError = undefined
    let data = undefined
    request({
        url: url,
        json: true
    }, (err, res) => {
        if (err) {
            msgError = "can not access darksky service"
        } else if (res.body.error) {
            msgError = res.body.error
        }
        else {
            const forcastData = res.body
            console.log("Its currently", forcastData.currently.temperature, "degree out. there is a", forcastData.currently.precipProbability + "%", "chance of rain")
            data = {
                temp: forcastData.currently.temperature
            }
        }

        callback(msgError, data)
    })

}

module.exports = forcast