class Form {
  constructor() {

    this.R=createInput("").attribute("placeholder", "R (0 - 255)");
    this.G=createInput("").attribute("placeholder", "G (0 - 255)");
    this.B=createInput("").attribute("placeholder", "B (0 - 255)");
    this.R.style('font-size', Math.sqrt(width/4*3 + height/16*3).toFixed(0)+'px')
    this.G.style('font-size', Math.sqrt(width/4*3 + height/16*3).toFixed(0)+'px')
    this.B.style('font-size', Math.sqrt(width/4*3 + height/16*3).toFixed(0)+'px')
    this.R.size(width/4.5 , height/16)
    this.G.size(width/4.5 , height/16)
    this.B.size(width/4.5 , height/16)
    this.R.position(width/2 - this.R.width*2, height/2 - height/16*2.5);
    this.G.position(width/2 - this.G.width/2, height/2 - height/16*2.5);
    this.B.position(width/2 + this.B.width, height/2 - height/16*2.5);
    this.R.class("customInput");
    this.G.class("customInput");
    this.B.class("customInput");

    this.R2=createInput("").attribute("placeholder", "R (0 - 1)");
    this.G2=createInput("").attribute("placeholder", "G (0 - 1)");
    this.B2=createInput("").attribute("placeholder", "B (0 - 1)");
    this.R2.style('font-size', Math.sqrt(width/4*3 + height/16*3).toFixed(0)+'px')
    this.G2.style('font-size', Math.sqrt(width/4*3 + height/16*3).toFixed(0)+'px')
    this.B2.style('font-size', Math.sqrt(width/4*3 + height/16*3).toFixed(0)+'px')
    this.R2.size(width/4.5 , height/16)
    this.G2.size(width/4.5 , height/16)
    this.B2.size(width/4.5 , height/16)
    this.R2.position(width/2 - this.R2.width*2, height/2 - height/3);
    this.G2.position(width/2 - this.G2.width/2, height/2 - height/3);
    this.B2.position(width/2 + this.B2.width, height/2 - height/3);
    this.R2.class("customInput");
    this.G2.class("customInput");
    this.B2.class("customInput");
}
color(){

R = this.R.value()
  G = this.G.value()
  B = this.B.value()

  R2 = this.R2.value()
  G2 = this.G2.value()
  B2 = this.B2.value()

  if(R==""){R=0}if(R2==""){R2=0}
if(B==""){B=0}if(B2==""){B2=0}
if(G==""){G=0}if(G2==""){G2=0}

if(R2>=1){R2=255}if(R>255){R=255}
if(B2>=1){B2=255}if(B>255){B=255}
if(G2>=1){G2=255}if(G>255){G=255}
if(R2==255){  this.R3=R2 - (R2-R)}else{this.R3=0}
if(G2==255){  this.G3=G2 - (G2-G)}else{this.G3=0}
if(B2==255){  this.B3=B2 - (B2-B)}else{this.B3=0}

 

}
}