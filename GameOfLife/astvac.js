class Astvac extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
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
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 6;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(1));
        var norVandak1 = random(this.yntrelVandak(2));
        var norVandak2 = random(this.yntrelVandak(2.1));
        var norVandak3 = random(this.yntrelVandak(3));
        var norVandak4 = random(this.yntrelVandak(3.1));
        var norVandak5 = random(this.yntrelVandak(4));
        var norVandak6 = random(this.yntrelVandak(5));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 0;
            grassArr.splice(norVandak, 1);
            this.energy++;
        }
        else if (norVandak1) {
            matrix[norVandak1[1]][norVandak1[0]] = 0;
            xotaker.splice(norVandak1, 1);
            this.energy++;
        }
        else if (norVandak2) {
            matrix[norVandak2[1]][norVandak2[0]] = 0;
            xotakerEg.splice(norVandak2, 1);
            this.energy++;
        }
        else if (norVandak3) {
            matrix[norVandak3[1]][norVandak3[0]] = 0;
            gishatich.splice(norVandak3, 1);
            this.energy++;
        }
        else if (norVandak4) {
            matrix[norVandak4[1]][norVandak4[0]] = 0;
            gishatichEg.splice(norVandak4, 1);
            this.energy++;
        }
        else if (norVandak5) {
            matrix[norVandak5[1]][norVandak5[0]] = 0;
            vorsord.splice(norVandak5, 1);
            this.energy++;
        }
        else if (norVandak6) {
            matrix[norVandak6[1]][norVandak6[0]] = 0;
            mah.splice(norVandak, 1);
            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }
}