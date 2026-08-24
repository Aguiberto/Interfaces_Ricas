export function listaQuadradaSimples( lista :number[]){

    let lista_nova: number[] = [];
    for(let elementos of lista){
        lista_nova.push(elementos**2);
    }

    return lista_nova;

}


export function listaQuadradaAvancada(lista: number[]){

    let lista_nova: number[] = [];
    lista.forEach((elemento) => {lista_nova.push(elemento ** 2);});

    return lista_nova;
    
}


