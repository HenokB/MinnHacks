//Declare a class for the sprite image


class EnemyMaster {
    constructor ( num, r, hp, score ) {
        this.num    = num;
        this.radius = r;
        this.hp     = hp;
        this.score  = score;
    }
}


let enemyMaster = 
[
    new EnemyMaster( 0, 10,    1,   100 ), //Pink chick
    new EnemyMaster( 1, 10,    1,   100 ), //Yellow chick
    new EnemyMaster( 2, 70, 5000, 10000 ), //Final boss (large yellow chick)
    new EnemyMaster( 3, 10,    1,    10 ), //Final boss's child
];


class Sprite {
    constructor( x, y, w, h ) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    };
};//End of Sprite class


//Size of each sprite image (px), an array of instances
let sprite = [
    //Sprites
    new Sprite(  0, 0, 22, 42),//#0 sprite from sprite.png,   (0,0), width:22px, height:42px, most leant to left
    new Sprite( 23, 0, 33, 42),//#1 sprite from sprite.png,  (23,0), width:33px, height:42px, leant to left
    new Sprite( 57, 0, 43, 42),//#2 sprite from sprite.png,  (57,0), width:43px, height:42px, flat
    new Sprite(101, 0, 33, 42),//#3 sprite from sprite.png, (101,0), width:33px, height:42px, leant to right
    new Sprite(135, 0, 21, 42),//#4 sprite from sprite.png, (135,0), width:21px, height:42px, most leant to right

    //Bullets
    new Sprite(  0, 50, 3, 7), //#5 image from sprite.png,   (0,50),  width:3px,  height:7px, bullet 1
    new Sprite(  4, 50, 5, 5), //#6 image from sprite.png,   (4,50),  width:5px,  height:5px, bullet 2

    new Sprite(  3,42,16, 5 ),
    new Sprite( 29,42,21, 5 ),
    new Sprite( 69,42,19, 5 ),
    new Sprite(108,42,21, 5 ),
    new Sprite(138,42,16, 5 ),
    
    new Sprite( 11,50, 7, 7 ),
    new Sprite( 19,50, 7, 7 ),
    new Sprite( 32,49, 8, 8 ),
    new Sprite( 42,47,12,12 ),
    
    new Sprite(  5,351, 9, 9),
    new Sprite( 21,346,20,20),
    new Sprite( 46,343,29,27),
    new Sprite( 80,343,33,30), 
    new Sprite(117,340,36,33), 
    new Sprite(153,340,37,33),
    new Sprite(191,341,25,31),
    new Sprite(216,349,19,16),
    new Sprite(241,350,15,14),
    new Sprite(259,350,14,13),
    new Sprite(276,351,13,12),
    
    new Sprite(  6,373, 9, 9),
    new Sprite( 19,371,16,15),
    new Sprite( 38,373,11,12),
    new Sprite( 54,372,17,17),
    new Sprite( 75,374,13,14),
    
    new Sprite(  4,62,24,27),	//32  
    new Sprite( 36,62,24,27),	//33  
    new Sprite( 68,62,24,27),	//34 
    new Sprite(100,62,24,27),	//35   
    new Sprite(133,62,24,27),	//36  
    new Sprite(161,62,30,27),	//37   
    
    new Sprite(  4,95,24,26),	//38   
    new Sprite( 36,95,24,26),	//39  , 
    new Sprite( 68,95,24,26),	//40  , 
    new Sprite(100,95,24,26),	//41  , 
    new Sprite(133,92,24,29),	//42  ,   
    new Sprite(161,95,30,26),	//43  , 
    
    new Sprite(  4,125,24,29),	 
    new Sprite( 36,125,24,29),	 
    new Sprite( 68,125,24,29),	 
    new Sprite(100,125,24,29),	
    new Sprite(133,124,24,30),	
    new Sprite(161,125,30,29),	
    
    new Sprite(  4,160,25,27),	 
    new Sprite( 34,160,26,27),	 
    new Sprite( 66,160,26,27),	 
    new Sprite( 98,160,26,27),	 
    new Sprite(132,160,26,27),	 
    new Sprite(161,158,30,29),	 
    
    new Sprite(  4,194,24,28),	 
    new Sprite( 36,194,24,28),	 
    new Sprite( 68,194,24,28),	 
    new Sprite(100,194,24,28),	 
    new Sprite(133,194,24,30),	 
    new Sprite(161,194,30,28),	 
    
    new Sprite(  4,230,22,26),	
    new Sprite( 41,230,22,26),	
    new Sprite( 73,230,22,26),	
    new Sprite(105,230,22,26),	
    new Sprite(137,230,22,26),	
    
    new Sprite(  6,261,24,28),	
    new Sprite( 38,261,24,28),	
    new Sprite( 70,261,24,28),	 
    new Sprite(102,261,24,28),	 
    new Sprite(135,261,24,28),	
    
    new Sprite(206, 58,69,73),	
    new Sprite(204,134,69,73),	
    new Sprite(205,212,69,78),	
    
    new Sprite(337,  0,139,147),
    new Sprite(336,151,139,147),
    new Sprite(336,301,139,155),
];