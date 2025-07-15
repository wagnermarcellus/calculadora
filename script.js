let primeiro, segundo, sinal

function enviaDigito(digito) {
    let valor = document.getElementById("visor").value;
    if (valor == '0' || valor == sinal) {
        document.getElementById("visor").value = ''
    }
    document.getElementById("visor").value += digito
};

function limpaVisor() {
    document.getElementById("visor").value = '0';
    primeiro = '';
    segundo = '';
};

function operacao(oper) {
    sinal = oper;
    primeiro = document.getElementById("visor").value;
    document.getElementById("visor").value = sinal;
};

function raizQuad() {
    operacao('r');
    igual();
};

function igual() {
    segundo = document.getElementById("visor").value;
    let result
    switch (sinal) {
        case '+':
            result = parseFloat(primeiro) + parseFloat(segundo)
            break
        case '-':
            result = parseFloat(primeiro) - parseFloat(segundo)
            break
        case 'x':
            result = parseFloat(primeiro) * parseFloat(segundo)
            break
        case '/':
            result = parseFloat(primeiro) / parseFloat(segundo)
            if (result == 'infinity') {
                result = 'Erro:n/0?'
            }
            break
        case 'r':
            result= Math.sqrt(parseInt(primeiro))
            break
        case 'n²':
            result = Math.pow(parseInt(primeiro), parseInt(segundo))
            break
    }
    document.getElementById("visor").value = result
};