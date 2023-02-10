//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//Variáveis da raquete
let raqueteH = 5;
let raqueteW = 50;
let raqueteRadio = 2;

let xRaqueteJ = 0;
let yRaqueteJ = 175;

let xRaqueteC = 595;
let yRaqueteC = 175;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;


//sons do jogo
let raquetada;
let ponto;
let trilha;



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20,0,50);
  mostraBolinha();
  mostraRaqueteJogador();
  mostraRaqueteCpu();
  moveBolinha();
  verificaColisaoBorda();
  movimentoRaqueteJ();
  verificaColisaoRaquete();
  incluiPlacar();
  marcaPonto();
  
  
}

function mostraBolinha(){
 circle(xBolinha, yBolinha, diametro);
}

function mostraRaqueteJogador(){
  rect(xRaqueteJ, yRaqueteJ, raqueteH, raqueteW, raqueteRadio);
}

function mostraRaqueteCpu(){
  rect(xRaqueteC,yRaqueteC,raqueteH,raqueteW,raqueteRadio)
}

function moveBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function movimentoRaqueteJ () {
  if (keyIsDown(UP_ARROW)) {
  yRaqueteJ -= 5;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
  yRaqueteJ += 5;
  }
}

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaqueteJ + 5 && yBolinha - raio < yRaqueteJ + raqueteW && yBolinha + raio > yRaqueteJ) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
  
  if (xBolinha + raio > xRaqueteC && yBolinha - raio < yRaqueteC + raqueteW && yBolinha + raio > yRaqueteC) {
    velocidadeXBolinha *= -1;
  }
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
    }
}

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}

function setup() {
    createCanvas(600, 400);
    trilha.loop();
}
