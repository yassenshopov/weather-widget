
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {

  lat = position.coords.latitude;
  lon = position.coords.longitude;

  let url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=d2631025fc05933bdc92b55c89eb4971&units=metric&';

  const Http = new XMLHttpRequest();
  Http.open("GET", url);
  Http.send();

  let today = new Date();

  switch(today.getDay()) {
    case 1:
      wday = "Monday";
      break;
    case 2:
      wday = "Tuesday";
      break;
    case 3:
      wday = "Wednesday";
      break;
    case 4:
      wday = "Thursday";
      break;
    case 5:
      wday = "Friday";
      break;
    case 6:
      wday = "Saturday";
      break;
    case 7:
      wday = "Sunday";
      break;
  }

  let time = wday + ", " + ('0' + today.getHours()).slice(-2) + ":" + today.getMinutes();


  Http.onreadystatechange = (e) => {
    const obj = JSON.parse(Http.responseText);
    console.log(obj);
    document.getElementById("city").innerHTML = obj.name;

    document.getElementById("time").innerHTML = time;

    console.log(obj.weather[0].description);
    if (obj.weather[0].description == "clear sky") {
      let r = document.querySelector(':root');
      r.style.setProperty('--main-bg-color','#b0edf7')
    }
  }
}
