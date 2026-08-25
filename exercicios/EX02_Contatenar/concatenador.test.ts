import { describe, it, expect } from "vitest";
import { concatenador } from "./concatenador";

describe("concatenador", () =>{
    
    let arrei : string[] = ['Array', 'com', 'Typescript'];
    let resultadoEsperado: string = 'Array com Typescript';

    it("O array deve aparecer concatenado em uma string única", () => {

        let resultado = concatenador(arrei);
        expect(resultado).toBe(resultadoEsperado)
    });
});
