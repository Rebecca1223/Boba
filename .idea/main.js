var name, tea, flav, top, sugar, ice;

document.getElementById("fresh").onclick = function() {add()};
function add() {
  tea= "Fresh ";
}

document.getElementById("milk").onclick = function() {add1()};
function add1() {
  tea= "Milk ";
}

document.getElementById("jas").onclick = function() {add2()};
function add2() {
  flav= "jasmine tea ";
}

document.getElementById("honey").onclick = function() {add3()};
function add3() {
  flav= "honey tea ";
}

document.getElementById("ool").onclick = function() {add4()};
function add4() {
  flav= "oolong tea ";
}

document.getElementById("wm").onclick = function() {add5()};
function add5() {
  flav= "wintermelon tea ";
}

document.getElementById("tap").onclick = function() {add6()};
function add6() {
  top= "with tapiocal pearls";
}

document.getElementById("jelly").onclick = function() {add7()};
function add7() {
  top= "with coconut jelly";
}

document.getElementById("grass").onclick = function() {add8()};
function add8() {
  top= "with grass jelly";
}

document.getElementById("red").onclick = function() {add9()};
function add9() {
  top= "with red beans";
}

document.getElementById("none").onclick = function() {add0()};
function add0() {
  sugar= "at no sugar";
}

document.getElementById("halfS").onclick = function() {add11()};
function add11() {
  sugar= "at half sugar";
}

document.getElementById("fullS").onclick = function() {add12()};
function add12() {
  sugar= "at full sugar";
}

document.getElementById("hot").onclick = function() {add13()};
function add13() {
  ice= "and hot";
}

document.getElementById("halfI").onclick = function() {add14()};
function add14() {
  ice= "and half ice";
}

document.getElementById("fullI").onclick = function() {add15()};
function add15() {
  ice= "and full ice";
}

name=tea+flav+top+sugar+ice;

document.getElementById("butt1").onclick = function() {name()};
function name() {
    document.write(name);
}



