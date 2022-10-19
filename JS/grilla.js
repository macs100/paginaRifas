const numero = document.querySelector('.numero');
const grilla = document.querySelector('.grilla');
var listaNumeros = document.querySelectorAll('.numero');
console.log(listaNumeros);

var numerosNoVendidos = [61, 63, 70, 81, 82, 84, 97, 108, 110, 114, 126, 128, 130, 133, 136, 137, 138, 139, 146, 176, 177, 178, 179, 182, 186, 187, 188, 191, 193, 194, 198];
    
//pintar de blanco los no vendidos mediante adición de clases de "grilla.css"
for (let i = 1; i<=200; i++) {
    let numeroActual = document.getElementById(i);
    console.log(numeroActual.textContent);
    for (let j = 0; j<numerosNoVendidos.length; j++){
        if (numeroActual.textContent == numerosNoVendidos[j]) {
            console.log("Igual");
            numeroActual.classList.add('noVendido');
        }
    }
}


//pintar claros y oscuros mediante adición de clases
for (let i = 1; i<=200; i++) {
    let numeroActual = document.getElementById(i);
    if(numeroActual.classList.contains('noVendido') || numeroActual.classList.contains('noVendidoOscuro')){//si el número no está vendido
        if(i%10 == 0){
            if(String(i)[0] %2 == 0){
                numeroActual.classList.add('noVendido')
            } else  {numeroActual.classList.add('noVendidoOscuro');}
        }
        
        else if(i<100){

            if(String(i)[0]%2 == 0){
                if(i%2 == 0){
                    numeroActual.classList.add('noVendidoOscuro');
                } else {numeroActual.classList.add('noVendido');}
            }
        } else {
            if(i%10 == 0){
                if(String(i)[0] %2 == 0){
                    numeroActual.classList.add('noVendido')
                } else  {numeroActual.classList.add('noVendidoOscuro');}
            }
            else if(String(i)[1]%2 != 0){
                if(i%2 == 0){
                    numeroActual.classList.add('noVendido');
                } else {numeroActual.classList.add('noVendidoOscuro');}
            }
            
            else if(String(i)[1]%2 == 0){
                if(i%2 == 0){
                    numeroActual.classList.add('noVendidoOscuro');
                } else {numeroActual.classList.add('noVendido');}
            }
        }
    }else{ //si el numero ya está vendido
        if(i<100){
            if(i<11){
                if(i%2 != 0){
                    numeroActual.classList.add('vendido');
                } else {numeroActual.classList.add('vendidoOscuro');}
            }
            else if(i%10 == 0){
                if(String(i)[0] %2 == 0){
                    numeroActual.classList.add('vendido')
                } else  {numeroActual.classList.add('vendidoOscuro');}
            }
            else if(String(i)[0]%2 == 0){
                if(i%2 != 0){
                    numeroActual.classList.add('vendido');
                } else {numeroActual.classList.add('vendidoOscuro');}
            }
            else if(String(i)[0]%2 != 0){
                if(i%2 != 0){
                    numeroActual.classList.add('vendidoOscuro');
                } else {numeroActual.classList.add('vendido');}
            }
        } else if (i==100){
            numeroActual.classList.add('vendido');
        } else{
            if(i%10 == 0){
                if(String(i)[1] %2 == 0){
                    numeroActual.classList.add('vendido')
                } else  {numeroActual.classList.add('vendidoOscuro');}
            }
            else if(String(i)[1]%2 == 0){
                if(i%2 != 0){
                    numeroActual.classList.add('vendido');
                } else {numeroActual.classList.add('vendidoOscuro');}
            }
            else{
                if(i%2 != 0){
                    numeroActual.classList.add('vendidoOscuro');
                } else {numeroActual.classList.add('vendido');}
            }
        }
    }
}




