const reverseString = function(str1) {
    array1 = str1.split("");  // convierte el string en un arreglo donde cada letra del string sera un elemento indexable del arreglo esto gracias a especificar "" ningun separador en el metodo split()
    array1 = array1.reverse();  //Ahora que tenemos un arreglo podemos trabajar con el metodo reverse()
    array1 = array1.join("");  //Ya logramos dar vuelta el arreglo, ahora necesitamos convertirlo a string nuevamente pero especificamos que el separador en "" (nada)
    return array1;  //devolvemos un string a la llamada de la funcion

};
array = reverseString(''); //enviamos hello obtenemos olleh

// Do not edit below this line
module.exports = reverseString;
