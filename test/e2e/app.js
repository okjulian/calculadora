(function () {
    'use strict';

    describe('App', function () {
        beforeEach(function () {
            browser().navigateTo('/');
        });

        it('no deberia redireccionar', function () {
            expect(browser().location().url()).toBe('');
        });
        
        it('deberia tener un elemento calculadora', function () {
            expect(element('.calculadora').count()).toBe(1);
        });
    });

}());