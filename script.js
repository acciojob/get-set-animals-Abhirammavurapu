//complete this code
class Animal {
	constructor (name){
		this.name=name;
	}
	get getname(){
		return this.name
	}
	set setNmae(newName){
		this.name=newNmae;
	}
}

class Dog extends Animal {
	constructor (name,breed){
		super(name);
		this.breed=breed;
	}
	makessund(){
		console.log("woof")
	}
}

class cat extends Animal {
	constructor (name,breed){
		super(name);
		this.breed=breed;
	}
	makessund(){
		console.log("purr")
	}
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
