describe('class Compteur', () => {
    let compteur;

    beforeEach(() => {
        compteur = new Compteur();
    })

    it('should be initialize to zero', () => {

        expect(compteur.compte).toBe(0);
    })

    it('should increment compteur', () => {

        compteur.incremente();
        expect(compteur.compte).toBe(1);
    });
    it('should decrement counter', () => {

        compteur.decremente();
        expect(compteur.compte).toBe(-1);
    })

    it('should reset to zero', () => {

        compteur.incremente();
        expect(compteur.compte).toBe(1);
        compteur.reset();
        expect(compteur.compte).toBe(0);
    })

    it('should increment counter two time', () => {

        compteur.incremente();
        compteur.incremente();
        expect(compteur.compte).toBe(2);
    })
})