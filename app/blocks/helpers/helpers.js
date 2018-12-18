// import $ from 'jquery';

class Height {
	constructor() {
		this.wrapper = document.getElementsByClassName('js-wrapper')[0];
		this.bottom = document.getElementsByClassName('js-footer')[0];
	}

	events() {
		this.padding = this.padding.bind(this);
		window.addEventListener('load', this.padding);
		window.addEventListener('resize', this.padding);
	}

	init() {
		this.padding();
		this.events();
	}

	padding() {
		if (typeof this.wrapper !== 'undefined' && typeof this.bottom !== 'undefined') {
			this.wrapper.style.paddingBottom = this.bottom.offsetHeight + 'px';
		}
	}
}

export {Height};
