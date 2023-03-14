const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

//  Metodo Objetos

// const couponsObj = {
//     'Premio Oro': 30,
//     'Premio Plata': 25,
//     'Premio Bronce': 15,
// }


//Metodo arraysObjetos

const couponList = [];
couponList.push({
    name: 'Premio Oro',
    discount: 30,
})
couponList.push({
    name: 'Premio Plata',
    discount: 25,
})
couponList.push({
    name: 'Premio Bronce',
    discount: 15,
})
// couponList.push({
//     name: 'Premio Plata',
//     discount: 25,
// })
// couponList.push({
//     name: 'Premio Bronce',
//     discount: 30,
// })

function calcularPrecioConDescuento(){
    //Formula (P * (100-D)) / 100

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon) {
        pResult.innerText = 'Por favor llena el formulario ';
        return;
    }

    let discount;

    function isCouponInArray(couponElement) {
        return couponElement.name == coupon;
    }

    // const couponInArray = couponList.filter(isCouponInArray);// [{}]
    const couponInArray = couponList.find(isCouponInArray);// {}

    if (couponInArray) {
        discount = couponInArray.discount;
    }else {
        pResult.innerText = 'El cupón no es valido ';
        return;
    }

    // if (couponInArray.length > 0) {
    //     discount = couponInArray[0].discount;
    // }else {
    //     pResult.innerText = 'El cupón no es valido ';
    //     return;
    // }


    // if(couponsObj [coupon]) {
    //     discount = couponsObj [coupon];
    // }else {
    //     pResult.innerText = 'El cupón no es valido ';
    //     return;
    // }



    // switch(coupon){
    //     case 'Cesar_Hol':
    //         discount = 30;
    //         break;
    //     case 'No le digas a nadie':
    //         discount = 25;
    //         break;
    //     default:
    //         pResult.innerText = 'El cupón no es valido ';
    //         return;
    // }

    // if (coupon == 'Cesar_Hol'){
    //     discount = 30;
    // }else if (coupon == 'No le digas a nadie') {
    //     discount = 25;
    // }else {
    //     pResult.innerText = 'El cupón no es valido ';
    //     return;
    // }


    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $ ' +
    newPrice;
}