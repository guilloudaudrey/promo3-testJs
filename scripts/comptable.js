class Comptable {
    constructor(calculette) {
        this.calculette = calculette;
    }

    getBenefices(recettes, salaires, tva) {
        let recetteTaxee = this.calculette.calcul(recettes, tva, '/');
        if (recetteTaxee > salaires) {
            return this.calculette.calcul(recetteTaxee, salaires, '-')
        }
        return 'en faillite'
    }
}