//Declaración de variables
let nombreUsuario = "Romina Castro";
let saldoCuenta = 30000;
let limiteExtraccion = 4000;
let telefono = 425;
let agua = 350;
let luz = 210;
let internet = 570;
let cuentaAmiga1 = '1234567';
let cuentaAmiga2 = '7654321';
let codigoSeguridad = '1234';

const chequeoDeSaldoBajoEnColor = () => {
    if (saldoCuenta < 1000) {
        document.querySelector(".green-container").style.backgroundColor = "red";
    } else if (!saldoCuenta < 1000) {
        document.querySelector(".green-container").style.backgroundColor = "#df4c1f";
    }
}


const sumaDinero = (dinero) => {
    let nuevoSaldo = saldoCuenta + dinero;
    return nuevoSaldo;
}

const restDinero = (dinero) => {
    let nuevoSaldo = saldoCuenta - dinero;
    return nuevoSaldo;
}

//Ejecución de las funciones que actualizan los valores de las constiables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
const cambiarLimiteDeExtraccion = () => {
    let ingreso = prompt(`Ingrese un nuevo limite de extracción`);
    let limite = parseInt(ingreso);

    if (limite > saldoCuenta) {
        alert(`No es posible modificar el limite debido a que su saldo en cuenta es inferior al limite establecido, 
         \nPor favor, intente nuevamente ingresando un limite válido`);
    } else if (saldoCuenta > limite && limite !== NaN) {
        console.log(limite)
        alert(`Su límite de extracción ha sido modificado a $ ${limite}`);
        Nuevolimite = document.getElementById("limite-extraccion").innerHTML = `Tu límite de extracción es: $  ${limite}`;
    } else if (saldoCuenta < limiteExtraccion) {
        alert(`Su limite de extrccion no le permite sacar esa cantidad de dinero`);
    } else if (ingreso == null) {
        actualizarSaldoEnPantalla();

    } else {
        alert(`Por favor, ingrese un valor válido`);
    }
}



const extraerDinero = () => {
    let ingreso = prompt("Ingrese la cantidad de dinero que desea extraer");
    let  dinero = parseInt(ingreso);
    if ((dinero % 100 == 0) && (dinero <= saldoCuenta && dinero <= limiteExtraccion)) {
        saldoCuenta = restDinero(dinero);
        alert(`Su saldo anterior es de: $ ${saldoCuenta + dinero}  \nEl monto de su extracción es de: $ ${ingreso}
         \nSu saldo actual es de: $ ${saldoCuenta}`);
    } else if ((dinero <= saldoCuenta) && (dinero % 100 !== 0)) {
        alert(`Sólo puedes extraer billetes de $100`);
        extraerDinero();
    } else if ((isNaN(ingreso) === true) || (ingreso == '0')) {
        alert(`El monto ingresado no es válido`);
    } else if (dinero > saldoCuenta) {
        alert(`No posee dinero suficiente para hacer esa extracción`);

    } else if (ingreso === null) {
        actualizarSaldoEnPantalla();
    } else {
        alert("El monto ingresado es mayor al límite de extracción que posee. \nInténtelo nuevamente.");

    }
    actualizarSaldoEnPantalla();
    chequeoDeSaldoBajoEnColor();
}

const depositarDinero = () => {
    let ingreso = prompt("Ingrese la cantidad de dinero que desea depositar");
    console.log(ingreso)

    if (ingreso !== null) {
        let dinero = parseInt(ingreso);
        if (isNaN(dinero) === false) {
            console.log(dinero)
            saldoCuenta = sumaDinero(dinero);
            alert(`Su saldo anterior es de: $ ${saldoCuenta - dinero}  \nEl monto de su depósito es de: $ ${ingreso}\nSu saldo actual es de: $ ${saldoCuenta}`);
        } else {
            alert(`El monto ingresado no es válido`);
            depositarDinero();
        }
        actualizarSaldoEnPantalla();
        chequeoDeSaldoBajoEnColor();
    }
}

const pagarServicio = (servicio) => {
    let ingreso = prompt(`Ingrese el tipo de servicio que desee abonar: \n1-Pagar teléfono \n2-Pagar Factura de gas \n3-Pagar servicio de agua \n4-Pagar Internet`);
    servicio = ingreso;
    telefono = '1';
    agua = '2';
    luz = '3';
    internet = '4';

    switch (servicio) {
        case '1':
            let ingreso = prompt(`El monto de su factura de Teléfono es de: $425, Ingrese el monto a pagar`);
            dinero = parseInt(ingreso);
            if (dinero <= saldoCuenta) {
                saldoCuenta = restDinero(dinero);

                alert(`El pago del servicio: Teléfono ha sido efectuado exitósamente, \nEl saldo actual es de: ${saldoCuenta}`);
            } else {
                alert(`No es posible realizar el pago del servicio debido a que no posee saldo suficiente en su cuenta`);
            }
            break;
        case '2':
            let ingreso1 = prompt(`El monto de su factura de Agua es de: $350, \nPor favor ingrese el monto a pagar`);
            dinero = parseInt(ingreso1);
            if (dinero <= saldoCuenta) {
                saldoCuenta = restDinero(dinero);

                alert(`El pago del servicio  Agua ha sido efectuado exitósamente,\nSu saldo anterior es de: $ ${saldoCuenta + dinero} \nEl saldo actual es de: ${saldoCuenta}`);
            } else {
                alert(`No es posible realizar el pago del servicio debido a que no posee saldo suficiente en su cuenta`);
            }
            break;
        case '3':
            let ingreso2 = prompt(`El monto de su factura de Luz es de: $210, \Por favor ngrese el monto a pagar`);
            dinero = parseInt(ingreso2);
            if (dinero <= saldoCuenta) {
                saldoCuenta = restDinero(dinero);

                alert(`El pago del servicio Luz ha sido efectuado exitósamente,\nSu saldo anterior es de: $ ${saldoCuenta + dinero} \nEl saldo actual es de: ${saldoCuenta}`);
            } else {
                alert(`No es posible realizar el pago del servicio debido a que no posee saldo suficiente en su cuenta`);
            }
            break;
        case '4':
            let ingreso3 = prompt(`El monto de su factura de Internet es de: $570, \Por favor ngrese el monto a pagar`);
            dinero = parseInt(ingreso3);
            if (dinero <= saldoCuenta) {
                saldoCuenta = restDinero(dinero);

                alert(`El pago del servicio Internet ha sido efectuado exitósamente, \nSu saldo anterior es de: $ ${saldoCuenta - dinero} \nEl saldo actual es de: ${saldoCuenta}`);
            } else {
                alert(`No es posible realizar el pago del servicio debido a que no posee saldo suficiente en su cuenta`);
            }
            break;

        default:
            if (isNaN(dinero) === true) {
                actualizarSaldoEnPantalla();
            } else {
                return alert(`Lo sentimos, la opción ingresada no es válida`);
            }
            actualizarSaldoEnPantalla();
            chequeoDeSaldoBajoEnColor();
    }
}


const transferirDinero = (dinero) => {
    let montoATransferir = prompt(`Ingrese el monto que desea transferir`);
    dinero = parseInt(montoATransferir);
    if (dinero <= saldoCuenta) {
        let ingreso1 = prompt(`Ingrese el número de la cuenta a la que desea transferir dinero`);
        if (ingreso1 == cuentaAmiga1) {
            saldoCuenta = restDinero(dinero);
            alert(`Se han transferido $${dinero}. \nCuenta destino ${ingreso1}, \nEl saldo actual es de: ${saldoCuenta} `)
        } else if (ingreso1 == cuentaAmiga2) {
            saldoCuenta = restDinero(dinero);
            alert(`Se han transferido $${dinero}. \nCuenta destino ${ingreso1}, \nEl saldo actual es de: ${saldoCuenta} `)
        } else if (ingreso1 == null) {

        } else {
            alert(`solo puede transferir dinero a una cuenta amiga`);
        } actualizarSaldoEnPantalla();
        chequeoDeSaldoBajoEnColor();

    } else if (dinero > saldoCuenta) {
        alert(`No posee saldo suficiente para realizar esta transferencia`);
    }
}


const iniciarSesion = () => {
    codigo = prompt(`Ingrese su número de cuenta para poder acceder al Homebanking`);

    if (codigo === codigoSeguridad) {
        alert(`Bienvenido/a ${nombreUsuario} ya puedes comenzar a realizar operaciones`);
        actualizarLimiteEnPantalla();
        actualizarSaldoEnPantalla();
        cargarNombreEnPantalla();
        
    } else {
        alert(`Código incorrecto. Tú dinero ha sido retenido por cuestiones de seguridad`);
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
        chequeoDeSaldoBajoEnColor();
        
    }

}


//Funciones que actualizan el valor de las constiables en el HTML
const cargarNombreEnPantalla = () => {
    document.getElementById("nombre").innerHTML = `Bienvenido/a ${nombreUsuario}`;
}

const actualizarSaldoEnPantalla = () => {
    document.getElementById("saldo-cuenta").innerHTML = `$ ${saldoCuenta}`;
}

const actualizarLimiteEnPantalla = () => {
    document.getElementById("limite-extraccion").innerHTML = `Tu límite de extracción es: $  ${limiteExtraccion}`;
}

