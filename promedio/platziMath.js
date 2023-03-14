function calcularPromedio(lista) {
    // sumar todos los elementos del array / cantidad de elementos}

    // let sumaLista = 0;

//Primer Metodo

    // for( let i = 0; i < lista.length; i++ ) {
    //     sumaLista = sumaLista + lista[i];
    // }

//segunda metodo

    // function sumarTodosElementos(valorAcumulado, nuevoValor){
    //     return valorAcumulado + nuevoValor;
    // }

 //tercer metodo   

    // const sumarTodosElementos(valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;
    // const sumaLista = lista.reduce(sumarTodosElementos);

//cuarta metodo    
    const sumaLista = lista.reduce((a, b) => a + b);

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;

    //lista.length
}