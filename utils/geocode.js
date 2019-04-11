const request = require("request")

const geocode = (address, callback) =>{
    const token = "pk.eyJ1Ijoib21hcjE0IiwiYSI6ImNqdTlwd3ZiMzBsdjYzeXBkMmJ4cDR0dzYifQ.Ghlv7MCv88FUH722XgmLjA"
    const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=" + token

    request({url: geocodeUrl, json:true}, (err, res)=>{

        let errorMsg = undefined
        let data = undefined

        if(err){
            errorMsg = "unable to connect to the location service"
        }else if(res.body.message){
            errorMsg = res.body.message
        } else if(res.body.features.length == 0){
            errorMsg = "there is no locations match your search"
        }else{
            geocodeData = res.body
            data = {
                latitude: geocodeData.features[0].center[1],
                longitude: geocodeData.features[0].center[0],
                location:geocodeData.features[0].place_name 
            }
        }

        callback(errorMsg, data)
    })
}


module.exports = geocode