let cor; //dfinir variável
let posicaoHorizontal; //x
let posicaoVertical; //y

function setup() {
  createCanvas(600, 400); //definir ramanho da tela
  background("blue"); //definir cor tela de fundo
  cor = color(random(0,255),random(0,255),random(0,255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  fill(cor); //definir cor do preenchimento
  circle(posicaoHorizontal,posicaoVertical,50);
  
  if(mouseX<posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
  }
  if(mouseX>posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;
  }
  if(mouseY<posicaoVertical) {
    posicaoVertical--;
  }
  if(mouseY>posicaoVertical) {
    posicaoVertical++; 
  }
    if (mouseIsPressed) {
    cor = color(random(0,255),random(0,255),random(0,255));
    }
}
