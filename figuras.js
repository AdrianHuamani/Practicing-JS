

//FORMULAS PARA EL CUADRADO

function calcularPerimetroCuadrado(){
    const ladoCuadrado=(document.getElementById("InputLado")).value;
    const perimetro=redondear(ladoCuadrado*4,2);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const ladoCuadrado=(document.getElementById("InputLado")).value;
    const area=redondear(ladoCuadrado*ladoCuadrado,2);
    alert(area);
}
//FORMULAS PARA EL TRIANGULO

function calcularPerimetroTriangulo(){
    const base=document.getElementById("InputBase").value;
    const lado1=document.getElementById("InputLado1").value;
    const lado2=document.getElementById("InputLado2").value;
    const perimetro=redondear((Number(base+lado1+lado2)),2);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base=(document.getElementById("InputBase").value);
    const altura=(document.getElementById("InputAltura").value);
    const area=redondear((base*altura)/2,2);
    alert(area);
}

function calcularAlturaIsosceles(){
    const base=(document.getElementById("InputBase").value);
    const lado1=(document.getElementById("InputLado1").value);
    const lado2=(document.getElementById("InputLado2").value);
    if (lado1==lado2) {
        const altura=redondear(Math.sqrt(Math.pow(lado1,2)-(Math.pow(base,2)/4)),2);
        alert(altura);
    } else {
        alert("No es un triangulo Isosceles");
    }
}

//FORMULA PRA EL CIRCULO

function calcularCircunferencia(){
    const radio=(document.getElementById("InputRadio").value);
    const circunferencia=redondear(2*Math.PI*radio,2);
    alert(circunferencia);
}

function calcularAreaCirculo(){
    const radio=(document.getElementById("InputRadio").value);
    const area=redondear(Math.PI*radio*radio,2);
    alert(area);
}

//FUNCION REDONDEAR

function redondear(numero,decimales){
    const aux=Math.pow(10,decimales);
    return Number(Math.round(numero*aux))/aux;
}