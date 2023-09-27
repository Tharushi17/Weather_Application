
function searchOnAction(){

        const city = $("#cityName");
        const time = $("#time");
        const temp = $("#temp");
        const temperature = $("#temperature");
        const humidity = $("#humidity");
        const uv = $("#uv");
        const wind = $("#wind");
        const condition = $('#condition');

        const icon = $("#icon");

        const search = document.getElementById("searchField");
        const key = "841e4f34d3e84f18aa7144506232109";
        const n = search.value;

    if(search != ""){
        $.ajax({
            method : "GET",
            url : `http://api.weatherapi.com/v1/current.json?key=841e4f34d3e84f18aa7144506232109&q=${n}`,
            
            success : (resp) => {
                console.log(resp);
                city.text(resp.location.name);
                temp.text(resp.current.temp_c);
                temperature.text(resp.current.temp_c);
                humidity.text(resp.current.humidity);
                uv.text(resp.current.uv);
                wind.text(resp.wind_mph);

                condition.text(resp.current.condition.text);

                const localtime = new Date(resp.location.localtime);
                const formattedDate = localtime.toDateString().split('T')[0];
                time.text(resp.location.localtime);

                icon.attr("src", resp.current.condition.icon);
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

function searchHistory(){

    const city = $("#cityName");
    const date = $("#date");

    const search = $("#searchField").val();
    const key = "841e4f34d3e84f18aa7144506232109";
    const n = search;


    $.ajax({
        method : "GET",
        url : `http://api.weatherapi.com/v1/current.json?key=841e4f34d3e84f18aa7144506232109&q=${n}`,
        
        success : (resp) =>{
            console.log(resp);
            city.text(resp.location.name);

            const localtime = new Date(resp.location.localtime);
            const year = localtime.getFullYear();
            const month = (localtime.getMonth()+1).toString().padStart(2, '0');
            const day = localtime.getDate().toString().padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            date.text(formattedDate);


            const date1 = formattedDate;

                $.ajax({

                    method : "GET",
                    url : `http://api.weatherapi.com/v1/history.json?key=${key}&q=${n}&dt=${date1}&days=7`,
                        
                    success : (resp) =>{
                        console.log(resp);
                            
                            
                    }
                });
            }
        });    
}






var moonIcon = document.getElementById("moonIcon");

moonIcon.onclick = function(){
    document.body.classList.toggle("dark-theme");
}
