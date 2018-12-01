var socket = io.connect();
var weather;
var time = 0;
var days = 0;
var meteor = 0;
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
var xotakerEg = [];
var gishatichEg = [];

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
                xotaker.push(new Xotaker(x, y, 2))
            }
            else if (matrix[y][x] == 2.1) {
                xotakerEg.push(new XotakerEg(x, y, 2.1));
            }
            else if (matrix[y][x] == 3) {
                gishatich.push(new Gishatich(x, y, 3));
            }
            else if (matrix[y][x] == 3.1) {
                gishatichEg.push(new GishatichEg(x, y, 3.1));
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
var d = 0;
var statistics;
function draw() {
    if (frameCount % 60 == 0) {
        
        statistics = {
            "Frame number": frameCount,
            "Խոտերի քանակ՝ ": grassArr.length,
            "Որձ խոտակերների քանակ՝ ": xotaker.length,
            "Էգ խոտակերների քանակ՝ ": xotakerEg.length,
            "Որձ գիշատիչների քանակ՝ ": gishatich.length,
            "Էգ գիշատիչների քանակ՝ ": gishatichEg.length,
            "Որսորդների քանակ՝ ": vorsord.length,
            "Մահերի քանակ՝ ": mah.length,
            "Աստվածների քանակ ՝ ": astvac.length
        }
        socket.emit("send statistics", statistics);
    } 
    meteor++;
    time++;
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
    if (meteor >= 9) {
        matrix[Math.round(Math.random()*21)][Math.round(Math.random()*20)] = 8;
        meteor = 0;
    }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                noStroke();
                fill("grey");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                if (weather == 1) {
                    noStroke();
                    fill("#67E11C");
                }
                else if (weather == 2) {
                    noStroke();
                    fill("green");
                }
                else if (weather == 3) {
                    noStroke();
                    fill("#D19919");
                }
                else if (weather == 4) {
                    noStroke();
                    fill("white");
                }
                rect(x * side, y * side, side, side);
            }
            else if ((matrix[y][x] == 2) || (matrix[y][x] == 2.1)) {
                noStroke();
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if ((matrix[y][x] == 3) || (matrix[y][x] == 3.1)) {
                noStroke();
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                noStroke();
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                noStroke();
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                noStroke();
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 8) {
                matrix[y+1][x] = 6;
                var d = new Astvac(x, y+1);
                astvac.push(d);

                matrix[y-1][x] = 6;
                var d = new Astvac(x, y-1);
                astvac.push(d);

                matrix[y][x+1] = 6;
                var d = new Astvac(x+1, y);
                astvac.push(d);

                matrix[y][x-1] = 6;
                var d = new Astvac(x-1, y);
                astvac.push(d);

                fill("#5e0000");
                rect(x * side, y * side, side, side);
            }
        }
    }
    
   
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

    for (var i in xotaker) {
        xotaker[i].sharjvel();
        xotaker[i].utel();
        for (var c in grassArr) {
            if (grassArr[c].x == xotaker[i].x && grassArr[c].y == xotaker[i].y) {
                grassArr.splice(c, 1);
            }
        }
        xotaker[i].mahanal();
    }

    for (var i in xotakerEg) {
        xotakerEg[i].sharjvel();
        xotakerEg[i].utel();
        for (var c in grassArr) {
            if (grassArr[c].x == xotakerEg[i].x && grassArr[c].y == xotakerEg[i].y) {
                grassArr.splice(c, 1);
            }
        }
        xotakerEg[i].bazmanal();
        xotakerEg[i].mahanal();
    }

    for (var i in gishatich) {
        gishatich[i].sharjvel();
        gishatich[i].utel();
        for (var c in xotaker) {
            if (xotaker[c].x == gishatich[i].x && xotaker[c].y == gishatich[i].y) {
                xotaker.splice(c, 1);
            }
        }
        gishatich[i].mahanal();
    }

    for (var i in gishatichEg) {
        gishatichEg[i].sharjvel();
        gishatichEg[i].utel();
        for (var c in xotakerEg) {
            if (xotaker[c].x == gishatichEg[i].x && xotaker[c].y == gishatichEg[i].y) {
                xotaker.splice(c, 1);
            }
        }
        gishatichEg[i].bazmanal();
        gishatichEg[i].mahanal();
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
        astvac[i].utel();
     }
}

// https://github.com/robabraham/Programming3

//git robabraham 

//heroku id
// https://dreamofrob.herokuapp.com/