const { describe } = require('yargs');
const Shapes = require('./shapes.js');

test('Shapes', () => {
    describe('Circle', () => {
        it('should make a cicle in SVG with the proper color', () => {
            const shape = new Shapes.Circle();
            shape.setColor('blue');
            expect(shape.renderShape()).toEqual("<circle cx='150' cy='100' r='80' fill='blue'/>")
        })
    })
    describe('Square', () => {
        it('should make a square in SVG with the proper color', () => {
            const shape = new Shapes.Square();
            shape.setColor('blue');
            expect(shape.renderShape()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
        })
    })
    describe('Triangle', () => {
        it('should make a triangle in SVG with the proper color', () => {
            const shape = new Shapes.Triangle();
            shape.setColor('blue');
            expect(shape.renderShape()).toEqual("<rect x='10' y='10' width='30' height='30' fill='blue'/>")
        })
    })
});
