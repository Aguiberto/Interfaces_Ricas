import { describe, it, expect } from "vitest";
import {Circulo, Quadrado} from './poligonos'

describe('Circulo, Quadrado', () => {

    it('Instanciação do Circulo e uso de seus métodos', () => {

        let circulo = new Circulo(5);
        circulo.setRaio(10)

        let novoRaio = 10
        expect(circulo.raio).toBe(novoRaio)

    });
});
