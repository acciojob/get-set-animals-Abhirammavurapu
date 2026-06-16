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
	makessound(){
		console.log("dog sounds like woof")
	}
}

class Cat extends Animal {
	constructor (name,breed){
		super(name);
		this.breed=breed;
	}
	makessound(){
		console.log("cat sounds like purr")
	}
}
const dog1 =new Dog("dog","golden retrever")
console.log(dog1.name)
