import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
import { init as __iTypedInit } from 'ityped';

/**
 * @name 		SITypedComponent
 * @extends 	SWebComponent
 * Webcomponent wrapper around the freaking cool iTyped micro library to create nice typewriter effect.
 * @example 	html
 * Hello <s-i-typed strings="['Univers']" loop="true">World</s-i-typed>
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

 /**
  * @name 		ITyped
  * Create a nice typewriter effect
  * @styleguide 	Objects / ITyped
  * @example 	html
  * <h3 class="h3">
  * 	Hello <s-i-typed strings="['Univers']" loop="true">World</s-i-typed>
  * </h3>
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
	 * Component will mount
	 * @definition 		SWebComponent.componentWillMount
	 * @protected
	 */
	componentWillMount() {
		super.componentWillMount();
		this.props.strings.unshift(this.innerHTML);
		this.innerHTML = '';
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 * @protected
	 */
	componentMount() {
		super.componentMount();

		// init the iTyped library
		__iTypedInit(this, this.props);
	}
}
