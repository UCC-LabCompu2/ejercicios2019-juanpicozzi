/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function convertir(id_elem, valor_elem) {
    if(isNaN(valor_elem)){
        alert("El valor de "+id_elem+" debe ser numerico.");
        document.getElementById(id_elem).value = "";
    }
    if(!isNaN(valor_elem)){
        if(id_elem=='metro'){
            document.getElementById("pulgada").value = valor_elem*39.3701;
        }
        if(id_elem==''){

        }
    }
}

function suma () {
    document.opeMat.sum_total.value = Number(document.opeMat.sum_num1.value) + Number(document.opeMat.sum_num2.value);
}

function resta () {
    document.opeMat.res_total.value = Number(document.opeMat.res_num1.value) - Number(document.opeMat.res_num2.value);
}

function multiplicacion () {
    document.opeMat.mul_total.value = Number(document.opeMat.mul_num1.value) * Number(document.opeMat.mul_num2.value);
}

function division () {
    document.opeMat.div_total.value = Number(document.opeMat.div_num1.value) / Number(document.opeMat.div_num2.value);
}