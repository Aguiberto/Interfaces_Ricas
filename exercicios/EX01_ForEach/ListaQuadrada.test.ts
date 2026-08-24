import {describe, it, expect} from 'vitest';
import {listaQuadradaSimples, listaQuadradaAvancada} from './ListaQuadrada'

describe('ListaQuadradaSimples', () => {

    const entrada = [3,5,7,3,8,9,1];
    const resultadoEsperado = [9,25,49,9,64,81,1];

    it('deve retornar uma lista com o quadrado de cada elemento',() => {

        const resultado = listaQuadradaSimples(entrada);
        expect(resultado).toEqual(resultadoEsperado);

    });

    it('deve retornar uma lista com o quadrado de cada elemento',() => {

        const resultado = listaQuadradaAvancada(entrada);
        expect(resultado).toEqual(resultadoEsperado);

    })
    
});

