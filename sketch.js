var spidermanImg, spiderman, GreenGobImg, GreenGob;
var backgroundImg, background;



function preload(){

    spidermanImg = loadImage("./assets/Spiderman.png");
    GreenGobImg = loadImage("./assets/GreenGoblin.png");
    backgroundImg = loadImage("./assets/Background.png");


}



function setUp(){

    CreateCanvas(1200,600);

    spiderman = createSprite(100,0,40,40);
    spiderman.addImage("spiderman", spidermanImg);



    GreenGob = createSprite(500,0,40,40);
    GreenGob.addImage("GreenGoblin", GreenGobImg);


}

function draw(){

    background.color("white");

    






}