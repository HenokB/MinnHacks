class Star {
    constructor() {
        this.x = rand(0, FIELD_W)<<8;
        this.y = rand(0, FIELD_H)<<8;


        this.vectorX = 0;
        this.vectorY = rand( 100, 300 );

        //Star size
        this.starSize = rand( 1, 2 );
    };

    draw() {
        let x = this.x>>8;
        let y = this.y>>8;
        
        if ( x < camera_x  ||  camera_x + SCREEN_W <= x  ||  y < camera_y  ||  camera_y + SCREEN_H <= y ) {
            return;
        }
        virtualContext.fillStyle = rand(0,2)!=0 ? '#66F' : '#aef'; //If rand(0, 2) is NOT 0, chose #66F. Otherwise, choose #8af.
        virtualContext.fillRect( this.x>>8, this.y>>8, this.starSize, this.starSize );
    };

    //X and Y coordinates will move by the vector
    update() {
        this.x += this.vectorX * starSpeed / 100;
        this.y += this.vectorY * starSpeed / 100;
        if ( FIELD_H<<8 < this.y ) {
            this.x = rand(0, FIELD_W)<<8;
            this.y = 0;
        }
    };
};
class CharacterBase {
    constructor( si, x, y, vx, vy ) {
        this.spriteIndex = si;
        this.x           = x;
        this.y           = y;
        this.vectorX     = vx;
        this.vectorY     = vy;
        this.killItself  = false;
        this.count       = 0;
    };

     
    update() {
        this.count++;

        this.x += this.vectorX;
        this.y += this.vectorY;

        if (this.x+(100<<8) < 0 || (FIELD_W << 8) < this.x-(100<<8) || this.y+(100<<8) < 0 || (FIELD_H << 8) < this.y-(100<<8)) {
            this.killItself = true;
        }
    };

    //Draw a bullet
    draw() {
        drawSprite(this.spriteIndex, this.x, this.y);
    };

};


class Explosion extends CharacterBase {
    constructor( c, x, y, vx, vy ) {
        super( 0, x, y, vx, vy );
        this.timer = c;
    };

    update() {
        if ( this.timer ) {
            this.timer--;
            return;
        } 
        super.update();
    };

    draw() {
        if ( this.timer ) {//If timer is more than 0
            this.timer--;
            return;
        } 

        this.spriteIndex = 16 + (this.count>>2);
        if ( 27 <= this.spriteIndex  ) {
            this.killItself = true;
            return;
        } else {
            super.draw();
        }
    };
};
document.onkeydown = function (e) {
    keyStatus[e.code] = true;
    if ( gameOver  &&  e.code === 'KeyR' ) {
        delete jiki;
        jiki = new Jiki();
        gameOver = false;
        score    = 0;
    }
};



document.onkeyup = function (e) {
    keyStatus[e.code] = false;
};



function drawSprite ( spriteIndex, x, y ) {
    let spriteX = sprite[spriteIndex].x;
    let spriteY = sprite[spriteIndex].y;
    let spriteWidth = sprite[spriteIndex].width;
    let spriteHeight = sprite[spriteIndex].height;

    let px = (x>>8) - spriteWidth/2;
    let py = (y>>8) - spriteHeight/2;

    if ( px+spriteWidth < camera_x  ||  camera_x + SCREEN_W <= px  
        ||  py+spriteHeight < camera_y  ||  camera_y + SCREEN_H <= py ) 
    {
        return;
    }

    virtualContext.drawImage(spriteImage, spriteX, spriteY, spriteWidth, spriteHeight, 
        px, py, spriteWidth, spriteHeight);
};


function rand( min, max ) {
    return Math.floor(Math.random() * (max-min+1)) + min;
};



function checkHit( x1, y1, r1,  x2, y2, r2 ) {
    let base          = (x2-x1)>>8;
    let perpendicular = (y2-y1)>>8;
    let hypotenuse    = r1 + r2;
    return ( hypotenuse*hypotenuse >= base*base + perpendicular*perpendicular );

    

};


function explode( x, y, vx, vy ) {
    explosion.push( 
        new Explosion( 0, x, y, vx, vy )
    );

    for ( let i = 0; i < 10; i++ ) {
        let explodeVectorX = vx + (rand(-10, 10)<<5);
        let explodeVectorY = vy + (rand(-10, 10)<<5);

        explosion.push( 
            new Explosion( i, x, y, explodeVectorX, explodeVectorY )
        );
    }

};