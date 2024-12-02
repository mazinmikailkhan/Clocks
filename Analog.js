try{
    const d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    var sec = d.getSeconds();
    let mil = d.getMilliseconds();
    if(hr > 12){
        hr -= 12;
    }
    sec *=  6;
    sec -= 90;
    var s = document.getElementById('sec-st');
    s.style.transform = "rotate(" + sec + "deg)";
    const m = document.getElementById('min-st');
    min = min * 60 + d.getSeconds();
    //min is now seconds past in current hour
    min *= 0.1;
    min -= 90;
    m.style.transform = "rotate(" + min + "deg)";
    console.log(hr);
    hr = (hr * 60) + d.getMinutes();
    //hr is now minutes past in the current day
    console.log(hr);
    hr *= 0.5;
    console.log(hr);
    hr -= 90;
    const h = document.getElementById('hr-st');
    h.style.transform = "rotate(" + hr + "deg)";
    function animation(name,deg){
        return `<style>
            @keyframes ${name}{
                0%{
                    transform: rotate(${deg}deg);
                }
                100%{
                    transform: rotate(${Number(deg) + 360}deg);
                }
            }</style>`;
        }
    document.head.innerHTML += animation("secondRotate", sec);
    s.style.animationName = "secondRotate";
    s.style.animationDuration = "60s";
    document.head.innerHTML += animation("minRotate", min);
    m.style.animationName = "minRotate";
    m.style.animationDuration = "3600s";
    document.head.innerHTML += animation("hrRotate", hr);
    h.style.animationName = "hrRotate";
    h.style.animationDuration = "86400s";
}catch(err){
    console.log(err);
    //console.log(err.name + " : " + err.message);
    window.alert("Sorry, an error occured. You may find some unexpected results");
}
var secondDesign = "smooth";
var firstTime = true;
var dongValue = 1;
//rr function is not called
/*function rr(){
    let n = new Date().getHours();
    if(n > 12){
        n -= 12;
    }
    if(window.dongValue <= n){
        console.log(n + " : " + dongValue);
        window.dongValue += 1;
        let dong = document.getElementById('dong' + window.dongValue);
        dong.play();
    }else{
        window.document.head.innerHTML += `<meta http-equiv="refresh" content="0">`;
    }
    console.log("Executed");
}*/

function clear(){
    clearInterval(window.bell);
}
function halfWay(){
    const d = new Date();
    var n = d.getHours();
    if (n > 12){
        n -= 12;
    }
    for (let i = 1; i <= n; i++){
        let dong = document.getElementById('dong' + i);
        setTimeout(dong.play.bind(dong), 2000 * i);
        setTimeout(dong.pause.bind(dong), ((2000 * i) + 2000));
    }
    //var bell = setInterval(rr,2000);
    //setTimeout(clear, 1000 * n);
}
function ringing(){
    const firstAudio = document.getElementById('music');
    firstAudio.play();
    setTimeout(firstAudio.pause.bind(firstAudio), 19000);
    setTimeout(halfWay, 19000);
}