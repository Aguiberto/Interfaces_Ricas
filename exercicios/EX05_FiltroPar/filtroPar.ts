export function filtrarPar(arrei: number[]){

    let arrei_par = arrei.filter((pares) => pares % 2 == 0)
    return arrei_par
}
