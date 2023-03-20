const app = document.getElementById('app');
const btnEjecutar = document.getElementById('btn-ejecutar');
const btnReset = document.getElementById('btn-reset');
const divEnunciado = document.getElementById('enunciado');

const arrayVacio = [];
let promedios = {}
let num;
let num1;
let num2;
let num3;
let num4;
let resultado;
let booleano = true;

const createParrafo = (text) => `<p>${text}</p>`;
const createLabel = (text, para, id) => `<label for="${para}" id="${id}">${text}</label>`;
const createButtonPrimary = (text, id) => `<button class="btn btn-primary" id="${id}">${text}</button>`;
const createButtonDanger = (text, id) => `<button class="btn btn-danger" id="${id}">${text}</button>`;
const createButtonSuccess = (text, id) => `<button class="btn btn-success"id="${id}">${text}</button>`;
const createInput = (tipo, id) => `<input type="${tipo}" id="${id}">`;
const createSelect = (nombre, id) => `<select class="form-select-sm" name="${nombre}" id="${id}"></select>`
const createOption = (valor, text) => `<option value=${valor}>${text}</option>`;

const decirNombre = (nombre) => alert(`Hola ${nombre}`);

const saludar = (nombre) => `Hola ${nombre}`;

const sumar = (a, b) =>  a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => a / b;

const calcular = (operacion, a, b) => {    
    switch (operacion) {
        case '+':
            return sumar(a, b);
            break;
        case '-':
            return restar(a, b);
            break;
        case '*':
            return multiplicar(a, b);
            break;
        case '/':
            return dividir(a, b);
            break;    
        default:
            return null;
            break;
    }
}

const promedioDeTres = (a, b, c) => (a + b +c) / 3

const contarHasta = (numero) => {
    for (let i = 1; i <= numero; i++) {        
        console.log(i);
    }
}

const obtenerNombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`

const convertirHorasEnSegundos = horas => horas * 60 * 60;

const eUno = () => {
    for (let i = 1; i <= 10; i++) {                
        app.innerHTML += createParrafo(i);                     
    }
}

const eDos = () => {
    for (let i = 2; i <= 20; i+= 2) {         
        app.innerHTML += createParrafo(i);        
    }
}

const eTres = () => {
    for (let i = 1; i <= 19; i+= 2) {        
        app.innerHTML += createParrafo(i);        
    }
}

const eCuatro = () => {
    for (let i = 10; i >= 1; i--) {        
        app.innerHTML += createParrafo(i);       
    }
}

const eCinco = () => {
    for (let i = 1; i <= 10; i++) {
        if (i <= 5) {
            app.innerHTML += createParrafo(i);    
        }                       
    }    
}

const eSies = () => {
    for (let i = 1; i <= 10; i++) {
        if (i != 5) {
            app.innerHTML += createParrafo(i);   
        }                       
    }
}

const eSiete = () => {
    app.innerHTML += createLabel('Ingrese su Nombre: ' , 'input-7', 'label-7');
    app.innerHTML += createInput('text', 'input-7')
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-7');

    document.getElementById('btn-7').addEventListener('click', () => {
        let nombre = document.getElementById('input-7').value;
        decirNombre(nombre);
    });
}

const eOcho = () => {
    app.innerHTML += createLabel('Ingrese su Nombre: ', 'input-8', 'label-8');
    app.innerHTML += createInput('text', 'input-8')
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-8');
    
    document.getElementById('btn-8').addEventListener('click', () => {
        let nombre = document.getElementById('input-8').value;
        alert(saludar(nombre));
    });
}

const eNueve = () => {
    app.innerHTML += createLabel('Ingrese un número: ', 'input-9', 'label-9');
    app.innerHTML += createInput('text', 'input-9');
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-9'); 
    
    const label = document.getElementById('label-9');
    const button = document.getElementById('btn-9');
    const input = document.getElementById('input-9');
    
    button.addEventListener('click', () => { 
                 
        if (isNaN(input.value) || input.value == '') {
            alert('debes ingresar solo números');
            input.value = '';
        } else {
            if (!booleano){
                num2 = Number(input.value);                
                resultado = sumar(num1, num2);            
                input.style.display = 'none';
                button.style.display = 'none';
                label.style.display = 'none';
                app.innerHTML += createParrafo(`Resultado de ${num1} + ${num2} = ${resultado}`);
            }
            num1 = Number(input.value);
            booleano = false;
            input.value = '';
            label.innerText = 'Ingrese otro número: ';
            button.innerText = 'Sumar';                   
        }        
    });
}

const eDiez = () => {
    app.innerHTML += createLabel('Ingrese un número: ', 'input-9', 'label-10');
    app.innerHTML += createInput('text', 'input-10');
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-10'); 
    
    let button = document.getElementById('btn-10');
    let input = document.getElementById('input-10');
    let label = document.getElementById('label-10');    
    
    button.addEventListener('click', () => {                
        if (isNaN(input.value) || input.value == '') {
            alert('debes ingresar solo números');
            input.value = '';
        } else {
            if (!booleano){
                let num2 = Number(input.value);                
                let resultado = restar(num1, num2);
                input.style.display = 'none';
                button.style.display = 'none';
                label.style.display = 'none';            
                app.innerHTML += createParrafo(`Resultado de ${num1} + ${num2} = ${resultado}`);
                button.disabled = true;
            }
            num1 = Number(input.value);
            booleano = false;            
            input.value = '';
            label.innerText = 'Ingrese otro número: ';
            button.innerText = 'Restar';                   
        }      
    });    
}

const eOnce = () => {
    app.innerHTML += createLabel('Ingrese un número: ', 'input-11', 'label-11');
    app.innerHTML += createInput('text', 'input-11');
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-11');
    app.innerHTML += createSelect('operaciones', 'operador');    
    
    let label = document.getElementById('label-11');
    let input = document.getElementById('input-11');
    let button = document.getElementById('btn-11');    
    let operador = document.getElementById('operador');
    operador.innerHTML += createOption('+', '+ Sumar');
    operador.innerHTML += createOption('-', '- Restar');
    operador.innerHTML += createOption('*', '* Multiplicar');
    operador.innerHTML += createOption('/', '/ Dividir');
    
    button.addEventListener('click', () => {        
        if (isNaN(input.value) || input.value == '') {
            alert('debes ingresar solo números');
            input.value = '';
        } else {
            let op = operador.value;
            if (!booleano){                
                let num2 = Number(input.value);            
                input.style.display = 'none';
                button.style.display = 'none';
                label.style.display = 'none';                
                let resultado = calcular(op, num1, num2);           
                app.innerHTML += createParrafo(`${num1} ${op} ${num2} = ${resultado}`);
                button.disabled = true;
            }
            num1 = Number(input.value);
            booleano = false;            
            input.value = '';
            label.innerText = 'Ingrese otro número: ';
            button.innerText = `${op}`;
            operador.style.display = 'none';
                               
        }           
    });
}

const eDoce = () => {
    app.innerHTML += createLabel('Ingrese un número: ', 'input-12', 'label-12');
    app.innerHTML += createInput('text', 'input-12');
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-12');
    
    let button = document.getElementById('btn-12');
    let input = document.getElementById('input-12');

    button.addEventListener('click', () => {
        if (isNaN(input.value)) {
            alert('debes ingresar solo números');
            input.value = '';
        } else {
            let num1 = Number(input.value);
            input.value = '';
            contarHasta(num1);        
        }
    });
}

const eTrece = () => {
    app.innerHTML += createButtonSuccess('Ejecutar', 'btn-13');

    let button = document.getElementById('btn-13');

    button.addEventListener('click', () => {
        while (prompt('¿Deseas usar la calculadora?') === 'si') {
            num1 = Number(prompt('Ingrese un número: '));
            console.log(typeof(num1));
            while (isNaN(num1)) {
                alert('Debes ingresar Números');
                num1 = Number(prompt('Ingrese un número: '));
            }        
            num2 = Number(prompt('Ingrese otro número'));
            while (isNaN(num2)){
                alert('Debes ingresar Números');
                num2 = Number(prompt('Ingrese otro número'));
            }        
            let op = prompt('¿Que operación desea realizar? (+,-,*,/): ');
            while (!op == '+' || !op == '-' || !op == '*' || !op == '/' ) {            
                alert('Operador incorrecto');
                op = prompt('¿Que operación desea realizar? (+,-,*,/): ');
            }
            alert(calcular(op, num1, num2));      
        }
    });  
}

const eCatorce = () => {
    let contador = 1;
    let serie = 0;
    while (contador < 25) {
        serie += 11;
        contador++;
        app.innerHTML += createParrafo(serie);      
        console.log(serie);
    }    
}

const eQuince = () => {
    let contadorPares = 0;
    let contadorImpares = 0;
    let contador = 1;

    app.innerHTML += createLabel(`Ingrese 5 números`, 'input-15', 'label-15');
    app.innerHTML += createInput('text', 'input-15');
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-15');

    let button = document.getElementById('btn-15');
    let input = document.getElementById('input-15');
    let label = document.getElementById('label-15');
    let p = document.createElement('p');

    button.addEventListener('click', () => {        
        if (isNaN(input.value) || input.value == '') {
            alert('debes ingresar solo números');
            input.value = '';
        } else {            
            label.innerText = `Ingrese ${5 - contador} números`;
            num = Number(input.value);                      
            arrayVacio.push(num);
            (num % 2) == 0 ? contadorPares++ : contadorImpares++;
            p.innerText = `Ingresados: ${arrayVacio} | Pares: ${contadorPares} | Impares: ${contadorImpares}`;    
            app.appendChild(p);
            if(contador == 5){                
                input.disabled= true;
                button.disabled = true;
                label.style.display = 'none';                
                input.style.display = 'none';
                button.style.display = 'none';                              
            }   
            contador++;                  
            input.value = '';                                              
        }
    });   
}

const eDieciseis = () => {
    let contador = 1;
    let AlturaTotal = 0;
    let promedio = 0;

    app.innerHTML += createLabel(`Ingrese la altura de 5 personas: `, 'input-16', 'label-16');
    app.innerHTML += createInput('text', 'input-16');
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-16');

    let button = document.getElementById('btn-16');    
    let input = document.getElementById('input-16');
    let label = document.getElementById('label-16');
    let p = document.createElement('p');

    button.addEventListener('click', () => {        
        
        if (isNaN(input.value) || input.value == '') {
            alert('La altura tiene que ser solo números');
            input.value = '';           
        }else {
            label.innerText = `Ingrese la altura de ${5 - contador} personas: `;
            num = Number(input.value);                      
            arrayVacio.push(num);
            AlturaTotal += num;
            promedio = AlturaTotal / contador;
            p.innerText = `Ingresados: ${arrayVacio} | Altura Total: ${AlturaTotal} | Promedio de altura: ${promedio}`;
            app.appendChild(p);

            if (contador == 5) {           
                input.disabled= true;
                button.disabled = true;
                label.style.display = 'none';
                input.style.display = 'none';
                button.style.display = 'none';               
            }
            input.value = '';
            contador++;          
        }                                 
    });
}

const promediosEstudiantes = (turno, cantidad, contenedor) => {
    return new Promise((resolve, reject) => {
        let contador = 1;
        let total = 0;
        let promedio = 0;
        let arreglo = [];

        contenedor.innerHTML += createLabel(`Ingrese la edad de ${cantidad} estudiantes, del turno ${turno}: `, `input-${turno}`, `label-${turno}`);
        contenedor.innerHTML += createInput('text', `input-${turno}`);
        contenedor.innerHTML += createButtonSuccess('Ingresar', `btn-${turno}`);
        contenedor.innerHTML += createLabel(``, ``, `label2-${turno}`);

        let button = document.getElementById(`btn-${turno}`);
        let input = document.getElementById(`input-${turno}`);
        let label = document.getElementById(`label-${turno}`);
        let label2 = document.getElementById(`label2-${turno}`); 
        
        button.addEventListener('click', () => {        
            
            if (isNaN(input.value) || input.value == '') {
                alert('La edad tiene que ser solo números');
                input.value = '';           
            } else {
                label.innerText = `Ingrese la edad de ${cantidad - contador} estudiantes del turno ${turno}: `;
                num = Number(input.value);                      
                arreglo.push(num);
                total += num;
                promedio = total / contador;
                label2.innerText = `Ingresados: ${arreglo} | edad Total: ${total} | Promedio de edad: ${promedio}`;
                    
                if (contador == cantidad) {                 
                    input.disabled= true;
                    button.disabled = true;
                    label.style.display = 'none';
                    input.style.display = 'none';
                    button.style.display = 'none';
                    promedios[turno] = promedio;
                    resolve(); 
                }
                input.value = '';
                contador++;          
            }                                 
        }); 
    });
}

const eDiecisiete = () => {    
    let turnoManana = document.createElement('div');
    turnoManana.setAttribute('class', 'prom-estudiantes');
    app.appendChild(turnoManana);
    let turnoTarde = document.createElement('div');
    turnoTarde.setAttribute('class', 'prom-estudiantes');
    app.appendChild(turnoTarde);
    let turnoNoche = document.createElement('div');
    turnoNoche.setAttribute('class', 'prom-estudiantes');
    app.appendChild(turnoNoche); 

    const promesas = [
        promediosEstudiantes('Mañana', 5, turnoManana),
        promediosEstudiantes('Tarde', 6, turnoTarde),
        promediosEstudiantes('Noche', 11, turnoNoche)
    ];
    Promise.all(promesas).then(() => {
        let maxPromedio = 0;
        let turnoMaxPromedio;
        for (let turno in promedios) {
            if (promedios[turno] > maxPromedio) {
                maxPromedio = promedios[turno];
                turnoMaxPromedio = turno;
            }
        }
        app.innerHTML += createParrafo(`El turno con el promedio más alto es ${turnoMaxPromedio} con un promedio de ${maxPromedio}`);
        console.log(`El turno con el promedio más alto es ${turnoMaxPromedio} con un promedio de ${maxPromedio}`);
    })
    .catch((error) => {
        console.error(`Se produjo un error: ${error}`);
    });
}

const eDieciocho = () => {
    let valores = 10;
    let arrayEnteros = [];
    let arrayNegativos = [];
    let arrayPositivos = [];
    let arrayMultiploQuince = [];
    let totalPares = 0;

    app.innerHTML += createLabel(`Ingrese ${valores} valores enteros: `, 'input-19', 'label-19');
    app.innerHTML += createInput('text', 'input-19');
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-19');

    let button = document.getElementById('btn-19');    
    let input = document.getElementById('input-19');
    let label = document.getElementById('label-19');
    let parrafo = document.createElement('p');
    app.appendChild(parrafo);

    button.addEventListener('click', () =>{
        if (isNaN(input.value) || input.value == '') {
            alert('Los valores tienen que ser solo números');
            input.value = '';           
        } else {
            valores--;
            label.innerText = `Ingrese ${valores} valores enteros: `;             
            num = parseInt(input.value);                      
            arrayEnteros.push(num);

            if (num < 0) {
                arrayNegativos.push(num);   
            }            
            if (num > 0) {
                arrayPositivos.push(num);    
            }
            if ((num % 15) == 0) {
                arrayMultiploQuince.push(num);
            }             
            if ((num % 2) == 0) {
                totalPares += num;
            }                    
           
            parrafo.innerText = `Ingresados: ${arrayEnteros} | Negativos: ${arrayNegativos} | Positivos: ${arrayPositivos} | Multiplos de quince: ${arrayMultiploQuince} | Total acumulado de pares: ${totalPares} `;
                
            if (valores == 0) {                 
                input.disabled= true;
                button.disabled = true;
                label.style.display = 'none';
                input.style.display = 'none';
                button.style.display = 'none';

            }            
            input.value = '';                     
        }
    })
}

const eDiecinueve = () => {
    let triangulos = 4;
    let ladosTriangulos = [];    
    let cantidadquilatero = 0;
    let cantidadIsosceles = 0;
    let cantidadEscaleno = 0;
    let lados = 0;
    let a = 0;
    let b = 0;
    let c = 0;

    app.innerHTML += createLabel(`Triangulo N°${triangulos}. Ingrese el valor de sus lados ${3 - lados} restantes: `, 'input-19', 'label-19');
    app.innerHTML += createInput('text', 'input-19');
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-19');

    let button = document.getElementById('btn-19');    
    let input = document.getElementById('input-19');
    let label = document.getElementById('label-19');
    let parrafo = document.createElement('p');
    app.appendChild(parrafo);

    button.addEventListener('click', () =>{
        if (isNaN(input.value) || input.value == '') {
            alert('Los angulos tienen que ser solo números');
            input.value = '';           
        } else {            
            if (a == 0) {
                a = Number(input.value);
                lados++;
                input.value = '';
                console.log(`lado a: ${a}`);
                label.innerText = `Triangulo N°${triangulos}. Ingrese el valor de sus lados ${3 - lados} restantes: `    
            } else if (b == 0) {
                b = Number(input.value);                
                lados++;
                input.value = '';
                console.log(`lado b: ${b}`);
                label.innerText = `Triangulo N°${triangulos}. Ingrese el valor de sus lados ${3 - lados} restantes: ` 
            } else {
                c = Number(input.value);                                
                console.log(`lado c: ${c}`);
                input.value = '';                
                lados = 0;

                if ((a + b + c) == 180) {
                    ladosTriangulos.push(a)
                    ladosTriangulos.push(b)
                    ladosTriangulos.push(c)
                    if(a == b && a == c) cantidadquilatero++
                    if((a == b && a != c) || ( c == b && c!=a)) cantidadIsosceles++
                    if(a != b && a != c && c != b) cantidadEscaleno++
                    triangulos--;   
                } else {
                    alert('Angulos proporcionados incorrectos');
                }
                
                a=0
                b=0
                c=0
                label.innerText = `Triangulo N°${triangulos}. Ingrese el valor de sus lados ${3 - lados} restantes: ` 
            
                if (triangulos == 0) {                 
                    input.disabled= true;
                    button.disabled = true;
                    label.style.display = 'none';
                    input.style.display = 'none';
                    button.style.display = 'none';
                    parrafo.innerText = `Lados Ingresos: ${ladosTriangulos}.| Equilateros: ${cantidadquilatero}.| Isosceles: ${cantidadIsosceles}.| Escaleno: ${cantidadEscaleno}`;                   
                }                
                
            }                          
        }
    })
}

const eVeinte = () => {
    app.innerHTML += createLabel('Ingrese el primer número: ', 'input-20', 'label-20');
    app.innerHTML += createInput('text', 'input-20');
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-20');
    
    let button = document.getElementById('btn-20');
    let input = document.getElementById('input-20');
    let label = document.getElementById('label-20');
    let parrafo = document.createElement('p');
    app.appendChild(parrafo);

    resultado = '';

    button.addEventListener('click', () => {
        if (isNaN(input.value) || input.value == '') {
            alert('solo números');
            input.value = '';           
        } else {
            if (booleano) {
                num1 = Number(input.value);
                input.value = '';
                booleano = false
                label.innerText = 'Ingrese el segundo número: ';
            } else {
                if (input.value > num1) {
                    num2 = Number(input.value);
                    input.disabled = booleano;
                    button.disabled = booleano;
                    label.style.display = 'none';
                    input.style.display = 'none';
                    button.style.display = 'none';
                    parrafo.innerText = `Primer número: ${num1}. Segundo Número: ${num2}`
                    for (let index = num1; index <= num2; index++) {
                        resultado += `${String(index)} `
                        
                    }
                    let pe = document.createElement('p');
                    pe.innerText = resultado;
                    app.appendChild(pe);                    

                }else {
                    alert('El segundo número tiene que ser mas grande que el primero');
                }                                   
            }           
        }
    })
}

const eVeintiuno = () => {
    let valores = 3;

    app.innerHTML += createLabel(`Ingrese el número N°${valores}: `, 'input-21', 'label-21');
    app.innerHTML += createInput('text', 'input-21');
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-21');
    
    let button = document.getElementById('btn-21');
    let input = document.getElementById('input-21');
    let label = document.getElementById('label-21');
    let parrafo = document.createElement('p');
    app.appendChild(parrafo);
    
    button.addEventListener('click', () => {
        if (isNaN(input.value) || input.value == '') {
            alert('solo números');
            input.value = '';           
        } else {
            if (valores == 3) {
                num = Number(input.value);
                input.value = '';
                valores--
                label.innerText = `Ingrese el número N°${valores}: `;
            } 
            else if (valores == 2) {
                num2 = Number(input.value);
                input.value = '';
                valores--;
                label.innerText = `Ingrese el número N°${valores}: `;
            }else if(valores == 1) {
                num1 = Number(input.value);
                valores--;
                resultado = promedioDeTres(num, num1, num2);
                input.disabled = booleano;
                button.disabled = booleano;
                label.style.display = 'none';
                input.style.display = 'none';
                button.style.display = 'none';
                parrafo.innerText = `Ingresados: ${num}, ${num2}, ${num1}. | Promedio: ${resultado}`;                                  
            }           
        }
    })
}

const eVeintidos = () => {
    let valores = 5;

    app.innerHTML += createLabel(`Ingrese el número N°${valores}: `, 'input-22', 'label-22');
    app.innerHTML += createInput('text', 'input-22');
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-22');
    
    let button = document.getElementById('btn-22');
    let input = document.getElementById('input-22');
    let label = document.getElementById('label-22');
    let parrafo = document.createElement('p');
    app.appendChild(parrafo);
    
    button.addEventListener('click', () => {
        if (isNaN(input.value) || input.value == '') {
            alert('solo números');
            input.value = '';           
        } else {
            switch (valores) {
                case 5:
                    num = Number(input.value);
                    input.value = '';
                    valores--
                    label.innerText = `Ingrese el número N°${valores}: `;
                    break;
                case 4:
                    num4 = Number(input.value);
                    input.value = '';
                    valores--
                    label.innerText = `Ingrese el número N°${valores}: `;
                    break;
                case 3:
                    num3 = Number(input.value);
                    input.value = '';
                    valores--
                    label.innerText = `Ingrese el número N°${valores}: `;
                    break;
                case 2:
                    num2 = Number(input.value);
                    input.value = '';
                    valores--
                    label.innerText = `Ingrese el número N°${valores}: `;
                    break;
                case 1:
                    num1 = Number(input.value);
                    input.value = '';
                    valores--;
                    label.innerText = `Ingrese el número N°${valores}: `;
                    break;                 
                default:
                    break;
            }
            if (valores == 0) {
                resultado = num + num1 + num2 + num3 + num4;
                input.disabled = booleano;
                button.disabled = booleano;
                label.style.display = 'none';
                input.style.display = 'none';
                button.style.display = 'none';
                parrafo.innerText = `Ingresados: ${num} + ${num4} + ${num3} + ${num2} + ${num1} = ${resultado}`; 
            }         
        }
    })
}

const eVeintitres = () => {
    app.innerHTML += createLabel('Ingrese una palabra: ', 'input-23', 'label-23');
    app.innerHTML += createInput('text', 'input-23');
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-23');
    
    let button = document.getElementById('btn-23');
    let input = document.getElementById('input-23');
    let label = document.getElementById('label-23');
    let parrafo = document.createElement('p');
    app.appendChild(parrafo);
    
    button.addEventListener('click', () => {        
        if (input.value == '') {
            alert('Ingrese una palabra');
        } else {
            input.disabled = booleano;
            button.disabled = booleano;
            label.style.dislay = 'none';            
            input.style.display = 'none';
            button.style.display = 'none';
            resultado = '!';
            resultado += input.value;
            resultado += '¡'
            parrafo.innerText = resultado;            
        }
        
    })
}
const eVeinticuatro = () => {
    app.innerHTML += createLabel('Ingrese un nombre: ', 'input-24', 'label-24');
    app.innerHTML += createInput('text', 'input-24');
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-24');
    
    let button = document.getElementById('btn-24');
    let input = document.getElementById('input-24');
    let label = document.getElementById('label-24');
    let parrafo = document.createElement('p');
    app.appendChild(parrafo);
    let nombre;
    let apellido;
    button.addEventListener('click', () => {        
        if (input.value == '') {
            alert('No puede estar vacio');
        } else {
            if (booleano) {
                nombre = input.value;
                label.innerText = 'Ingrese un apellido: ';
                input.value = '';
                booleano = false;    
            } else if (!booleano) {
                apellido = input.value;                
                input.disabled = !booleano;
                button.disabled = !booleano;
                label.style.display = 'none';            
                input.style.display = 'none';
                button.style.display = 'none';
                resultado = obtenerNombreCompleto(nombre, apellido);
                parrafo.innerText = resultado;
            }                        
        }        
    })
}

const eVeinticinco = () => {
    app.innerHTML += createLabel('Ingrese cantidad de horas a convertir a segundo: ', 'input-25', 'label-25');
    app.innerHTML += createInput('text', 'input-25');
    app.innerHTML += createButtonSuccess('Ingresar', 'btn-25');
    
    let button = document.getElementById('btn-25');
    let input = document.getElementById('input-25');
    let label = document.getElementById('label-25');
    let parrafo = document.createElement('p');
    app.appendChild(parrafo);
    
    button.addEventListener('click', () => {        
        if (isNaN(input.value) || input.value == '') {
            alert('solo números');
            input.value = '';           
        } else {
            num = input.value;
            input.disabled = booleano;
            button.disabled = booleano;
            label.style.display = 'none';            
            input.style.display = 'none';
            button.style.display = 'none';
            resultado = convertirHorasEnSegundos(num);
            parrafo.innerText = `${num}hs son ${resultado} segundos.`;                       
        }        
    })
}

const selector = () => {
    const value = parseInt(document.getElementById('selector').value);    
    let enunciado = '';        
    switch (value) {
        case 1:
            enunciado = 'Imprime los números del 1 al 10:';            
            eUno();
            break;
        case 2:
            eDos();
            enunciado = 'Imprime los números pares del 2 al 20:';
            break;
        case 3:
            eTres();
            enunciado = 'Imprime los números impares del 1 al 19:'; 
            break;
        case 4:
            eCuatro();
            enunciado = 'Imprime los números del 10 al 1 en orden inverso:'; 
            break;
        case 5:
            eCinco();
            enunciado = 'Imprime los números del 1 al 10, pero se detiene al llegar al 5:'; 
            break;
        case 6:
            eSies();
            enunciado = 'Imprime los números del 1 al 10, pero salta el 5:'; 
            break;
        case 7:
            eSiete();
            enunciado = 'Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre:'; 
            break;
        case 8:
            eOcho();
            enunciado = 'Crea una función llamada saludar(nombre) y nos devuelva un string “Hola “ + nombre y luego invoca la función dentro de una alerta:'; 
            break;
        case 9:
            eNueve();
            enunciado = 'Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b:'; 
            break;
        case 10:
            eDiez();
            enunciado = 'Crea una función llamada restar(a,b) y nos devuelva la resta de a y b:'; 
            break;
        case 11:
            eOnce();
            enunciado = 'Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null'; 
            break;
        case 12:
            eDoce();
            enunciado = 'Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola'; 
            break;
        case 13:
            eTrece();
            enunciado = 'Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI” ejecutaras el siguiente algoritmo. Solícita al usuario un número, otro número y una operación, luego con los valores ingresados ejecuta la función calcular para mostrar el resultado por alerta. Una vez hecho esto se volverá a preguntar al usuario si quiere volver a usar la calculadora. Si escribe algo distinto de sí, el programa nos dirá por alerta “El programa ha finalizado”.'; 
            break;
        case 14:
            eCatorce();
            enunciado = 'hacer un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44-55-66…..no hacer un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.e ingresan valores por teclado.'; 
            break;
        case 15:
            eQuince();
            enunciado = 'hacer un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.e ingresan valores por teclado.'; 
            break;
        case 16:
            eDieciseis();
            enunciado = 'hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.'; 
            break;
        case 17:
            eDiecisiete();
            enunciado = 'Se cuenta con la siguiente información:<br>Las edades de 5 estudiantes del turno mañana.<br>Las edades de 6 estudiantes del turno tarde.<br>Las edades de 11 estudiantes del turno noche.<br>Las edades de cada estudiante deben ingresarse por teclado.<br>a) Obtener el promedio de las edades de cada turno (tres promedios).<br>b) Imprimir dichos promedios (promedio de cada turno).<br>c) Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.'; 
            break;
        case 18:
            eDieciocho();
            enunciado = 'Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:<br>a) La cantidad de valores negativos ingresados.<br>b) La cantidad de valores positivos ingresados.<br>c) La cantidad de múltiplos de 15.<br>d) El valor acumulado de los números ingresados que son pares.'; 
            break;
        case 19:
            eDiecinueve();
            enunciado = 'hacer un programa que lea los lados de 4 triángulos, e informar: <br>a) De cada uno de ellos, qué tipo de triángulo es: equilátero , isósceles o escaleno <br>b) Cantidad de triángulos de cada tipo. <br>c) Tipo de triángulo del que hay menor cantidad.'; 
            break;
        case 20:
            eVeinte();
            enunciado = 'hacer una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde el menor hasta el mayor de uno en uno. Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla: <br> 4 5 6 7 8 9 10'; 
            break;
        case 21:
            eVeintiuno();
            enunciado = 'Hacer una función que reciba tres enteros y retorne el promedio.'; 
            break;
        case 22:
            eVeintidos();
            enunciado = 'Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.'; 
            break;
        case 23:
            eVeintitres();
            enunciado = 'hacer una funcion que envie una palabra cualquiera y me la devuelva con signo de exclamación al inicio y al final !¡'; 
            break;
        case 24:
            eVeinticuatro();
            enunciado = 'Definí una función obtenerNombreCompleto que reciba como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores'; 
            break;
        case 25:
            eVeinticinco();
            enunciado = 'Definí una función convertirHorasEnSegundos que reciba como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas'; 
            break;                                                                       
        default:
            enunciado = 'No existe el ejercicio con ese número:';
            break;
    }
    btnEjecutar.disabled = true;
    divEnunciado.innerHTML += '<h4>Consigna: </h4>';
    divEnunciado.innerHTML += createParrafo(enunciado);    
    btnReset.disabled = false;       
}
const reset = () => {
    btnReset.disabled = true;
    location.reload();
}