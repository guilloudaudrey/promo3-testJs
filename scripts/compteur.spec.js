describe('class Compteur', () => {
    it('should be initialize to zero', () => {
        let compteur = new Compteur();
        expect(compteur.compte).toBe(0);
    })

    it('should increment compteur', () => {
        let compteur = new Compteur();
        compteur.incremente();
        expect(compteur.compte).toBe(1);
    });
    it('should decrement counter', () => {
        let compteur = new Compteur();
        compteur.decremente();
        expect(compteur.compte).toBe(-1);
    })

    it('should reset to zero', () => {
        let compteur = new Compteur();
        compteur.incremente();
        expect(compteur.compte).toBe(1);
        compteur.reset();
        expect(compteur.compte).toBe(0);
    })

    it('should increment counter two time', () => {
        let compteur = new Compteur();
        compteur.incremente();
        compteur.incremente();
        expect(compteur.compte).toBe(2);
    })
})