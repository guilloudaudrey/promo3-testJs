it('should be true', () => {
    expect(true).toBe(true);
});
describe('function add', () => {
    it('should add 2 + 2', () => {
        let resultat = add(2, 2)
        expect(resultat).toBe(4)
    });

    it('should add with negative numbers', () => {
        let resultat = add(-2, -2)
        expect(resultat).toBe(-4)
    });

    it('should concatenate if there are string params', () => {
        let resultat = add('bloup', 2)
        expect(resultat).toBe('bloup2')
    });

});