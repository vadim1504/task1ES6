/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _UnitsConverter = __webpack_require__(1);

	var _UnitsConverter2 = _interopRequireDefault(_UnitsConverter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var unitsConverter = new _UnitsConverter2.default();
	var conversion = {
	    from: 'cm',
	    to: 'mm'
	};
	var converter = unitsConverter.createConverter(conversion);
	console.log(converter.convert("5.1", "1"));
	console.log(converter.convert(1.5, 2, 7));

	conversion = {
	    from: 'mm',
	    to: 'cm'
	};
	converter = unitsConverter.createConverter(conversion);
	console.log(converter.convert([20, 5, 1000]));
	console.log(converter.convert("500"));

	conversion = {
	    from: 'cm',
	    to: 'm'
	};
	converter = unitsConverter.createConverter(conversion);
	console.log(converter.convert(2));
	console.log(converter.convert(["500", "300"]));

	conversion = {
	    from: 'kg',
	    to: 'g'
	};
	converter = unitsConverter.createConverter(conversion);
	console.log(converter.convert(10));
	console.log(converter.convert(0.005));

	conversion = {
	    from: 't',
	    to: 'kg'
	};
	converter = unitsConverter.createConverter(conversion);
	console.log(converter.convert(2));

	conversion = {
	    from: 't',
	    to: 'g'
	};
	converter = unitsConverter.createConverter(conversion);
	console.log(converter.convert(2));

	conversion = {
	    from: 'c',
	    to: 'f'
	};
	converter = unitsConverter.createConverter(conversion);
	console.log(converter.convert(45));

	conversion = {
	    from: 'f',
	    to: 'c'
	};
	converter = unitsConverter.createConverter(conversion);
	console.log(converter.convert(113));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Length = __webpack_require__(2);

	var _Length2 = _interopRequireDefault(_Length);

	var _Weight = __webpack_require__(4);

	var _Weight2 = _interopRequireDefault(_Weight);

	var _Temperature = __webpack_require__(5);

	var _Temperature2 = _interopRequireDefault(_Temperature);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	    function _class() {
	        _classCallCheck(this, _class);
	    }

	    _createClass(_class, [{
	        key: 'createConverter',
	        value: function createConverter(obj) {
	            if (obj.from == "cm" && obj.to == "mm") return new _Length2.default(10);
	            if (obj.from == "mm" && obj.to == "cm") return new _Length2.default(0.1);
	            if (obj.from == "cm" && obj.to == "m") return new _Length2.default(0.01);
	            if (obj.from == "kg" && obj.to == "g") return new _Weight2.default(1000);
	            if (obj.from == "t" && obj.to == "kg") return new _Weight2.default(1000);
	            if (obj.from == "t" && obj.to == "g") return new _Weight2.default(1000000);
	            if (obj.from == "c" && obj.to == "f") return new _Temperature2.default(0);
	            if (obj.from == "f" && obj.to == "c") return new _Temperature2.default(1);
	        }
	    }]);

	    return _class;
	}();

	exports.default = _class;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Converter2 = __webpack_require__(3);

	var _Converter3 = _interopRequireDefault(_Converter2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _class = function (_Converter) {
	  _inherits(_class, _Converter);

	  function _class() {
	    _classCallCheck(this, _class);

	    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	  }

	  return _class;
	}(_Converter3.default);

	exports.default = _class;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	    function _class(k) {
	        _classCallCheck(this, _class);

	        this.k = k;
	    }

	    _createClass(_class, [{
	        key: "convert",
	        value: function convert(value) {
	            var result = void 0;
	            if (typeof value == "string" && arguments.length == 1) {
	                result = "";
	                result += value * this.k;
	            } else if (typeof value == "number" && arguments.length == 1) {
	                result = 0;
	                result += value * this.k;
	            } else {
	                if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object") {
	                    result = [];
	                    var array = arguments[0];
	                    for (var i = 0; i < array.length; i++) {
	                        result[i] = array[i] * this.k;
	                    }
	                } else {
	                    result = "";
	                    for (var i = 0; i < arguments.length; i++) {
	                        result += arguments[i] * this.k + " ";
	                    }
	                }
	            }
	            return result;
	        }
	    }]);

	    return _class;
	}();

	exports.default = _class;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Converter2 = __webpack_require__(3);

	var _Converter3 = _interopRequireDefault(_Converter2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _class = function (_Converter) {
	  _inherits(_class, _Converter);

	  function _class() {
	    _classCallCheck(this, _class);

	    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	  }

	  return _class;
	}(_Converter3.default);

	exports.default = _class;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Converter2 = __webpack_require__(3);

	var _Converter3 = _interopRequireDefault(_Converter2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _class = function (_Converter) {
	    _inherits(_class, _Converter);

	    function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }

	    _createClass(_class, [{
	        key: 'convert',
	        value: function convert(value) {
	            if (this.k == 0) return value * 1.8 + 32;
	            return (value - 32) / 1.8;
	        }
	    }]);

	    return _class;
	}(_Converter3.default);

	exports.default = _class;

/***/ }
/******/ ]);