var R=0,G=0,B=0,R2=0,G2=0,B2=0
var form
var sprite,borda
function preload(){ 
    
}
function setup() {
createCanvas(windowWidth, windowHeight);canvas=1
form=new Form()
borda = createSprite(width/2,height/2,width/16,height/8);borda.shapeColor="black"
sprite = createSprite(width/2,height/2,width/16,height/8);sprite.shapeColor="black"
borda.scale=1.1
    }

function draw() {
    backgroundColor=[R,G,B]
    spriteColor=[form.R3,form.G3,form.B3]
background(backgroundColor)
sprite.shapeColor=spriteColor
form.color()
drawSprites()
stroke([255-R,255-G,255-B]);fill([255-R,255-G,255-B]);textSize(Math.sqrt(Math.sqrt((((width+Math.pow(width/16,2))*8))) + Math.sqrt((((height+Math.pow(height/8,2))*4)))))
text("COR DA LUZ",form.G.x,form.G.y-form.G.height/2)
text("COR DO OBJETO",form.G2.x,form.G2.y-form.G2.height/2)
}
