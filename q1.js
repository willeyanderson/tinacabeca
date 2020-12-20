var valorhora_aula= prompt ("digite aqui valor das horas");
var numeros_horas= prompt ("digite aqui o tanto de horas ");
var porCento=prompt ("digite aqui o persentual de desconto do INSS");

var salario  = parseInt (valorhora_aula) * parseInt (numeros_horas) ;
var desconto = parseInt (salario) * parseInt (porCento) /100;
var salario_liquido= salario - desconto;
console.log(salario_liquido);
