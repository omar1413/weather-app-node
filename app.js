const forcast = require("./utils/forcast")
const geocode = require("./utils/geocode")

const address = process.argv[2]
if (!address) {
    console.log("please provide an address")

   
}
else {
    geocode(address, (err, {latitude, longitude,location}) => {
        if (err) {
            return console.log(err)
        }

        forcast(latitude, longitude, (err, {summary}) => {
            if (err) {
                return console.log(err)
            }

            console.log(location)
            console.log(summary)

        })


    })


}