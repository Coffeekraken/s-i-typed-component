import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
import { init } from 'ityped';

/**
 * @name 		SITypedComponent
 * @extends 	SWebComponent
 * Webcomponent wrapper around the freaking cool iTyped micro library to create nice typewriter effect.
 *
 * @example 	html
 * Hello <s-i-typed strings="['Univers']" loop="true">World</s-i-typed>
 * @see 		https://github.com/luisvinicius167/ityped
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */


export default class SITypedComponent extends SWebComponent {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 * @protected
	 */
	static get defaultProps() {
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
			strings : []
		};
	}

	/**
	 * Css
	 * @protected
	 */
	static defaultCss(componentName, componentNameDash) {
		return `
			@keyframes s-i-typed-blink {
				100% {
					opacity: 0;
				}
			}
			@-webkit-keyframes s-i-typed-blink {
				100% {
					opacity: 0;
				}
			}
			@-moz-keyframes s-i-typed-blink {
				100% {
					opacity: 0;
				}
			}
			.ityped-cursor {
				font-size: 1em;
				opacity: 1;
				-webkit-animation: s-i-typed-blink 0.3s infinite;
				-moz-animation: s-i-typed-blink 0.3s infinite;
				animation: s-i-typed-blink 0.3s infinite;
				animation-direction: alternate;
			}
			${componentNameDash} {
			}
		`;
	}

	/**
	 * Should component accept prop
	 * @definition 		SWebComponent.shouldComponentAcceptProp
	 * @protected
	 */
	shouldComponentAcceptProp(prop) {
		return true;
	}

	/**
	 * Component will mount
	 * @definition 		SWebComponent.componentWillMount
	 * @protected
	 */
	componentWillMount() {
		super.componentWillMount();

	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 * @protected
	 */
	componentMount() {
		super.componentMount();

		this.props.strings.unshift(this.innerHTML);
		this.innerHTML = '';

		// init the iTyped library
		init(this, this.props);
	}
}
