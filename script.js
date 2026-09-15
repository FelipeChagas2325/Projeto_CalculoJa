function calcularRescisao() {
  let salario = parseFloat(document.getElementById("salario").value);
  let dias = parseInt(document.getElementById("dias").value);
  let aviso = document.getElementById("aviso").checked;
  let feriasVencidas = document.getElementById("feriasVencidas").checked;

  // Datas
  let dataEntrada = new Date(document.getElementById("dataEntrada").value);
  let dataSaida = new Date(document.getElementById("dataSaida").value);

  // Calcular tempo de contrato em meses e anos
  let diffTime = Math.abs(dataSaida - dataEntrada);
  let diffDays = diffTime / (1000 * 60 * 60 * 24);
  let anosTrabalhados = Math.floor(diffDays / 365);
  let mesesTrabalhados = Math.floor(diffDays / 30);

  // Saldo de salário
  let saldoSalario = (salario / 30) * dias;

  // Aviso prévio
  let avisoPrevio = 0;
  if (aviso) {
    let diasAviso = 30 + (anosTrabalhados * 3);
    if (diasAviso > 90) diasAviso = 90;
    avisoPrevio = (salario / 30) * diasAviso;
  }

  // Férias proporcionais
  let mesesFerias = mesesTrabalhados % 12;
  let feriasProporcionais = (salario / 12) * mesesFerias;
  feriasProporcionais += feriasProporcionais / 3;

  // Férias vencidas
  let feriasVencidasValor = feriasVencidas ? salario + (salario / 3) : 0;

  // 13º proporcional
  let meses13 = dataSaida.getMonth() + 1; // mês da saída
  let decimoTerceiro = (salario / 12) * meses13;

  // FGTS + multa
  let fgts = (salario * 0.08) * mesesTrabalhados;
  let multaFgts = fgts * 0.40;

  // Total bruto
  let totalBruto = saldoSalario + avisoPrevio + feriasProporcionais + feriasVencidasValor + decimoTerceiro + multaFgts;

  // INSS progressivo
  function calcularINSS(base) {
    let inss = 0;
    if (base > 7786.02) base = 7786.02;
    if (base > 4000.03) { inss += (base - 4000.03) * 0.14; base = 4000.03; }
    if (base > 2666.68) { inss += (base - 2666.68) * 0.12; base = 2666.68; }
    if (base > 1412.00) { inss += (base - 1412.00) * 0.09; base = 1412.00; }
    inss += base * 0.075;
    return inss;
  }

  let descontoINSS = calcularINSS(totalBruto);

  // IRRF
  let baseIR = totalBruto - descontoINSS;
  let descontoIR = 0;
  if (baseIR <= 2259.20) descontoIR = 0;
  else if (baseIR <= 2826.65) descontoIR = baseIR * 0.075 - 169.44;
  else if (baseIR <= 3751.05) descontoIR = baseIR * 0.15 - 381.44;
  else if (baseIR <= 4664.68) descontoIR = baseIR * 0.225 - 662.77;
  else descontoIR = baseIR * 0.275 - 896.00;
  if (descontoIR < 0) descontoIR = 0;

  // Total líquido
  let totalLiquido = totalBruto - descontoINSS - descontoIR;

  // Função para formatar valores no padrão brasileiro
  function formatar(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  document.getElementById("resultado").innerHTML =
    "Data de entrada: " + dataEntrada.toLocaleDateString("pt-BR") + "<br>" +
    "Data de saída: " + dataSaida.toLocaleDateString("pt-BR") + "<br><br>" +
    "Saldo de salário: " + formatar(saldoSalario) + "<br>" +
    "Aviso prévio: " + formatar(avisoPrevio) + "<br>" +
    "Férias proporcionais: " + formatar(feriasProporcionais) + "<br>" +
    "Férias vencidas: " + formatar(feriasVencidasValor) + "<br>" +
    "13º proporcional: " + formatar(decimoTerceiro) + "<br>" +
    "Multa FGTS (40%): " + formatar(multaFgts) + "<br>" +
    "Total bruto: " + formatar(totalBruto) + "<br>" +
    "Desconto INSS: " + formatar(descontoINSS) + "<br>" +
    "Desconto IRRF: " + formatar(descontoIR) + "<br>" +
    "<strong>Total líquido: " + formatar(totalLiquido) + "</strong>";
}
