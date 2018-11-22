var weather;
var days = 0;
var matrix = [
    [2.1, 1, 2, 1, 1, 1, 1, 2.1, 0, 0, 0, 1, 0, 1, 0, 1, 5, 2, 0, 0, 0, 0, 1, 1, 2, 0, 5, 2.1, 0, 0, 0, 0, 1, 1, 3.1, 4, 0, 0, 0, 1, 1, 0, 0],

    [3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 2.1, 0, 0, 4, 0, 0, 0, 0, 2.1, 2, 3, 0, 0, 0, 3.1, 6, 0, 0, 0, 0, 0, 0, 0, 3.1],

    [0, 0, 5, 0, 0, 2.1, 2, 0, 0, 3.1, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 4, 5, 2.1, 0, 0, 3.1, 0, 0, 0, 0, 1, 1, 1, , 0],

    [0, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 3.1, 2, 5, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, , 2.1, 2, 2, 2, 0, 0, 0, 2, 0, 1],


    [5, 6, 0, 1, 2, 0, 0, 0, 4, 0, 0, 4, 0, 1, 5, 2, 0, 2, 0, 0, 0, 0, 0, 1, 1, 2, 0, 5, 2.1, 0, 0, 0, 0, 1, 1, 3.1, 4, 0, 0, 0, 1, 1, 0, 0],


    [3.1, 0, 0, 0, 0, 0, 1, 0, 5, 0, 3.1, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, , 2.1, 2, 2, 2, 0, 0, 0, 2, 0, 1],


    [0, 2, 3, 0, 0, 0, 1, 0, 0, 3.1, 0, 0, 0, 1, 0, 2.1, 0, 2, 0, 0, 0, 0, 0, 1, 1, 2, 0, 5, 2.1, 0, 0, 0, 0, 1, 1, 3.1, 4, 0, 0, 0, 1, 1, 0, 0],

    [0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 3, 2, 6, 3.1, 3, 0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 4, 5, 2.1, 0, 0, 3.1, 0, 0, 0, 0, 1, 1, 1, , 0],

    [0, 0, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 4, 3, 0, 0, 2, 4, 2, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, , 2.1, 2, 2, 2, 0, 0, 0, 2, 0, 1],

    [0, 2.1, 0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 1, 2, 0, 5, 2.1, 0, 0, 0, 0, 1, 1, 3.1, 4, 0, 0, 0, 1, 1, 0, 0],

    [5, 0, 2, 0, 0, 0, 1, 1, 0, 6, 3.1, 0, 0, 1, 3, 0, 0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 4, 5, 2.1, 0, 0, 3.1, 0, 0, 0, 0, 1, 1, 1, , 0],

    [0, 4, 0, 3, 4, 0, 0, 4, 0, 2, 0, 0, 1, 0, 0, 0, 3, 0, 0, 6, 1, 0, 2, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, , 2.1, 2, 2, 2, 0, 0, 0, 2, 0, 1],

    [0, 2, 0, 0, 3.1, 0, 3.1, 0, 2.1, 0, 0, 2, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, , 2.1, 2, 2, 2, 0, 0, 0, 2, 0, 1],

    [0, 0, 4, 0, 0, 0, 0, 1, 0, 2.1, 0, 0, 4, 0, 1, 2.1, 0, 1, 0, 0, 1, 0, 2, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, , 2.1, 2, 2, 2, 0, 0, 0, 2, 0, 1],

    [0, 0, 3.1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 2, 0, 5, 2.1, 0, 0, 0, 0, 1, 1, 3.1, 4, 0, 0, 0, 1, 1, 0, 0],

    [0, 4, 0, 2, 3.1, 0, 1, 1, 1, 2, 2.1, 1, 0, 0, 1, 2, 1, 0, 1, 4, 2, 0, 2, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, , 2.1, 2, 2, 2, 0, 0, 0, 2, 0, 1],

    [2, 0, 0, 0, 1, 3.1, 5, 2.1, 2.1, 3, 1, 2.1, 2, 0, 0, 0, 0, 3.1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 4, 5, 2.1, 0, 0, 3.1, 0, 0, 0, 0, 1, 1, 1, , 0],

    [0, 0, 0, 0, 4, 0, 0, 2.1, 1, 1, 2, 2, 0, 0, 1, 4, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, , 2.1, 2, 2, 2, 0, 0, 0, 2, 0, 1],

    [5, 1, 0, 0, 1, 3, 0, 2.1, 1, 1, 2.1, 1, 2, 4, 3, 0, 1, 0, 1, 3.1, 4, 5, 0, 1, 1, 2, 0, 5, 2.1, 0, 0, 0, 0, 1, 1, 3.1, 4, 0, 0, 0, 1, 1, 0, 0],

    [0, 2.1, 0, 2.1, 0, 3.1, 1, 0, 2, 2.1, 4, 0, 1, 1, 2, 1, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, , 2.1, 2, 2, 2, 0, 0, 0, 2, 0, 1],

    [0, 0, 4, 1, 0, 0, 1, 0, 3, 0, 1, 0, 0, 0, 0, 1, 2.1, 1, 2, 0, 0, 3, 2, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, , 2.1, 2, 2, 2, 0, 0, 0, 2, 0, 1],

    [1, 0, 0, 2, 0, 2, 1, 1, 4, 0, 1, 1, 0, 2.1, 0, 0, 4, 3, 2.1, 0, 0, 2.1, 0, 1, 1, 1, 0, 0, 0, 4, 5, 2.1, 0, 0, 3.1, 0, 0, 0, 0, 1, 1, 1, , 0],

    [1, 0, 1, 0, 0, 0, 2.1, 3.1, 2, 2.1, 0, 2, 0, 3.1, 4, 0, 3.1, 0, 0, 3, 4, 5, 0, 1, 1, 2, 0, 5, 2.1, 0, 0, 0, 0, 1, 1, 3.1, 4, 0, 0, 0, 1, 1, 0, 0],

];
var m = 40;
var n = 30;

/*for (var i = 0; i < m; i++) {
    matrix.push([]);
}
for (var a = 0; a < n; a++) {
    for (var x = 0; x < m; x++) {
        matrix[x].push(Math.round(Math.random() * 5));

    }
}*/

var grassArr = [];
var side = 25;
var xotaker = [];
var gishatich = [];
var vorsord = [];
var mah = [];
var astvac = [];

function setup() {
    frameRate(10);
    /*for (var y = 0; y < n; y++) {
        matrix[y] = [];

        for (var x = 0; x < m; x++) {
            matrix[y][x] = Math.round(Math.random() * 6);
        }
    }*/
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("grey");

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1));
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y);
                xotaker.push(xt);
            }
            else if (matrix[y][x] == 2.1) {
                var xteg = new XotakerEg(x, y);
                xotaker.push(xteg);
            }
            else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y)
                gishatich.push(gsh);
            }
            else if (matrix[y][x] == 3.1) {
                var gsheg = new GishatichEg(x, y)
                gishatich.push(gsheg);
            }
            else if (matrix[y][x] == 4) {
                vorsord.push(new Vorsord(x, y, 4));
            }
            else if (matrix[y][x] == 5) {
                mah.push(new Mah(x, y, 5));
            }
            else if (matrix[y][x] == 6) {
                astvac.push(new Astvac(x, y, 6));
            }
        }
    }

}
function draw() {

    days++;
    if (days < 18) {
        weather = 1;
        document.getElementById("w").innerHTML = "Գարուն";
    }
    else if (days >= 18 && days < 27) {
        weather = 2;
        document.getElementById("w").innerHTML = "Ամառ";
    }
    else if (days >= 27 && days < 36) {
        weather = 3;
        document.getElementById("w").innerHTML = "Աշուն";
    }
    else if (days >= 36 && days < 45) {
        weather = 4;
        document.getElementById("w").innerHTML = "Ձմեռ";
    }
    else if (days > 45) {
        days = 0;
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("grey");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                if (weather == 1) {
                    fill("#67E11C");
                }
                else if (weather == 2) {
                    fill("green");
                }
                else if (weather == 3) {
                    fill("#D19919");
                }
                else if (weather == 4) {
                    fill("white");
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2.1) {
                fill("#F2F18B");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3.1) {
                fill("#7280F5");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("#7F1417");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

    for (var i in xotaker) {
        xotaker[i].sharjvel();
    }
    for (var i in xotaker) {
        xotaker[i].utel();
        for (var c in grassArr) {
            if (grassArr[c].x == xotaker[i].x && grassArr[c].y == xotaker[i].y) {
                grassArr.splice(c, 1);
            }
        }
    }
    for (var i in xotaker) {
        xotaker[i].bazmanal();
    }
    for (var i in xotaker) {
        xotaker[i].mahanal();
    }

    for (var i in gishatich) {
        gishatich[i].sharjvel();
    }

    for (var i in gishatich) {
        gishatich[i].utel();
        for (var c in xotaker) {
            if (xotaker[c].x == gishatich[i].x && xotaker[c].y == gishatich[i].y) {
                xotaker.splice(c, 1);
            }
        }
    }
    for (var i in gishatich) {
        gishatich[i].bazmanal();
    }
    for (var i in gishatich) {
        gishatich[i].mahanal()
    }
    for (var i in vorsord) {
        vorsord[i].sharjvel();
    }
    for (var i in vorsord) {
        vorsord[i].bazmanal();
    }
    for (var i in vorsord) {
        vorsord[i].utel();
        for (var c in gishatich) {
            if (gishatich[c].x == vorsord[i].x && gishatich[c].y == vorsord[i].y) {
                gishatich.splice(c, 1);
            }
        }
    }
    for (var i in vorsord) {
        vorsord[i].mahanal();
    }
    for (var i in mah) {
        mah[i].sharjvel();
    }

    for (var i in mah) {
        mah[i].utel();
        for (var c in vorsord) {
            if (vorsord[c].x == mah[i].x && vorsord[c].y == mah[i].y) {
                vorsord.splice(c, 1);
            }
        }
    }
    for (var i in mah) {
        mah[i].bazmanal();
    }
    for (var i in mah) {
        mah[i].mahanal();
    }
    for (var i in astvac) {
        astvac[i].sharjvel();
    }
    for (var i in astvac) {
        astvac[i].bazmanal();
    }
    for (var i in astvac) {
        astvac[i].utel();
        for (var c in mah) {
            if (mah[c].x == astvac[i].x && mah[c].y == astvac[i].y) {
                mah.splice(c, 1);
            }
        }
    }
}
function mouseClicked() {
    if (mouseY <= matrix.length * side && mouseX <= matrix[0].length * side && mouseX > 0 && mouseY > 0) {
        var moux = console.log(mouseX);
        var mouy = console.log(mouseY);
    }
}

// https://github.com/robabraham/Programming3

//git robabraham 

//heroku id
// https://dreamofrob.herokuapp.com/