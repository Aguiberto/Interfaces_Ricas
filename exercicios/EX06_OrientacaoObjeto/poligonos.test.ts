import { describe, it, expect } from "vitest";
import {Circulo, Quadrado} from './poligonos'

describe('Circulo', () => {

    it('Instanciação do Circulo e modificação de atributo através de método', () => {

        let circulo = new Circulo(5);
        circulo.setRaio(10)

        let novoRaio = 10
        expect(circulo.raio).toBe(novoRaio)

    });

    it('Calculo da área do circulo', () => {

        let circulo = new Circulo(5)
        let areaCirculo = circulo.calcularArea()

        let resultadoEsperado = Math.PI * (circulo.raio * circulo.raio)
        expect(areaCirculo).toBe(resultadoEsperado)

    });


});

describe('Quadrado', () =>{

    it('Instaciação do Quadrado e modificação através de método', () => {

        let quadrado = new Quadrado(10);
        quadrado.setTamLado(5);

        let novoLado = 5;
        expect(quadrado.tamanhoLado).toBe(novoLado);

    });

    it('Calculo da área do Quadrado', () => {

        let quadrado = new Quadrado(4);
        let areaQuadrado = quadrado.calcularArea();

        let areaEsperada = 16
        expect(areaQuadrado).toBe(areaEsperada);

    });

});

