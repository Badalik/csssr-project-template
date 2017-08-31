import 'intl-tel-input';

class IntlTelInput {
	constructor(input) {
		this.input = input;
		this.value = 0;
		this.errorCl = 'error';
	}
	events() {
		this.valid = this.valid.bind(this);
		this.input.on('blur keyup change', this.valid);
	}
	init() {
		this.input.intlTelInput({
			nationalMode: false,
			// initialCountry: geo,
			utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.1.0/js/utils.js'
		});
		this.events();
	}
	valid() {
		if (this.input.val().trim()) {
			if (!this.input.intlTelInput('isValidNumber')) {
				if (event.type === 'blur' || event.type === 'change') {
					this.value = this.input.val();
				}
				if (this.value) {
					this.input.addClass(this.errorCl);
				}
			} else {
				this.input.removeClass(this.errorCl);
				return true;
			}
		}

		return false;
	}
}

export {IntlTelInput};
