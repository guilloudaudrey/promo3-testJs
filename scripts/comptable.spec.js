describe('class Comptable', () => {

    let comptable;

    beforeEach(() => {
        comptable = new Comptable();
        // let mockCalculette = {
        //     calcul: (a, b, operateur) => {
        //         return 4;
        //     }
        // }
        // comptable.calculette = mockCalculette;
        spyCalcul = jasmine.createSpy('calcul() spy');
        comptable.calculette.calcul = spyCalcul;
    })

    it('should return "en faillite"', () => {
        spyCalcul.and.returnValue(4);
        expect(comptable.getBenefices(100, 5, 100)).toBe('en faillite')
    })

    it('should return 4', () => {
        spyCalcul.and.returnValue(4);
        expect(comptable.getBenefices(100, 3, 100)).toBe(4)
        expect(spyCalcul).toHaveBeenCalledTimes(2);
    })
})