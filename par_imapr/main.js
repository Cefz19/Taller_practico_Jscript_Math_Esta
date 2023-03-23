function esPar(lista) {
    return !(lista.length % 2);

}
function esImpar(lista) {
    return lista.length % 2;

}
function calcularModa(lista){
    const listaCoupt = {};

    for (let i = 0; i < lista.length; i++){
        const elemento = lista[i];

        if(listaCoupt[elemento]){
            listaCoupt[elemento] += 1;
        } else {
            listaCoupt[elemento] = 1; 
        }
    }
    const listaArray = Object.entries(listaCoupt);
    console.log(listaCoupt, listaArray);
}

function calcularMediana(listaDesordenada) {
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista);

    if(listaEsPar){
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = (lista.length / 2);
 
        // const mitad1ListaPar = lista[(lista.length / 2) - 1];
        // const mitad2ListaPar = lista[lista.length / 2];

        // lista[indexMitad1ListaPar]
        // lista[indexMitad2ListaPar]
        // [lista[indexMitad1ListaPar], lista[indexMitad2ListaPar]]
        // const listaMitades = [mitad1ListaPar, mitad2ListaPar];

        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);
        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;
    } else {
        const indexMitadListaImpar= Math.floor(lista.length / 2);
        const medianaListaImpar = lista [indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return lista[indexMitadListaImpar];

    }
}


function calcularPromedio(lista) {
    function sumarTodosElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;

}


function ordenarLista (listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor){
        //primera forma de resolucion
        // if (valorAcumulado > nuevoValor) {
        //     return 1;
        // } else if(valorAcumulado == nuevoValor){
        //     return 0;
        // } else if(valorAcumulado < nuevoValor){
        //     return -1;
        // }
        

        return valorAcumulado - nuevoValor;
        //segunda forma de resolucion
        // return nuevoValor - valorAcumulado;
        //return 5 - 10 -> -5;
        //retun  5 - 5 -> 0;
        //return 10 - 5 -> 5;
    }
    // const lista = listaDesordenada.sort(ordenarListaSort);
    const lista = listaDesordenada.sort((a,b) => a-b);

    return lista;
}