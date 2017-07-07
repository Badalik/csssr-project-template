import $ from 'jquery';
import 'classlist-polyfill';
import 'mutationobserver-shim';

class Height {
	constructor() {
		this.wrapper = document.getElementById('js-wrapper');
		this.bottom = document.getElementById('js-footer');
		this.mutation = new MutationObserver(() => {
			this.padding();
		});
	}
	events() {
		this.padding = this.padding.bind(this);
		window.addEventListener('load', this.padding);
		window.addEventListener('resize', this.padding);

		if (this.bottom !== null) {
			this.mutation.observe(this.bottom, {subtree: true, childList: true});
		}
	}
	init() {
		this.padding();
		this.events();
	}
	padding() {
		if (this.wrapper !== null && this.bottom !== null) {
			this.wrapper.style.paddingBottom = this.bottom.offsetHeight + 'px';
		}
	}
}

export {Height};
