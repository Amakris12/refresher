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

function number2(){
    let presentList = input.split("\n");
    var newL = [];
    var total = [];
    var med;
    var small;
    var large;
    var awnser = 0;
    for( var x = 0;x < presentList.length;x++){
        newL[x] = presentList[x].split('x');
        total[x] = newL[x].sort(function(a,b){return a-b});
        small = Number(total[x][0]);
        med = Number(total[x][1]);
        large = Number(total[x][2]);
        awnser += ((2*small) + large)*((2*med) + (2*small));
    }
    console.log(awnser)
    document.getElementById("awnser1").value = awnser;
};

function number3(){
    let presentList = input.split("\n");
    var newL = [];
    var total = [];
    var small;
    var awnser = 0;
    for(var x = 0; x < presentList.length;x++){
        newL[x] = presentList[x].split("x");
        total[x] = newL[x].sort(function(a,b){return a,b});
        small = Number(total[x][0]);
        awnser += small;
    }
    console.log(awnser);
    document.getElementById("awnser2").value = awnser;
}

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
};
number4();