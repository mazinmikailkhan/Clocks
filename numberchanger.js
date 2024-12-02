function numberchange(){
    "use strict";
    const m = ["I","II","III","IV","V","VI", "VII", "VIII", "IX","X","XI", "XII"];
    for (let i = 1; i <= 12; i++){
        let index = i;
        index--;
        if(window.nnn === "normal"){
            document.getElementById("l" + i).innerHTML = m[index];
            document.getElementById('numbermode').innerHTML = "Normal";
        }else{
            let tag = document.getElementById("l" + i);
            let value = tag.innerHTML;
            tag.innerHTML = m.indexOf(value) + 1;
            document.getElementById('numbermode').innerHTML = "Roman";
        }
    }
    if(window.nnn === "normal"){
        window.nnn = "roman";
    }else{
        window.nnn = "normal";
    }
}