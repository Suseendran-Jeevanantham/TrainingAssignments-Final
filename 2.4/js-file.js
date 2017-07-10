function mammal(name,legs){
    this.name = name;
    this.legs = legs;
}

mammal.prototype.display = function(){
    console.log(this.name + " is a mammal with " + this.legs + " legs");
}

function tiger(name,legs){
    mammal.call(this,name,legs);
}

function human(name,legs){
    mammal.call(this,name,legs)
}

tiger.prototype = mammal.prototype;
human.prototype = mammal.prototype;

var tiger = new tiger("Tiger" , 4);
var human = new human("Human", 2);


tiger.display();
human.display();   