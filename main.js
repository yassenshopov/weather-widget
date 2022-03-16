const Http = new XMLHttpRequest();
const url='http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d2631025fc05933bdc92b55c89eb4971';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}