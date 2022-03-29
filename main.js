
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
}


function showPosition(position) {
    
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  let url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=d2631025fc05933bdc92b55c89eb4971&units=metric&';
    
  const Http = new XMLHttpRequest();
  Http.open("GET", url);
  Http.send();

    let intervalId = window.setInterval(() => {
        
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
        case 0:
          wday = "Sunday";
          break;
        default:
          wday = "WDay_Error";
    }
    
    let time = wday + ", " + ('0' + today.getHours()).slice(-2) + ":" + ('0' + today.getMinutes()).slice(-2);
    console.log("Refresh");
  },5000);


  Http.onreadystatechange = (e) => {
    const obj = JSON.parse(Http.responseText);
    console.log(obj);
    document.getElementById("city").innerHTML = obj.name;

    document.getElementById("time").innerHTML = time;

    let r = document.querySelector(':root');
    console.log(obj.weather[0].description);
    switch(obj.weather[0].description) {
      case ("clear sky"):
        r.style.setProperty('--main-bg-color','#b0edf7');
        break;
      case ("few clouds"):
        r.style.setProperty('--main-bg-color','#a8abbf');
        break;
      case ("scattered clouds"):
        r.style.setProperty('--main-bg-color','#7d7f96');
        break;
      case ("broken clouds"):
        r.style.setProperty('--main-bg-color','#606061');
        break;
      case ("shower rain"):
        r.style.setProperty('--main-bg-color','#3347ff');
        break;
      case ("rain"):
        r.style.setProperty('--main-bg-color','#081699');
        break;
      case ("thunderstorm"):
        r.style.setProperty('--main-bg-color','#0f035c');
        break;
      case ("snow"):
        r.style.setProperty('--main-bg-color','#d7fcfc');
        break;
      case ("mist"):
        r.style.setProperty('--main-bg-color','#a786bf');
        break;
      default:
        r.style.setProperty('--main-bg-color','#cf0e75');
        break;
    }
  }
}
