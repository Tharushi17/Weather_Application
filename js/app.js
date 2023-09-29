
const successCallBack = (position)=>{
    console.log(position);
    setLocationInMap(position.coords.lattitude, position.coords.longitude);
}
const errorCallBack = (error) =>{
    console.log(error);
}

getLocation();

function getLocation(){
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
}


//----------------- map view ------------------------

var map = L.map('map').setView([30.38847122506806, -91.17673785681582], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([0,0]).addTo(map);


function setLocationInMap( ltd, lng){
    marker.setLatLng([ ltd,lng]).update();
    map.setView([ltd,lng],13)

}




//------- today ----------------

function searchOnAction(){

        const city = $("#cityName");
        const time = $("#time");
        const temp = $("#temp");
        const temperature = $("#temperature");
        const humidity = $("#humidity");
        const uv = $("#uv");
        const wind = $("#wind");
        const condition = $('#condition');
        const alert = $("#alert");

        const icon = $("#icon");

        const search = document.getElementById("searchField");
        const key = "841e4f34d3e84f18aa7144506232109";
        const n = search.value;

        $.ajax({
    
            method : "GET",
            url : `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${n}`,
                
            success : (resp) =>{
                console.log(resp);
            }

        });


    if(search != null){
        $.ajax({
            method : "GET",
            url : `https://api.weatherapi.com/v1/current.json?key=841e4f34d3e84f18aa7144506232109&q=${n}`,
            
            success : (resp) => {
                console.log(resp);
                city.text(resp.location.name);
                temp.text(resp.current.temp_c);
                temperature.text(resp.current.temp_c);
                humidity.text(resp.current.humidity);
                uv.text(resp.current.uv);
                wind.text(resp.wind_mph);

                condition.text(resp.current.condition.text);
                time.text(resp.location.localtime);
                icon.attr("src", resp.current.condition.icon);


                setLocationInMap(resp.location.lat, resp.location.lon);

            }
        });
    }else{
        alert("Please enter a valid City");
    }
    
}

function historyBtnOnAction(){
    location.href="history.html";
}

function futureBtnOnAction(){
    location.href="future.html";
}






//------------------ hisory ----------------------------------

function searchHistory(){

    const city = $("#cityName");
    const date = $("#date");

    const humid1 = $("#humid1");
    const uv1 = $("#uv1");
    const wind1 = $("#wind1");
    const icon1 = $("#icon1");
    const temp1 = $("#temp1");
    const day1 = $("#day1");
    const condition1 = $("#condition1");


    const humid2 = $("#humid2");
    const uv2 = $("#uv2");
    const wind2 = $("#wind2");
    const icon2 = $("#icon2");
    const temp2 = $("#temp2");
    const day2 = $("#day2");
    const condition2 = $("#condition2");


    const humid3 = $("#humid3");
    const uv3 = $("#uv3");
    const wind3 = $("#wind3");
    const icon3 = $("#icon3");
    const temp3 = $("#temp3");
    const day3 = $("#day3");
    const condition3 = $("#condition3");


    const humid4 = $("#humid4");
    const uv4 = $("#uv4");
    const wind4 = $("#wind4");
    const icon4 = $("#icon4");
    const temp4 = $("#temp4");
    const day4 = $("#day4");
    const condition4 = $("#condition4");


    const humid5 = $("#humid5");
    const uv5 = $("#uv5");
    const wind5 = $("#wind5");
    const icon5 = $("#icon5");
    const temp5 = $("#temp5");
    const day5 = $("#day5");
    const condition5 = $("#condition5");


    const humid6 = $("#humid6");
    const uv6 = $("#uv6");
    const wind6 = $("#wind6");
    const icon6 = $("#icon6");
    const temp6 = $("#temp6");
    const day6 = $("#day6");
    const condition6 = $("#condition6");


    const humid7 = $("#humid7");
    const uv7 = $("#uv7");
    const wind7 = $("#wind7");
    const icon7 = $("#icon7");
    const temp7 = $("#temp7");
    const day7 = $("#day7");
    const condition7 = $("#condition7");


    //--- api info -------
    const search = $("#searchField").val();
    const key = "841e4f34d3e84f18aa7144506232109";
    const n = search;


    $.ajax({
        method : "GET",
        url : `https://api.weatherapi.com/v1/current.json?key=841e4f34d3e84f18aa7144506232109&q=${n}`,
        
        success : (resp) =>{
            console.log(resp);
            city.text(resp.location.name);

            const localtime = new Date(resp.location.localtime);
            const year = localtime.getFullYear();
            const month = (localtime.getMonth()+1).toString().padStart(2, '0');
            const day = localtime.getDate().toString().padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            date.text(formattedDate);


            const currentDate = localtime;
            const sevenDaysEarlier = new Date(currentDate);
            sevenDaysEarlier.setDate(currentDate.getDate()-7);


            const formattedSevenDays = sevenDaysEarlier.toISOString().slice(0, 10);


                $.ajax({

                    method : "GET",
                    url : `https://api.weatherapi.com/v1/history.json?key=${key}&q=${n}&dt=${formattedSevenDays}&end_dt=${formattedDate}`,
                        
                    success : (resp) =>{
                        console.log(resp);

                        if(resp.forecast && resp.forecast.forecastday && resp.forecast.forecastday.length > 0){
                            icon1.attr("src", resp.forecast.forecastday[0].day.condition.icon);
                            day1.text(resp.forecast.forecastday[0].date);

                            temp1.text(resp.forecast.forecastday[0].day.avgtemp_c)
                            humid1.text(resp.forecast.forecastday[0].day.avghumidity);
                            uv1.text(resp.forecast.forecastday[0].day.uv);
                            wind1.text(resp.forecast.forecastday[0].day.avgvis_miles);
                            condition1.text(resp.forecast.forecastday[0].day.condition.text);
                        
                        
                        //---- day 2 -----------
                            icon2.attr("src", resp.forecast.forecastday[1].day.condition.icon);
                            day2.text(resp.forecast.forecastday[1].date);

                            temp2.text(resp.forecast.forecastday[1].day.avgtemp_c)
                            humid2.text(resp.forecast.forecastday[1].day.avghumidity);
                            uv2.text(resp.forecast.forecastday[1].day.uv);
                            wind2.text(resp.forecast.forecastday[1].day.avgvis_miles);
                            condition2.text(resp.forecast.forecastday[1].day.condition.text);
                        


                        //---- day 3 -----------
                            icon3.attr("src", resp.forecast.forecastday[2].day.condition.icon);
                            day3.text(resp.forecast.forecastday[2].date);

                            temp3.text(resp.forecast.forecastday[2].day.avgtemp_c)
                            humid3.text(resp.forecast.forecastday[2].day.avghumidity);
                            uv3.text(resp.forecast.forecastday[2].day.uv);
                            wind3.text(resp.forecast.forecastday[2].day.avgvis_miles);
                            condition3.text(resp.forecast.forecastday[2].day.condition.text);
                    

                        //---- day 4 -----------
                            icon4.attr("src", resp.forecast.forecastday[3].day.condition.icon);
                            day4.text(resp.forecast.forecastday[3].date);

                            temp4.text(resp.forecast.forecastday[3].day.avgtemp_c)
                            humid4.text(resp.forecast.forecastday[3].day.avghumidity);
                            uv4.text(resp.forecast.forecastday[3].day.uv);
                            wind4.text(resp.forecast.forecastday[3].day.avgvis_miles);
                            condition4.text(resp.forecast.forecastday[3].day.condition.text);
                    

                        //---- day 5 -----------
                            icon5.attr("src", resp.forecast.forecastday[4].day.condition.icon);
                            day5.text(resp.forecast.forecastday[4].date);

                            temp5.text(resp.forecast.forecastday[4].day.avgtemp_c)
                            humid5.text(resp.forecast.forecastday[4].day.avghumidity);
                            uv5.text(resp.forecast.forecastday[4].day.uv);
                            wind5.text(resp.forecast.forecastday[4].day.avgvis_miles);
                            condition5.text(resp.forecast.forecastday[4].day.condition.text);
                            

                        //---- day 6 -----------
                            icon6.attr("src", resp.forecast.forecastday[5].day.condition.icon);
                            day6.text(resp.forecast.forecastday[5].date);

                            temp6.text(resp.forecast.forecastday[5].day.avgtemp_c)
                            humid6.text(resp.forecast.forecastday[5].day.avghumidity);
                            uv6.text(resp.forecast.forecastday[5].day.uv);
                            wind6.text(resp.forecast.forecastday[5].day.avgvis_miles);
                            condition6.text(resp.forecast.forecastday[5].day.condition.text);
                    


                        //---- day 7 -----------
                            icon7.attr("src", resp.forecast.forecastday[6].day.condition.icon);
                            day7.text(resp.forecast.forecastday[6].date);

                            temp7.text(resp.forecast.forecastday[6].day.avgtemp_c)
                            humid7.text(resp.forecast.forecastday[6].day.avghumidity);
                            uv7.text(resp.forecast.forecastday[6].day.uv);
                            wind7.text(resp.forecast.forecastday[6].day.avgvis_miles);
                            condition7.text(resp.forecast.forecastday[6].day.condition.text);
                    


                        }   
                    }
                });
            }
        });    
}



//- future----

    function searchPredictions(){

        const city = $("#cityName");
        const date = $("#date");
    
        const humid1 = $("#humid1");
        const uv1 = $("#uv1");
        const wind1 = $("#wind1");
        const icon1 = $("#icon1");
        const temp1 = $("#temp1");
        const day1 = $("#day1");
        const condition1 = $("#condition1");
    
    
        const humid2 = $("#humid2");
        const uv2 = $("#uv2");
        const wind2 = $("#wind2");
        const icon2 = $("#icon2");
        const temp2 = $("#temp2");
        const day2 = $("#day2");
        const condition2 = $("#condition2");
    
    
        const humid3 = $("#humid3");
        const uv3 = $("#uv3");
        const wind3 = $("#wind3");
        const icon3 = $("#icon3");
        const temp3 = $("#temp3");
        const day3 = $("#day3");
        const condition3 = $("#condition3");


        //--- api info -------
        const search = $("#searchField").val();
        const key = "841e4f34d3e84f18aa7144506232109";
        const n = search;


        $.ajax({
            method : "GET",
            url : `https://api.weatherapi.com/v1/current.json?key=841e4f34d3e84f18aa7144506232109&q=${n}`,
            
            success : (resp) =>{
                console.log(resp);
                city.text(resp.location.name);
    
                const localtime = new Date(resp.location.localtime);
                const year = localtime.getFullYear();
                const month = (localtime.getMonth()+1).toString().padStart(2, '0');
                const day = localtime.getDate().toString().padStart(2, '0');
                const formattedDate = `${year}-${month}-${day}`;
                date.text(formattedDate);
    
    
                const currentDate = localtime;
                const threeDaysAhead = new Date(currentDate);
                threeDaysAhead.setDate(currentDate.getDate()+3);
    
    
                const formattedThreeDays = threeDaysAhead.toISOString().slice(0, 10);
    
    
                    $.ajax({
    
                        method : "GET",
                        url : `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${n}&days=4`,
                            
                        success : (resp) =>{
                            console.log(resp);
    
                            if(resp.forecast && resp.forecast.forecastday && resp.forecast.forecastday.length > 0){

                                icon1.attr("src", resp.forecast.forecastday[1].day.condition.icon);
                                day1.text(resp.forecast.forecastday[1].date);
    
                                temp1.text(resp.forecast.forecastday[1].day.avgtemp_c)
                                humid1.text(resp.forecast.forecastday[1].day.avghumidity);
                                uv1.text(resp.forecast.forecastday[1].day.uv);
                                wind1.text(resp.forecast.forecastday[1].day.avgvis_miles);
                                condition1.text(resp.forecast.forecastday[1].day.condition.text);
                            
                            
                            //---- day 2 -----------
                                icon2.attr("src", resp.forecast.forecastday[2].day.condition.icon);
                                day2.text(resp.forecast.forecastday[2].date);
    
                                temp2.text(resp.forecast.forecastday[2].day.avgtemp_c)
                                humid2.text(resp.forecast.forecastday[2].day.avghumidity);
                                uv2.text(resp.forecast.forecastday[2].day.uv);
                                wind2.text(resp.forecast.forecastday[2].day.avgvis_miles);
                                condition2.text(resp.forecast.forecastday[2].day.condition.text);
                            
    
    
                            //---- day 3 -----------
                                icon3.attr("src", resp.forecast.forecastday[3].day.condition.icon);
                                day3.text(resp.forecast.forecastday[3].date);
    
                                temp3.text(resp.forecast.forecastday[3].day.avgtemp_c)
                                humid3.text(resp.forecast.forecastday[3].day.avghumidity);
                                uv3.text(resp.forecast.forecastday[3].day.uv);
                                wind3.text(resp.forecast.forecastday[3].day.avgvis_miles);
                                condition3.text(resp.forecast.forecastday[3].day.condition.text);
                                


                        }   
                    }
                });
            }
        });    

    }



    
var moonIcon = document.getElementById("moonIcon");

moonIcon.onclick = function(){
    document.body.classList.toggle("dark-theme");
}



