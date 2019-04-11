const forcast = require("./utils/forcast")
const geocode = require("./utils/geocode")





geocode("ismailia",(err,data)=>{
  if(err){
      return console.log(err)
  }

  forcast(data.latitude, data.longitude, (err, forcastData) => {
      if(err){
          return console.log(err)
      }

      console.log(data.location)
      console.log(forcastData.summary)

  })

   
})


