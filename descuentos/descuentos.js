const inputDiscount = document.querySelector('#discount');
const inputPrice = document.querySelector('#price');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento(){
    //Formula (P * (100-D)) / 100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    console.log(price, discount)

    if(!price || !discount) {
        pResult.innerText = 'Por favor llena el formulario ';
        return;
    }

    if(discount > 100){
        pResult.innerText = 'No se puede ';
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $ ' +
    newPrice;
}