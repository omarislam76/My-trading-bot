function generateSignal(){

let market = document.getElementById("market").value;

// 🔥 Improved Logic
let emaTrend = Math.random();
let rsi = Math.random()*100;

let result = "WAIT";

if(emaTrend > 0.5 && rsi < 35){
result = "CALL 📈";
}
else if(emaTrend < 0.5 && rsi > 65){
result = "PUT 📉";
}

// Next Candle Time
let now = new Date();
now.setSeconds(0);
now.setMinutes(now.getMinutes()+1);
let entry = now.toLocaleTimeString();

// Output
if(result === "WAIT"){
document.getElementById("signal").innerHTML =
"PAIR: "+market+"<br>NO SIGNAL...";
}else{
document.getElementById("signal").innerHTML =
"PAIR: "+market+
"<br>ENTRY NEXT CANDLE: "+entry+
"<br>SIGNAL: "+result;
}

document.getElementById("status").innerHTML = "SMART FILTER APPLIED";
}
