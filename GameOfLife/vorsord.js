class Vorsord extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
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
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
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