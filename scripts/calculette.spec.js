describe('class Calculette', () => {
    let calculette;

    beforeEach(() => {
        calculette = new Calculette();
    })

    it('should add 2 to 1', () => {
        expect(calculette.calcul(2, 1, '+')).toBe(3);
    })

    it('should substract 2 to 1', () => {
        expect(calculette.calcul(2, 1, '-')).toBe(1);
    })

    it('should multiply 2 to 1', () => {
        expect(calculette.calcul(2, 1, '*')).toBe(2);
    })

    it('should divide 2 from 1', () => {
        expect(calculette.calcul(2, 1, '/')).toBe(2);
    })
})