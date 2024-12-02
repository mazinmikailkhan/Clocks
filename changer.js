try{
    function change(){
        "use strict";
        if(window.secondDesign === "smooth"){
            TickTocking();
            var inter = setInterval(TickTocking, 1000);
            document.getElementById('mode').innerHTML = "Smooth";
            window.secondDesign = "tick";
        }else{
            /*let sec = new Date().getSeconds();
            sec *=  6;
            sec -= 90;
            var s = document.getElementById('sec-st');
            s.style.transform = "rotate(" + sec + "deg)";
            s.style.animationName = "secondRotate";
            s.style.animationDuration = "60s";
            clearInterval(inter);
            inter = 0;
            debugger;*/
            document.head.innerHTML += `<meta http-equiv="refresh" content="0">`;
        }
    }
    function TickTocking(){
        let seconds = new Date().getSeconds();
        seconds *= 6;
        seconds += 3;
        seconds -= 90;
        console.log("Sec   " + seconds);
        /*function secondKata(name, deg){
            return `<style>@keyframes ${name}{
                0%{
                    transform: rotate(${deg}deg);
                }
                100%{
                    transform: rotate(${Number(deg) + 6}deg);
                }
            }</style>`;
        }*/
        s.style.animationName = "papa";
        console.log(s);
        s.style.transform = "rotate(" + seconds + "deg)";
    }
}catch(err){
    console.log(err.name + " : "+ err.message);
    window.alert("Sorry, an error occurred in the programming of this page");
}