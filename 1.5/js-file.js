function Person_Details(name,id){
	this.name = name;
	this.id = id;
}
 
var p1 = new Person_Details("John",12);
var p2 = new Person_Details("Abraham",20);
var p3 = new Person_Details("Cody",55);
var p4 = new Person_Details("Doe",65);
var p5 = new Person_Details("Lara",06);
 
var Person_array = [p1,p2,p3,p4,p5];
 
Person_array.sort(function(x,y){
	if(x.name > y.name){
		return 1;
	}
	return -1;
})

Person_array.forEach(value => console.log(value));