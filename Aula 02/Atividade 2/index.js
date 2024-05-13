var peso = prompt("Qual seu peso?")
var altura = prompt("Qual sua altura?")
var imc = peso / altura ** 2

console.log(imc)
if (imc < 18.5){
  console.log("Você se enquadra em baixo peso")
}
else if(imc >= 18.5 && imc < 24.9){
  console.log("Você tem peso normal")
}
else if(imc >= 24.9 && imc < 29.9){
  console.log("Você se enquadra em sobrepeso")
}
else if(imc >= 29.9 && imc < 34.9){
  console.log("Você se enquadra em obesidade grau I")
}
else if(imc >= 34.9 && imc < 39.9){
  console.log("Você se enquadra em obesidade grau II")
}
else if(imc >= 39.9){
  console.log("Você se enquadra em obesidade grau III")
}
