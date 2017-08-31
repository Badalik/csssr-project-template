import $ from 'jquery';
import {IntlTelInput} from '../intl-tel-input/intl-tel-input';

class Form {
	constructor() {
		this.wrapper = $('.js-forms');
		this.phone = new IntlTelInput(this.wrapper.find('.js-input_set_geo'));
	}
	init() {
		this.phone.init();
	}
}

export {Form};
