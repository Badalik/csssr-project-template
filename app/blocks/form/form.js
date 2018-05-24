import $ from 'jquery';
import 'jquery-validation';
import Cleave from 'cleave.js';
import 'cleave.js/dist/addons/cleave-phone.us.js';

class Form {
	constructor() {
		this.form = $('.js-form');
		this.inputPhone = this.form.find('.js-input-phone');
		this.geo = this.form.data('geo');
	}
	init() {
		this.form.each(function () {
			$(this).validate({
				errorClass: 'error',
				errorPlacement() {
					return true;
				}
			});
		});

		if (this.inputPhone.length) {
			this.phoneMask = new Cleave(this.inputPhone, {
				phone: true,
				phoneRegionCode: this.geo
			});
		}
	}
}

export {Form};
