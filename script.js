var matrix = [];
var m = 30;
var n = 40;

for(var i=0; i<m; i++){
    matrix.push([]);
}
for(var a=0; a<n; a++){
    for(var x = 0; x<m; x++){
          matrix[x].push(Math.round( Math.random()*5) );

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
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                xotaker.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                gishatich.push(new Gishatich(x, y));
            }
            else if (matrix[y][x] == 4) {
                vorsord.push(new Vorsord(x, y));
            }
            else if (matrix[y][x] == 5) {
                mah.push(new Mah(x, y));
            }
        }
    }

}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("grey");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
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
    for (var i in xotaker){
        xotaker[i].mahanal();
    }

    for(var i in gishatich){
        gishatich[i].sharjvel();
    }

    for (var i in gishatich){
        gishatich[i].utel();
        for(var c in xotaker) {
            if(xotaker[c].x == gishatich[i].x && xotaker[c].y == gishatich[i].y){
                xotaker.splice(c, 1);
            }
        }
    }
    for (var i in gishatich){
        gishatich[i].bazmanal();
    }
    for (var i in gishatich){
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
            if(gishatich[c].x == vorsord[i].x && gishatich[c].y == vorsord[i].y) {
                gishatich.splice(c, 1);
            }
        }
    }
    for (var i in vorsord) {
        vorsord[i].mahanal();
    }
    for(var i in mah){
        mah[i].sharjvel();
    }

    for (var i in mah){
        mah[i].utel();
        for(var c in vorsord) {
            if(vorsord[c].x == mah[i].x && vorsord[c].y == mah[i].y){
                vorsord.splice(c, 1);
            }
        }
    }
    for (var i in mah){
        mah[i].bazmanal();
    }
   
}