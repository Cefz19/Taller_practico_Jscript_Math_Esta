console.group('Cuadrado')

const ladoCuadrado  = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado; 

console.log(
    {
        ladoCuadrado,
        perimetroCuadrado,
        areaCuadrado
    }
)


function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area:lado * lado,

    }
}

console.groupEnd('Cuadrado')


console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularPerimetroTriangulo(side1, side2, base, altura) {
    return {
        perimetro: side1 + side2 + altura,
        area:(base * altura) / 2,

    }
}

function calculateHeightTriangle(side1, base){
    if(side1 == base) {
        console.warn('This is not a Triangle Isosceles');
    }else {
        // h = squareroot(side1**2 - (b**2)/4)
        return Math.sqrt((side1 ** 2) - ((base ** 2)) / 4);
    }
}
// Area = base * hipotenusa / 2
function scaleneTriangle(base, hipotenusa){
    return {
        area: (base * hipotenusa) / 2
    }
}


console.log(
    {
        ladoTriangulo1,
        ladoTriangulo2,
        ladoTrianguloBase,
        alturaTriangulo,
        perimetroTriangulo,
        areaTriangulo
    }
)
console.groupEnd('Triangulo')

console.group('Circle')

const radioCircle = 3;
const diameterCircle = radioCircle * 2;
const PI = 3.1415

const circumference = diameterCircle * PI;
const areaCircle = (radioCircle ** 2) * PI;

console.log({
    radioCircle,
    diameterCircle,
    PI,
    circumference,
    areaCircle,
})

function calculateCircle (radio){
    const diameter = radio *2;
    const radioSquared = Math.pow(radio, 2);
    return {
        circumference: diameter * Math.PI,
        area: radioSquared * Math.PI,
    }
}
console.groupEnd('Circle')