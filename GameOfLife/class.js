/*class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        this.multiply++;
        if (this.multiply >= 2 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
            
        }
    }
} 

class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 7;
        this.directions = [];
        this.index = 2;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(1);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }
    bazmanal() {
        if (this.energy == 8) {
            this.energy++;
            var norVandak = random(this.yntrelVandak(0));
            if (norVandak) {
                var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                xotaker.push(norXotaker);
                matrix[norVandak[1]][norVandak[0]] = 2;
                this.multiply = 0;
            }
        }
    }
    mahanal() {
        if (this.energy < 0) {
            matrix[this.y][this.x] = 0;
            for (var c in xotaker) {
                if (xotaker[c].x == this.x && xotaker[c].y == this.y) {
                    xotaker.splice(c, 1);
                }
            }
        }
    }
} 
class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 3;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(1);
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }
    bazmanal() {
        if (this.energy == 7) {
            this.energy++;
            var norVandak = random(this.yntrelVandak(0));
            if (norVandak) {
                var norgishatich = new Gishatich(norVandak[0], norVandak[1]);
                gishatich.push(norgishatich);
                matrix[norVandak[1]][norVandak[0]] = 3;
                this.multiply = 0;
            }
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(2);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }
      mahanal() {
            if (this.energy < 0) {
                matrix[this.y][this.x] = 0;
                for (var c in gishatich) {
                    if (gishatich[c].x == this.x && gishatich[c].y == this.y) {
                        gishatich.splice(c, 1);
                    }
                }
            }
        }
}
class Vorsord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = [];
        this.index = 4;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(0);
        var datarkVandakner = this.yntrelVandak(1);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }
    bazmanal() {
        if (this.energy == 8) {
            var norVandak = random(this.yntrelVandak(0));
            if (norVandak) {
                var norvorsord = new Vorsord(norVandak[0], norVandak[1]);
                vorsord.push(norvorsord);
                matrix[norVandak[1]][norVandak[0]] = 4;
                this.multiply = 0;
            }
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(3);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }
    mahanal() {
            if (this.energy < 0) {
                matrix[this.y][this.x] = 0;
                for (var c in vorsord) {
                    if (vorsord[c].x == this.x && vorsord[c].y == this.y) {
                        vorsord.splice(c, 1);
                    }
                }
            }
        }
    }
 class Mah {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.directions = [];
        this.index = 5;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(0);
        var datarkVandakner = this.yntrelVandak(1);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }
    bazmanal() {
        if (this.energy == 10) {
            var norVandak = random(this.yntrelVandak(0));
            if (norVandak) {
                var normah = new Mah(norVandak[0], norVandak[1]);
                mah.push(normah);
                matrix[norVandak[1]][norVandak[0]] = 4;
                this.multiply = 0;
            }
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(4);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }
 } */
