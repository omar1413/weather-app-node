const forcast = require("./utils/forcast")
const geocode = require("./utils/geocode")

const address = process.argv[2]
if (!address) {
    console.log("please provide an address")

   
}
else {
    geocode(address, (err, data) => {
        if (err) {
            return console.log(err)
        }

        forcast(data.latitude, data.longitude, (err, forcastData) => {
            if (err) {
                return console.log(err)
            }

            console.log(data.location)
            console.log(forcastData.summary)

        })


    })


}