var weather;
var days = 0;
var matrix = [];
var m = 30;
var n = 40;

for (var i = 0; i < m; i++) {
    matrix.push([]);
}
for (var a = 0; a < n; a++) {
    for (var x = 0; x < m; x++) {
        matrix[x].push(Math.round(Math.random() * 5));

    }
}

var grassArr = [];
var side = 25;
var xotaker = [];
var gishatich = [];
var vorsord = [];
var mah = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("grey");

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1));
            }
            else if (matrix[y][x] == 2) {
                xotaker.push(new Xotaker(x, y, 2));
            }
            else if (matrix[y][x] == 3) {
                gishatich.push(new Gishatich(x, y, 3));
            }
            else if (matrix[y][x] == 4) {
                vorsord.push(new Vorsord(x, y, 4));
            }
            else if (matrix[y][x] == 5) {
                mah.push(new Mah(x, y, 5));
            }
        }
    }

}
function draw() {

    days++;
    if (days < 9) {
        weather = 1;
        document.getElementById("w").innerHTML = "Գարուն";
    }
    else if (days >= 9 && days < 18) {
        weather = 2;
        document.getElementById("w").innerHTML = "Ամառ";
    }
    else if (days >= 18 && days < 27) {
        weather = 3;
        document.getElementById("w").innerHTML = "Աշուն";
    }
    else if (days >= 27 && days < 36) {
        weather = 4;
        document.getElementById("w").innerHTML = "Ձմեռ";
    }
    else if (days > 36) {
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
            else if (matrix[y][x] == 3) {
                fill("blue");
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

}

// https://github.com/robabraham/Programming3

//git robabraham 

//heroku id
// https://dreamofrob.herokuapp.com/