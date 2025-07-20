const express=require("express");
const app=express();
const path=require("path");
var hbs=require('hbs');
const port=process.env.PORT||3000;

const publicDirectory=path.join(__dirname,'../public');
app.use(express.static(publicDirectory));
app.set('view engine' ,'hbs');
const viewsDirectory=path.join(__dirname,'../Temp1/views');
app.set('views',viewsDirectory);
const partialsPath=path.join(__dirname,'../Temp1/partials');
hbs.registerPartials(partialsPath);
const geocode=require('./tools/geocode');
const forecast=require('./tools/forecastFile');

app.get('/', (req, res) => {
    res.render('index', { header: "Weather App" }); // Render index.hbs
});
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({error:'you must provide an address'});
    }
    geocode(req.query.address,(error,data)=>{
        if(error){
           return res.send({error});
        }
       forecast(data.latitude,data.longitude,(error,forecastData)=>{
        if(error){
            return res.send({error});
        }
        res.send({
            forecast:forecastData,
            location:req.query.address,
            latitude:data.latitude,
            longitude:data.longitude,
        })
       })
    })
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})