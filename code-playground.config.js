module.exports = {
	// server port
	port : 3000,

	// title
	title : 's-i-typed-component',

	// layout
	layout : 'right',

	// compile server
	compileServer : {

		// compile server port
		port : 4000

	},

	// editors
	editors : {
		html : {
			language : 'html',
			data : `
				<h1 class="h3 m-b-small">
					Coffeekraken s-i-typed-component
				</h1>
				<p class="p m-b-bigger">
					Webcomponent wrapper around the freaking cool iTyped micro library to create nice typewriter effect.
				</p>
				<h2 class="h2">
					Hello <s-i-typed strings="['Univers']" loop="true" class="c-primary">World</s-i-typed>
					<br>
				</h2>
				Hello <s-i-typed strings="['John','You']" loop="true" type-speed="200" class="c-success">World</s-i-typed>
			`
		},
		css : {
			language : 'sass',
			data : `
				@import 'node_modules/coffeekraken-sugar/index';
				@import 'node_modules/coffeekraken-s-typography-component/index';
				@include s-init();
				@include s-classes();
				@include s-typography-classes();
				body {
					padding: s-space(big);
				}
			`
		},
		js : {
			language : 'js',
			data : `
				import 'webcomponents.js/webcomponents-lite'
				import SITypedComponent from './dist/index'
			`
		}
	}
}
