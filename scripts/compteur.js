class Compteur {

    constructor() {
        this.compte = 0;
    }

    incremente() {
        return this.compte++;
    }

    decremente() {
        return this.compte--;
    }

    reset() {
        return this.compte = 0;
    }
}