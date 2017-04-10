Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SWebComponent2 = require('coffeekraken-sugar/js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _ityped = require('ityped');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @name 		SITypedComponent
 * @extends 	SWebComponent
 * Webcomponent wrapper around the freaking cool iTyped micro library to create nice typewriter effect.
 *
 * @styleguide 	Objects / ITyped
 * @example 	html
 * Hello <s-i-typed strings="['Univers']" loop="true">World</s-i-typed>
 * @see 		https://github.com/luisvinicius167/ityped
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

var SITypedComponent = function (_SWebComponent) {
	_inherits(SITypedComponent, _SWebComponent);

	function SITypedComponent() {
		_classCallCheck(this, SITypedComponent);

		return _possibleConstructorReturn(this, (SITypedComponent.__proto__ || Object.getPrototypeOf(SITypedComponent)).apply(this, arguments));
	}

	_createClass(SITypedComponent, [{
		key: 'shouldAcceptComponentProp',


		/**
   * Should component accept prop
   * @definition 		SWebComponent.shouldComponentAcceptProp
   * @protected
   */
		value: function shouldAcceptComponentProp(prop) {
			return true;
		}

		/**
   * Component will mount
   * @definition 		SWebComponent.componentWillMount
   * @protected
   */

	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			_get(SITypedComponent.prototype.__proto__ || Object.getPrototypeOf(SITypedComponent.prototype), 'componentWillMount', this).call(this);
		}

		/**
   * Mount component
   * @definition 		SWebComponent.componentMount
   * @protected
   */

	}, {
		key: 'componentMount',
		value: function componentMount() {
			_get(SITypedComponent.prototype.__proto__ || Object.getPrototypeOf(SITypedComponent.prototype), 'componentMount', this).call(this);

			this.props.strings.unshift(this.innerHTML);
			this.innerHTML = '';

			// init the iTyped library
			(0, _ityped.init)(this, this.props);
		}
	}], [{
		key: 'defaultCss',


		/**
   * Css
   * @protected
   */
		value: function defaultCss(componentName, componentNameDash) {
			return '\n\t\t\t@keyframes s-i-typed-blink {\n\t\t\t\t100% {\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@-webkit-keyframes s-i-typed-blink {\n\t\t\t\t100% {\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@-moz-keyframes s-i-typed-blink {\n\t\t\t\t100% {\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.ityped-cursor {\n\t\t\t\tfont-size: 1em;\n\t\t\t\topacity: 1;\n\t\t\t\t-webkit-animation: s-i-typed-blink 0.3s infinite;\n\t\t\t\t-moz-animation: s-i-typed-blink 0.3s infinite;\n\t\t\t\tanimation: s-i-typed-blink 0.3s infinite;\n\t\t\t\tanimation-direction: alternate;\n\t\t\t}\n\t\t\t' + componentNameDash + ' {\n\t\t\t}\n\t\t';
		}
	}, {
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   * @protected
   */
		get: function get() {
			return {
				/**
     * Accept all the settings of the iTyped library
     * @type 	{Object}
     * @prop
     * @name 	iTyped
     * @see 	https://github.com/luisvinicius167/ityped
     */

				/**
     * Set the strings to pass through
     * @prop
     * @type 		{Array}
     */
				strings: []
			};
		}
	}]);

	return SITypedComponent;
}(_SWebComponent3.default);

exports.default = SITypedComponent;