function StartWeather(){
document.getElementById("weather-click-here").style.display = "none";
document.getElementById("weather").style.display = "";
checkWeatherShiga();
checkWeatherNaeba();
checkWeatherZAO();
}

function GoNextWeather(){
document.getElementById("weather-click-here").style.display = "none";
document.getElementById("weather").style.display = "none";
document.getElementById("weather2").style.display = "";
checkWeatherNiseko();
checkWeatherHantama();
checkWeatherKaruizawa();
}

function GoBackWeather(){
document.getElementById("weather-click-here").style.display = "none";
document.getElementById("weather").style.display = "";
document.getElementById("weather2").style.display = "none";
}

function checkWeatherShiga(){//志賀高原
$.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=90080338f219c7bc10f6c35d1c39d784&_render=json&city=72&day=today",function(data){
var item = data.value.items[0];
html = '<table class="t-weather">';
html += '<tr>';
html += '<td class="t-weather">';
html += '<a href="http://weather.livedoor.com/p/20/72/20561.html" class="weather-detail">';
html += '志賀高原';
html += '</a>';
html += '</td>';
html += '<td class="t-weather">';
html += item.telop;
html += '</td>';
html += '<td class="t-weather">';
	if(item.temperature.max.celsius == null){
html += '--';
}else{
html += item.temperature.max.celsius;
}
html += '/';
	if(item.temperature.min.celsius == null){
html += '--';
}else{
html += item.temperature.min.celsius;
}
html += '</td>';
html += '<td class="t-weather">';
html += '<img src="' + item.image.url + '" width="50%" height="50%">';
html += '</td>';
html += '</tr>';
html += '</table>';
fdate = 'ForecastDate：' + item.forecastdate;
$('#id_result').html(html);
$('#weather-title').html(fdate);
	});
}

function checkWeatherNaeba(){//苗場
$.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=90080338f219c7bc10f6c35d1c39d784&_render=json&city=51&day=today",function(data){
var item = data.value.items[0];
html = '<table class="t-weather">';
html += '<tr>';
html += '<td class="t-weather">';
html += '<a href="http://weather.livedoor.com/p/15/51/15226.html" class="weather-detail">';
html += '苗場　　';
html += '</a>';
html += '</td>';
html += '<td class="t-weather">';
html += item.telop;
html += '</td>';
html += '<td class="t-weather">';
	if(item.temperature.max.celsius == null){
html += '--';
}else{
html += item.temperature.max.celsius;
}
html += '/';
	if(item.temperature.min.celsius == null){
html += '--';
}else{
html += item.temperature.min.celsius;
}
html += '</td>';
html += '<td class="t-weather">';
html += '<img src="' + item.image.url + '" width="50%" height="50%">';
html += '</td>';
html += '</tr>';
html += '</table>';
$('#id_result2').html(html);
	});
}

function checkWeatherZAO(){//蔵王
$.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=90080338f219c7bc10f6c35d1c39d784&_render=json&city=27&day=today",function(data){
var item = data.value.items[0];
html = '<table class="t-weather">';
html += '<tr>';
html += '<td class="t-weather">';
html += '<a href="http://weather.livedoor.com/p/6/27/6201.html" class="weather-detail">';
html += '蔵王　　';
html += '</a>';
html += '</td>';
html += '<td class="t-weather">';
html += item.telop;
html += '</td>';
html += '<td class="t-weather">';
	if(item.temperature.max.celsius == null){
html += '--';
}else{
html += item.temperature.max.celsius;
}
html += '/';
	if(item.temperature.min.celsius == null){
html += '--';
}else{
html += item.temperature.min.celsius;
}
html += '</td>';
html += '<td class="t-weather">';
html += '<img src="' + item.image.url + '" width="50%" height="50%">';
html += '</td>';
html += '</tr>';
html += '</table>';
$('#id_result3').html(html);
	});
}

function checkWeatherNiseko(){//ニセコ
$.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=90080338f219c7bc10f6c35d1c39d784&_render=json&city=6&day=today",function(data){
var item = data.value.items[0];
html = '<table class="t-weather">';
html += '<tr>';
html += '<td class="t-weather">';
html += '<a href="http://weather.livedoor.com/p/1b/6/1395.html" class="weather-detail">';
html += 'ニセコ　';
html += '</a>';
html += '</td>';
html += '<td class="t-weather">';
html += item.telop;
html += '</td>';
html += '<td class="t-weather">';
	if(item.temperature.max.celsius == null){
html += '--';
}else{
html += item.temperature.max.celsius;
}
html += '/';
	if(item.temperature.min.celsius == null){
html += '--';
}else{
html += item.temperature.min.celsius;
}
html += '</td>';
html += '<td class="t-weather">';
html += '<img src="' + item.image.url + '" width="50%" height="50%">';
html += '</td>';
html += '</tr>';
html += '</table>';
fdate = 'ForecastDate：' + item.forecastdate;
$('#id_result4').html(html);
$('#weather-title2').html(fdate);
	});
}

function addEvent(elm,listener,fn){
	try{
		elm.addEventListener(listener,fn,false);
	}catch(e){
		elm.attachEvent("on"+listener,fn);
	}
}

function checkWeatherHantama(){//ハンタマ
$.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=90080338f219c7bc10f6c35d1c39d784&_render=json&city=57&day=today",function(data){
var item = data.value.items[0];
html = '<table class="t-weather">';
html += '<tr>';
html += '<td class="t-weather">';
html += '<a href="http://weather.livedoor.com/p/9/57/9213.html" class="weather-detail">';
html += 'ハンタマ';
html += '</a>';
html += '</td>';
html += '<td class="t-weather">';
html += item.telop;
html += '</td>';
html += '<td class="t-weather">';
	if(item.temperature.max.celsius == null){
html += '--';
}else{
html += item.temperature.max.celsius;
}
html += '/';
	if(item.temperature.min.celsius == null){
html += '--';
}else{
html += item.temperature.min.celsius;
}
html += '</td>';
html += '<td class="t-weather">';
html += '<img src="' + item.image.url + '" width="50%" height="50%">';
html += '</td>';
html += '</tr>';
html += '</table>';
$('#id_result5').html(html);
	});
}

function checkWeatherKaruizawa(){//軽井沢
$.getJSON("http://pipes.yahoo.com/pipes/pipe.run?_id=90080338f219c7bc10f6c35d1c39d784&_render=json&city=73&day=today",function(data){
var item = data.value.items[0];
html = '<table class="t-weather">';
html += '<tr>';
html += '<td class="t-weather">';
html += '<a href="http://weather.livedoor.com/p/20/73/20321.html" class="weather-detail">';
html += '軽井沢　';
html += '</a>';
html += '</td>';
html += '<td class="t-weather">';
html += item.telop;
html += '</td>';
html += '<td class="t-weather">';
	if(item.temperature.max.celsius == null){
html += '--';
}else{
html += item.temperature.max.celsius;
}
html += '/';
	if(item.temperature.min.celsius == null){
html += '--';
}else{
html += item.temperature.min.celsius;
}
html += '</td>';
html += '<td class="t-weather">';
html += '<img src="' + item.image.url + '" width="50%" height="50%">';
html += '</td>';
html += '</tr>';
html += '</table>';
$('#id_result6').html(html);
	});
}

addEvent(window,"click",checkWeatherShiga);
addEvent(window,"click",checkWeatherNaeba);
addEvent(window,"click",checkWeatherZAO);
addEvent(window,"click",checkWeatherNiseko);
addEvent(window,"click",checkWeatherHantama);
addEvent(window,"click",checkWeatherKaruizawa);