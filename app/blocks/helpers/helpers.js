// import $ from 'jquery';

class Height {
	constructor() {
		this.wrapper = document.getElementById('js-wrapper');
		this.bottom = document.getElementById('js-footer');
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
		if (this.wrapper !== null && this.bottom !== null) {
			this.wrapper.style.paddingBottom = this.bottom.offsetHeight + 'px';
		}
	}
}

export {Height};
