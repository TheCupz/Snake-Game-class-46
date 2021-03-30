class Snake{
    constructor(){
        this.x = 0
        this.y = 0
        this.xSpeed = 0
        this.ySpeed = 0
        this.total = 0 
        this.score = 0
        this.tail = []
    }                
    show() {
        for(var i = 0; i < this.tail.length; i++){
            fill(255)
            rect(this.tail[i].x,this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
    }
    dir(x,y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }
    update() {
        console.log(this.tail.length);
        for(var i = 0; i < this.tail.length - 1; i++){
            this.tail[i] = this.tail [i + 1]; 
            console.log("Mission Succesful");
        }
        console.log(this.total);
        if(this.total >= 1) {
            this.tail[this.total - 1] = createVector(this.x,this.y)
        }
        for(var i = 0; i < this.score.length; i++){
            this.score[i] = this.score [i+1]
        }
        this.x = this.x+this.xSpeed*scl;
        this.y = this.y+this.ySpeed*scl;
        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    }

    eat(pos) {
        console.log("x pos" ,pos.x)
        console.log("y pos" ,pos.y)
        var d = dist(this.x, this.y, pos.x, pos.y);
        console.log("d",d)
        if(d<1) {
            this.total = this.total + 1;
            this.score++
            return true;
        }
        else{
            return false;
        }
    }
    death(pos){
        for(var i = 0; i < this.tail.length; i++){
            var pos = this.tail[i]
            var d = dist(this.x, this.y, pos.x, pos.y);
            if(d<1){
                this.total = 0;
                this.score = 0;
                this.tail = []; 
            }
        }
    }
}