class GishatichEg extends KendaniEak {
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
        var datarkVandakner = this.yntrelVandak(1);
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3.1;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }
    bazmanal() {
        if (this.energy == 5) {
            this.energy++;
            var norVandak = random(this.yntrelVandak(3));
            if (norVandak) {
                var norgishatich = new Gishatich(norVandak[0], norVandak[1]);
                gishatich.push(norgishatich);
                if(Math.random() < 0.5){
                    matrix[norVandak[1]][norVandak[0]] = 3;
                }
                else{
                    matrix[norVandak[1]][norVandak[0]] = 3.1;
                }
                this.multiply = 0;
            }
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(2);
        var datarkVandakner = this.yntrelVandak(1);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3.1;
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
        