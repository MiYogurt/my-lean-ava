class Singleton{
	static _instance = new Singleton();
	constructor(){};

	static getInstance(){
		return Singleton._instance;
	} 
}


let instance = Singleton.getInstance();

console.log(instance instanceof Singleton);

console.log(instance === Singleton.getInstance());