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
				<div class="container">
					<h1 class="h1 m-b-small">
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

				</div>
			`
		},
		css : {
			language : 'sass',
			data : `
				@import 'node_modules/coffeekraken-sugar/index';
				@include s-init();
				@include s-classes();
				@include s-typography-classes();
				body {
					background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
				}
				.container {
					@include s-position(absolute, middle, center);
					min-width:80vw;
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
