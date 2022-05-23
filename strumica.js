function start(){

    var button2=document.getElementById("strumicaid");
    button2.addEventListener("click",funk2,false)
}


function funk2(){
    let url = "http://api.openweathermap.org/data/2.5/forecast?q=Strumica&appid=64711ade3445f4b2432deddbe64ee498&units=metric";
    fetch(url)
        .then((resp) => {
          if (!resp.ok) throw new Error(resp.statusText);
          return resp.json();
        })
        .then((data) => {
          showWeather2(data);
        })
        .catch(console.err);
}
function showWeather2(resp){
    console.log(resp);
    var id="tabela";
    let rez = document.getElementById('weather2');
    rez.innerHTML="<table id="+id+"><thead><th>DayTime</th><th>Max Temperature</th></thead>";
    let row=document.getElementById("tabela");
        /*
    row.append(resp.list.map((daytime)=>{
        if(daytime.temp_max>25){
            return "<tr><td> "+resp.dt_txt+"</td><td>"+daytime.temp_max+"</td></tr>";
        }
    }))*/
    for(var i=0;i<resp.cnt;i++){
        if(resp.list[i].main.temp_max>25){
            const rows=document.createElement("tr");
            rows.innerHTML="<td>"+resp.list[i].dt_txt+"</td><td>"+resp.list[i].main.temp_max+"</td>";
            row.appendChild(rows);
        }
    }
      rez.appendChild(row);
    }


window.addEventListener("load",start,false);