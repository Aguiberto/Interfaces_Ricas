import {describe, it, expect} from 'vitest'
import { filtrarPar } from './filtroPar'

describe('filtrarPar', () => {

    it('Deve retornar um array só com valores par', () => {

        let entrada : number[] = [8,3,9,5,6,12]
        let resultadoEsperado : number [] = [8,6,12]

        let resultado : number [] = filtrarPar(entrada)

        expect(resultado).toEqual(resultadoEsperado);

    });

});