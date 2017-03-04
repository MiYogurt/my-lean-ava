import test from 'ava';
import { Singleton } from '../src/Singleton';


console.log(Singleton);

test('new error', t => {
	try{
		let instance = new Singleton();
	}catch(e){
   		t.is(e.message, 'You should use static method getInstance get instance.');
	}
});