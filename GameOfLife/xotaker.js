class Xotaker extends KendaniEak {
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
   /* bazmanal() {
        if (this.energy == 3) {
            this.energy++;
            var norVandak = random(this.yntrelVandak(0));
            var norVandak = random(this.yntrelVandak(2.1));
            if (norVandak) {
                var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                xotaker.push(norXotaker);
                if(Math.random() < 0.5){
                    matrix[norVandak[1]][norVandak[0]] = 2; 
                }
                else{
                    matrix[norVandak[1]][norVandak[0]] = 2.1;
                }
                this.multiply = 0;
            }
        }
    }*/
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
class XotakerEg extends Xotaker {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
    }
    
    bazmanal() {
        if (this.energy == 1) {
            this.energy--;
            var norVandak = random(this.yntrelVandak(0));
            var norVandak = random(this.yntrelVandak(2));
            if (norVandak) {
                var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                xotaker.push(norXotaker);
                if(Math.random() < 0.5){

                    matrix[norVandak[1]][norVandak[0]] = 2;
                }
                else{
                    matrix[norVandak[1]][norVandak[0]] = 2.1;
                }
                this.multiply = 0;
            }
        }
    }

}



