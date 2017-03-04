"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 妈妈类
var Mother = function () {
	function Mother() {
		_classCallCheck(this, Mother);
	}

	_createClass(Mother, null, [{
		key: "giveMe",

		// 向妈妈申请所有你想要的
		value: function giveMe(whatYouWant) {
			switch (whatYouWant) {
				// 糖糖
				case "tangtang":
					console.log("宝宝，你一个人吃果冻是非常危险的哦，妈妈喂你~~");
					return Mother.chewJelly(new Jelly());
				// 飞飞
				case "feifei":
					console.log("宝宝，家里已经买了很多飞机了哦，");
					return null;
				default:
					return null;
			}
		}
	}, {
		key: "chewJelly",
		value: function chewJelly(jelly) {
			jelly.chewed = true;
			return jelly;
		}
	}]);

	return Mother;
}();

// 果冻类


var Jelly = function Jelly() {
	_classCallCheck(this, Jelly);

	this.chewed = false;
}
// 是否咀嚼过的果冻
;

// 玩具飞机


var ToyPlane = function ToyPlane() {
	_classCallCheck(this, ToyPlane);
};

// 宝宝要开始提需求了
// 宝宝要糖糖


var jelly = Mother.giveMe('tangtang');

// 宝宝要飞飞
var toyPlane = Mother.giveMe('feifei');

console.log(jelly instanceof Jelly); // 妈妈给宝宝果冻
console.log(jelly.chewed === true); // 宝宝得到的果冻是经过处理的
console.log(toyPlane === null); // 妈妈不同意买飞机


console.log("///////////////////// \u5206\u5272\u7EBF /////////////////////////");

// 正则工厂
function fieldTest(fieldName) {
	switch (fieldName) {
		case 'phone':
			return (/^1[3|4|5|8][0-9]\d{4,8}$/
			);
		case 'email':
			return (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
			);
		case 'character':
			// 是否为汉字
			return (/^[\u4e00-\u9fa5]{0,}$/
			);
	}
}

var email = 'belovedyogurt@gmail.com';
var name = "陈大明";

console.log(fieldTest('email').test(email));
console.log(fieldTest('character').test(name));

console.log("///////////////////// \u5206\u5272\u7EBF /////////////////////////");

function XiaoMi(factoryName) {
	switch (factoryName) {
		case 'battery':
			return MobileBatteryFactory;
		case 'screen':
			return MobileScreenFactory;
	}
}

var Battery = function Battery() {
	_classCallCheck(this, Battery);
};

;

var MobileBatteryFactory = function () {
	function MobileBatteryFactory() {
		_classCallCheck(this, MobileBatteryFactory);
	}

	_createClass(MobileBatteryFactory, null, [{
		key: "getBattery",
		value: function getBattery() {
			return new Battery();
		}
	}]);

	return MobileBatteryFactory;
}();

var MobileScreenFactory = function () {
	function MobileScreenFactory() {
		_classCallCheck(this, MobileScreenFactory);
	}

	_createClass(MobileScreenFactory, null, [{
		key: "getScreen",
		value: function getScreen() {
			return { name: 'screen' };
		}
	}]);

	return MobileScreenFactory;
}();

console.log(XiaoMi('battery').getBattery() instanceof Battery);
console.log(XiaoMi('screen').getScreen().name === 'screen');

console.log("///////////////////// \u5206\u5272\u7EBF /////////////////////////");

var AllFactory = function AllFactory() {
	_classCallCheck(this, AllFactory);
};

AllFactory.getFieldTest = function () {
	return fieldTest;
};

AllFactory.getMother = function () {
	return Mother;
};

var mom = AllFactory.getMother();

var test = AllFactory.getFieldTest();

console.log(mom === Mother);
console.log(test('email').test(email));