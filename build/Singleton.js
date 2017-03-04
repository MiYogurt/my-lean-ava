"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Singleton = function () {
	function Singleton() {
		_classCallCheck(this, Singleton);
	}

	_createClass(Singleton, null, [{
		key: "getInstance",
		value: function getInstance() {
			return Singleton._instance;
		}
	}]);

	return Singleton;
}();

Singleton._instance = new Singleton();


var instance = Singleton.getInstance();

console.log(instance instanceof Singleton);

console.log(instance === Singleton.getInstance());

exports.Singleton = Singleton;