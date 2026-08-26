interface Poligono{

    calcularArea():number;
}

export class Circulo implements Poligono{

    raio: number;

    constructor (raio:number){
        this.raio = raio; 
    }

    calcularArea(): number {
        return Math.PI * (this.raio**2);
    }

    setRaio(novoRaio: number){
        this.raio = novoRaio;
    }
}

export class Quadrado implements Poligono{

    tamanhoLado: number;

    constructor(tamLado:number){
        this.tamanhoLado = tamLado;
    }

    calcularArea(): number {
        return this.tamanhoLado**2;
    }

    setTamLado(novoLado: number){
        this.tamanhoLado = novoLado;
    }
}