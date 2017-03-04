"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 妈妈类
var Month = function () {
	function Month() {
		_classCallCheck(this, Month);
	}

	_createClass(Month, null, [{
		key: "giveMe",

		// 向妈妈申请所有你想要的
		value: function giveMe(whatYouWant) {
			switch (whatYouWant) {
				// 糖糖
				case "tangtang":
					console.log("宝宝，你一个人吃果冻是非常危险的哦，妈妈喂你~~");
					return Month.chewJelly(new Jelly());
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

	return Month;
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


var jelly = Month.giveMe('tangtang');

// 宝宝要飞飞
var toyPlane = Month.giveMe('feifei');

console.log(jelly instanceof Jelly); // 妈妈给宝宝果冻
console.log(jelly.chewed === true); // 宝宝得到的果冻是经过处理的

console.log(toyPlane === null); // 妈妈不同意买飞机