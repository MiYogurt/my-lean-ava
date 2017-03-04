import test from 'ava';
// import { Singleton } from '../src/Singleton';
import { Singleton } from '../build/Singleton';


console.log(Singleton);

test('new error', t => {
		let instance = Singleton.getInstance();
		t.is(instance instanceof Singleton, true);
});