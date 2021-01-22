var input = prompt("User input please");
let presentList = input.split("\n");
//console.log(presentList);
function number1() {
    let totalVolume = 1;
    var t;
    console.log(presentList);
    for(var x = 0; x < presentList.length - 1; x++){
        t=presentList[x].split("x");
        totalVolume += t[0]*t[1]*t[2];
    }
    console.log(totalVolume);
    document.getElementById('awnser').value = totalVolume;
};
number1();

function number2() {
    let y;
    for(var x = 0; x > presentList.length;x++){
        var v = presentList;
        var j = 2;
        v.split("x");
        y += ((j[x] + v[x+1])(j[x+2] + j[x+3]));
    };
    document.getElementById('awnser1').value = y;
};
number2()

function number3() {
    let y;
    for(var x = 0; x > presentList.length;x++){
        c = presentList;
        c.split("x"); 
        if([x] > [x+1]){
            return [x+1];
        }else return [x]
        if([x+2] > [x+3]){
            return [x+3]
        }else return [x+2];
        
    }
    console.log(y);
    document.getElementById('awnser2').value = y; 
};    
number3();

function number4() {
    var y = 0;
    var g = "";
    console.log(presentList);
    for(var x = 0; x < presentList.length;x++){
        g=presentList[x].split("x");
        g = g.sort((a,b) => a - b);
        let small = Number(g[0]);
        let mid = Number(g[1]);
        let high = Number(g[2]);

    y += 4 * small + 2 * mid + 2 * high + (small + mid * high);
    
    document.getElementById('awnser3').value = y;
    
}
    //console.log(y);
    //console.log(g);
}
number4();