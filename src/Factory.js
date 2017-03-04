// 妈妈类
class Mother {
	// 向妈妈申请所有你想要的
	static giveMe(whatYouWant){
		switch(whatYouWant){
			// 糖糖
			case "tangtang":
				console.log("宝宝，你一个人吃果冻是非常危险的哦，妈妈喂你~~"); 
				return Mother.chewJelly(new Jelly);
			// 飞飞
			case "feifei":
				console.log("宝宝，家里已经买了很多飞机了哦，")
				return null;
			default: return null;
		}
	}

	static chewJelly(jelly){
		jelly.chewed = true;
		return jelly;
	}
}

// 果冻类
class Jelly{
	// 是否咀嚼过的果冻
	chewed = false;
}

// 玩具飞机
class ToyPlane {}


// 宝宝要开始提需求了
// 宝宝要糖糖
let jelly = Mother.giveMe('tangtang');

// 宝宝要飞飞
let toyPlane = Mother.giveMe('feifei');

console.log(jelly instanceof Jelly ); // 妈妈给宝宝果冻
console.log(jelly.chewed === true ); // 宝宝得到的果冻是经过处理的
console.log(toyPlane === null) // 妈妈不同意买飞机


console.log(`///////////////////// 分割线 /////////////////////////`);


// 正则工厂
function fieldTest(fieldName){
	switch(fieldName){
		case 'phone':
			return /^1[3|4|5|8][0-9]\d{4,8}$/;
		case 'email':
			return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
		case 'character': // 是否为汉字
			return /^[\u4e00-\u9fa5]{0,}$/;
	}
}

let email = 'belovedyogurt@gmail.com';
let name = "陈大明";

console.log(fieldTest('email').test(email));
console.log(fieldTest('character').test(name));


console.log(`///////////////////// 分割线 /////////////////////////`);

function XiaoMi(factoryName) {
	switch(factoryName){
		case 'battery': return MobileBatteryFactory;
		case 'screen': return MobileScreenFactory;
	}
}

class Battery{};

class MobileBatteryFactory {
	static getBattery(){
		return new Battery();
	}
}

class MobileScreenFactory {
	static getScreen(){
		return { name: 'screen' }
	}
}

console.log(XiaoMi('battery').getBattery() instanceof Battery);
console.log(XiaoMi('screen').getScreen().name === 'screen');


console.log(`///////////////////// 分割线 /////////////////////////`);

class AllFactory {
	static getFieldTest = () => fieldTest;
	static getMother = () => Mother
}

let mom = AllFactory.getMother();

let test = AllFactory.getFieldTest();

console.log(mom === Mother);
console.log(test('email').test(email));	