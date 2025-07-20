 console.log("hello");
 
 let form = document.getElementById('form1');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    weatherFun();
    form.reset();
})
const errorF = document.getElementById('error');
const locationF = document.getElementById('location');
const forecastF = document.getElementById('forecast');
const longitude=document.getElementById('longitude');
const latitude=document.getElementById('latitude');

let weatherFun=async ()=>{
    try{
         const address = document.getElementById('address').value;
         const res=await fetch('http://localhost:3000/weather?address='+address);
         const data=await res.json();
         console.log(data);
         if(data.error){
                errorF.innerText = data.error;
                 errorF.style.color = "white";
               errorF.style.backgroundColor = "#b8758bff";
                   errorF.style.padding = "15px 5px";
             errorF.style.fontSize = "1.2em";
             errorF.style.margin = "10px 0";
             errorF.style.borderRadius="10px";
                
            locationF.innerText = ''
            forecastF.innerText = ''
         }
         else {
            locationF.style.color="white";
            locationF.style.color = "white";
             locationF.style.backgroundColor = "#b8758bff";
             locationF.style.padding = "15px 5px";
             locationF.style.fontSize = "1.2em";
             locationF.style.margin = "10px 0";
              locationF.style.borderRadius="10px";
            locationF.innerText = " Country is "+data.location;
            forecastF.style.color = "white";
             forecastF.style.backgroundColor = "#b8758bff";
             forecastF.style.padding = "15px 5px";
             forecastF.style.fontSize = "1.2em";
             forecastF.style.margin = "10px 0";
              forecastF.style.borderRadius="10px";
            forecastF.innerText = "forecast is "+data.forecast;

            
              longitude.style.color="white";
              longitude.style.backgroundColor = "#b8758bff";
             longitude.style.padding = "15px 5px";
             longitude.style.fontSize = "1.2em";
             longitude.style.margin = "10px 0";
            longitude.style.borderRadius="10px";
            longitude.innerText= "longitude is "+data.longitude;
              
            latitude.innerText=  "latitude is "+data.latitude;
               latitude.style.color="white";
              latitude.style.backgroundColor = "#b8758bff";
            latitude.style.padding = "15px 5px";
            latitude.style.fontSize = "1.2em";
            latitude.style.margin = "10px 0";
             latitude.style.borderRadius="10px";
            errorF.innerText = ''
            errorF.style=none;


        }

    }
    catch(e){
        console.log(e)
    }
}

