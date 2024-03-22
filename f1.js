class Jogador {
  constructor() {
    this.saldo = 0;
    this.aposta = 0;
  }
}
const jogador = new Jogador();

let aposta;
let winer;

function increverJogador(){
  jogador.saldo = parseInt(prompt('Insira o saldo do jogador:'));
  var visor = document.getElementById("saldo");
  visor.innerHTML = jogador.saldo;
}

function checkAposta(){
  if(aposta == winer){
    jogador.saldo =  jogador.aposta * 5;  
    var visor = document.getElementById("saldo");
    visor.innerHTML = jogador.saldo;
  }
}


function ap1(){
  var valorAposta = prompt('Insira o valor da aposta:');  
  if(jogador.saldo > valorAposta){
    jogador.saldo -= valorAposta; 
    jogador.aposta = valorAposta;
    var visor = document.getElementById("saldo");
    visor.innerHTML = jogador.saldo;     
    aposta = 1;
    init();
  }
  else{alert("nao tem grana")}
}
function ap2(){
  var valorAposta = prompt('Insira o valor da aposta:');
  if(jogador.saldo > valorAposta){
    jogador.saldo -= valorAposta;
    jogador.aposta = valorAposta;
    var visor = document.getElementById("saldo");
    visor.innerHTML = jogador.saldo;
    aposta = 2;
    init();
  }
  else{alert("nao tem grana")}
}
function ap3(){
  var valorAposta = prompt('Insira o valor da aposta:');
  if(jogador.saldo > valorAposta){
    jogador.saldo -= valorAposta;
    jogador.aposta = valorAposta;
    var visor = document.getElementById("saldo");
    visor.innerHTML = jogador.saldo;
    aposta = 3;
    init();
  }
  else{alert("nao tem grana")}
}
function ap4(){
  var valorAposta = prompt('Insira o valor da aposta:');
  if(jogador.saldo > valorAposta){
    jogador.saldo -= valorAposta;
    jogador.aposta = valorAposta;
    var visor = document.getElementById("saldo");
    visor.innerHTML = jogador.saldo;
    aposta = 4;
    init();
  }
  else{alert("nao tem grana")}
}
function ap5(){
  var valorAposta = prompt('Insira o valor da aposta:');
  if(jogador.saldo > valorAposta){
    jogador.saldo -= valorAposta
    jogador.aposta = valorAposta;;
    var visor = document.getElementById("saldo");
    visor.innerHTML = jogador.saldo;
    aposta = 5;
    init();
  }
  else{alert("nao tem grana")}
}


let myInterval1;
let myInterval2;
let myInterval3;
let myInterval4;
let myInterval5;

let posX1 = 0;
let posX2 = 0;
let posX3 = 0;
let posX4 = 0;
let posX5 = 0;

function timer1(){
  posX1 += Math.ceil(Math.random() * 15);
  const c1 = document.getElementById("car1");
  if(posX1 > 1150){
    posX1 = 1150;
    c1.style.transform = "translateX(" + posX1 + "px )";
    ganhador();
  }
  c1.style.transform = "translateX(" + posX1 + "px )";
}

function timer2(){
  posX2 += Math.ceil(Math.random() * 15);
  const c2 = document.getElementById("car2");
  if(posX2 > 1150){
    posX2 = 1150;
    c2.style.transform = "translateX(" + posX2 + "px )";
    ganhador();
  }
  c2.style.transform = "translateX(" + posX2 + "px )";
}

function timer3(){
  posX3 += Math.ceil(Math.random() * 15);
  const c3 = document.getElementById("car3");
  if(posX3 > 1150){
    posX3 = 1150;
    c3.style.transform = "translateX(" + posX3 + "px )";
    ganhador();
  }
  c3.style.transform = "translateX(" + posX3 + "px )";
}

function timer4(){
  posX4 += Math.ceil(Math.random() * 15);
  const c4 = document.getElementById("car4");
  if(posX4 > 1150){
    posX4 = 1150;
    c4.style.transform = "translateX(" + posX4 + "px )";
    ganhador();
  }
  c4.style.transform = "translateX(" + posX4 + "px )";
}

function timer5(){
  posX5 += Math.ceil(Math.random() * 15);
  const c5 = document.getElementById("car5");
  if(posX5 > 1150){
    posX5 = 1150;
    c5.style.transform = "translateX(" + posX5 + "px )";
    ganhador();
  }
  c5.style.transform = "translateX(" + posX5 + "px )";
}

function myStop() {
  clearInterval(myInterval1);
  clearInterval(myInterval2);
  clearInterval(myInterval3);
  clearInterval(myInterval4);
  clearInterval(myInterval5);
}

function ganhador(){
  myStop();
  if(posX1 == 1150){
    winer = 1;
    checkAposta();
    resetarPosicao();
    alert("1 ganhou")
  }
  if(posX2 == 1150){
    winer = 2;
    checkAposta();
    resetarPosicao();
    alert("2 ganhou")
  }
  if(posX3 == 1150){
    winer = 3;
    checkAposta();
    resetarPosicao();
    alert("3 ganhou")
  }
  if(posX4 == 1150){
    winer = 4;
    checkAposta();
    resetarPosicao();
    alert("4 ganhou")
  }
  if(posX5 == 1150){
    winer = 5;
    checkAposta();
    resetarPosicao();
    alert("5 ganhou")
  }  
}

function resetarPosicao() {
  posX1 = 0; 
  const c1 = document.getElementById("car1");
  c1.style.transform = "translateX(" + posX1 + "px )";

  posX2 = 0; 
  const c2 = document.getElementById("car2");
  c2.style.transform = "translateX(" + posX2 + "px )"; 

  posX3 = 0; 
  const c3 = document.getElementById("car3");
  c3.style.transform = "translateX(" + posX3 + "px )"; 

  posX4 = 0;
  const c4 = document.getElementById("car4");
  c4.style.transform = "translateX(" + posX4 + "px )"; 

  posX5 = 0;
  const c5 = document.getElementById("car5");
  c5.style.transform = "translateX(" + posX5 + "px )"; 
}


function init() {

  if(comecar = true){
    myInterval1 = setInterval(timer1, 50);
    myInterval2 = setInterval(timer2, 50);
    myInterval3 = setInterval(timer3, 50);
    myInterval4 = setInterval(timer4, 50);
    myInterval5 = setInterval(timer5, 50);
  }
 
}  

