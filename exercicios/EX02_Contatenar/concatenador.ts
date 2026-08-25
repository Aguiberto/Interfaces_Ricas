
export function concatenador(arrei: string[]){

    // o retorno da função reduce vai para o primeiro parâmetro passado
    let resultado: string = arrei.reduce((texto, palavra) => texto + " " + palavra );

    return resultado
}
 

