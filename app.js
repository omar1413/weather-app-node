const forcast = require("./utils/forcast")
const geocode = require("./utils/geocode")





// geocode("ss",(err,data)=>{
//     console.log(err)
//     console.log(data)

   
// })


forcast(36.33, 41.28667, (err, data) => {
    console.log(err)
    console.log(data)
})


