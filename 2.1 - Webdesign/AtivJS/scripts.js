// Exercicio 1 -
function calculaAntecessor() {
    var numero = prompt("Digite um número para saber seu antecessor:")
    var ante = parseInt(numero) - 1;
    alert(ante);
}

function mostraCodigoUm() {
    alert(calculaAntecessor);
}

// Exercício 2 -

function calculaArea() {
    var base = prompt("Digite a base do retângulo em cm:")
    var altura = prompt("Digite a altura do retângulo em cm:")
    var area = base * altura;
    if (base == altura) {
        alert("As medidas são idênticas, sendo assim, a forma é um quadrado.")
    }
    else {
        alert(`Com base de ${base}cm e altura de ${altura}cm, a área total do retângulo é de ${area}cm²`);
    }
};

function mostraCodigoDois() {
    alert(calculaArea);
};

// Exercício 3 -

function calculaVoto() {
    var estado = prompt("Digite o nome do estado: ");
    var estadoUp = estado.toUpperCase();
    var cidade = prompt("Digite o nome da cidade: ")
    function capitalize(cidade) {
        return cidade.charAt(0).toUpperCase() + cidade.slice(1);
    }
    var cidadeCapitalizada = cidade.split(' ').map(capitalize).join(' ');
    var totalEleitores = prompt(`Digite o número total de eleitores da cidade ${cidadeCapitalizada}/${estadoUp}`);
    var votosValidos = prompt("Digite os votos validos:");
    var votosBrancos = prompt("Digite os votos em branco:");
    var votosNulos = prompt("Digite os votos anulados:");
    var totalVotos = parseInt(votosValidos) + parseInt(votosBrancos) + parseInt(votosNulos);
    var calculaVotos = (totalVotos / totalEleitores) * 100;
    var votosAbstidos = parseInt(totalEleitores) - parseInt(totalVotos);
    var calculaAbstinencia = (parseInt(votosAbstidos) / parseInt(totalEleitores)) * 100;
    if (totalVotos > totalEleitores) {
        alert("O número informado de votos é maior do que o de eleitores!")
    } else {
        var calculaValido = (votosValidos / totalEleitores) * 100;
        var calculaBranco = (votosBrancos / votosValidos) * 100;
        var calculaNulo = (votosNulos / votosValidos) * 100;
        alert(`As eleições na cidade de ${cidadeCapitalizada}/${estadoUp}:\nTotal de eleitores: ${totalEleitores}\nTotal de votos: ${totalVotos} (${calculaVotos}%)\nTotal de votos válidos: ${votosValidos} (${calculaValido.toFixed(2)}%)\nTotal de votos em branco: ${votosBrancos} (${calculaBranco.toFixed(2)}%)\nTotal de votos nulos: ${votosNulos} (${calculaNulo.toFixed(2)}%)\nTotal de abstinência: ${votosAbstidos} (${calculaAbstinencia}%)`)
    }

}

function mostraCodigoTres() {
    alert(calculaVoto);
}

// Exercício 4 -

function calculaSalario() {
    var nome = prompt("Informe o nome do funcionário:");
    function capitalize(nome) {
        return nome.charAt(0).toUpperCase() + nome.slice(1);
    }
    var nomeCapitalizado = nome.split(' ').map(capitalize).join(' ');
    var salario = prompt(`Informe o salário do funcionário ${nomeCapitalizado}:`)
    var reajuste = prompt(`Informe a porcentagem do ajuste de salário do funcionário ${nomeCapitalizado}:`);
    var porc = reajuste / 100;
    var valor = salario * porc;
    var novoSalario = parseInt(salario) + parseInt(valor);
    alert(`Funcionário: ${nome}\nSalário anterior: R$${salario}\nReajuste de: ${reajuste}%\nValor do reajuste: R$${valor}\nValor do novo salário: R$${novoSalario}`);
}

function mostraCodigoQuatro() {
    alert(calculaSalario);
}

// Exercicio 5 -

function calculaValorCarro() {
    var valorFabrica = prompt("Digite do valor do veículo:");
    var valorOriginal = parseFloat(valorFabrica)
    var valorDist = parseFloat(valorFabrica) * 0.28;
    var valorImposto = parseFloat(valorFabrica) * 0.45;
    var valorFinal = parseFloat(valorFabrica) + valorDist + valorImposto;
    alert(`Valor inicial do veículo: R$${valorOriginal.toFixed(2)}\nValor da distribuidora: R$${valorDist.toFixed(2)} (28%)\nTotal de Impostos: R$${valorImposto.toFixed(2)} (45%)\nValor final para o consumidor: R$${valorFinal.toFixed(2)}`);
}

function mostraCodigoCinco() {
    alert(calculaValorCarro);
}

// Exercício 6 -

function calculaVendas() {
    var nome = prompt("Informe o nome do funcionário:")
    function capitalize(nome) {
        return nome.charAt(0).toUpperCase() + nome.slice(1);
    }
    var nomeCapitalizado = nome.split(' ').map(capitalize).join(' ');
    var salario = prompt(`Informe o salário do funcionário ${nomeCapitalizado}`);
    var salarioFloat = parseFloat(salario)
    var totalVendas = prompt(`Informe quantas vendas ${nomeCapitalizado} realizou:`);
    var valorVendas = prompt(`Informe o valor total das vendas de ${nomeCapitalizado}`);
    var vendasFloat = parseFloat(valorVendas);
    var comissao = parseFloat(valorVendas) * 0.05;
    var valorPorVenda = parseFloat(valorVendas) / parseFloat(totalVendas);
    var salarioTotal = parseFloat(salario) + parseFloat(comissao);
    alert(`Funcionário: ${nome}\nSalário bruto: R$${salarioFloat.toFixed(2)}\nTotal de vendas: ${totalVendas}\nValor total das vendas: R$${vendasFloat.toFixed(2)}\nValor de comissão total: R$${comissao.toFixed(2)}\nValor de comissão por venda: R$${valorPorVenda.toFixed(2)}\nSalário líquido: R$${salarioTotal.toFixed(2)}`);
}

function mostrarCodigoSeis() {
    alert(calculaVendas);
}

// Exercício 7 -

function calculaFuncionario() {
    var nome = prompt("Informe o nome do funcionário:")
    function capitalize(nome) {
        return nome.charAt(0).toUpperCase() + nome.slice(1);
    }
    var nomeCapitalizado = nome.split(' ').map(capitalize).join(' ');
    var horasTrabalhadas = prompt(`Informe o total de horas trabalhadas por ${nomeCapitalizado}`);
    var salarioPorHora = prompt(`Informe o salário por hora de ${nomeCapitalizado}`);
    var salarioBruto = parseFloat(horasTrabalhadas) * parseFloat(salarioPorHora);
    if (horasTrabalhadas > 160) {
        var vlrHoraExtra = salarioBruto * 0.5;
        var horasExtras = parseInt(horasTrabalhadas) - 160;
        var salarioLiquido = salarioBruto + vlrHoraExtra;
        alert(`Funcionário: ${nomeCapitalizado}\nHoras trabalhadas: ${horasTrabalhadas}\nHoras extras: ${horasExtras}\nSalario bruto: R$${salarioBruto.toFixed(2)}\nHora extra a receber: R$${vlrHoraExtra.toFixed(2)}\nSalário Líquido: R$${salarioLiquido.toFixed(2)}`)
    } else {
        var salarioLiquido = salarioPorHora * horasTrabalhadas;
        alert(`Funcionário: ${nomeCapitalizado}\nHoras trabalhadas: ${horasTrabalhadas}\nSalário Líquido: R$${salarioLiquido.toFixed(2)}`)
    }
}

function mostraCodigoSete() {
    alert(calculaFuncionario);
}

// Exercício 8

function calculaSalarioVenda() {
    var nome = prompt("Informe o nome do funcionário:")
    function capitalize(nome) {
        return nome.charAt(0).toUpperCase() + nome.slice(1);
    }
    var nomeCapitalizado = nome.split(' ').map(capitalize).join(' ');
    var salario = prompt(`Informe o salário de ${nomeCapitalizado}`);
    if (salario <= 1500) {
        var comissao = parseFloat(salario) * 0.03;
        var salarioLiquido = parseFloat(salario) + comissao;
        alert(`Funcionário: ${nomeCapitalizado}\nSalario bruto: R$${salario}\nComissão: R$${comissao.toFixed(2)}\nSalario líquido: R$${salarioLiquido.toFixed(2)}`);
    } else {
        var comissaoInicial = parseFloat(salario) * 0.03;
        var comissaoSuperior = (parseFloat(salario) - 1500) * 0.05;
        var comissaoTotal = comissaoInicial + comissaoSuperior;
        var salarioLiquido = parseFloat(salario) + comissaoTotal;
        alert(`Funcionário: ${nomeCapitalizado}\nSalário bruto: R$${salario}\nComissão total: R$${comissaoTotal.toFixed(2)}\nSalario líquido: R$${salarioLiquido.toFixed(2)}`);
    }
}

function mostraCodigoOito() {
    alert(calculaSalarioVenda);
}