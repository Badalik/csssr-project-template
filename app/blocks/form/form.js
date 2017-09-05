import $ from 'jquery';
import {IntlTelInput} from '../intl-tel-input/intl-tel-input';

class Form {
	constructor() {
		this.wrapper = $('.js-form');
		this.flowForm = this.wrapper.find('.js-flow-form');
		this.phone = new IntlTelInput(this.wrapper.find('.js-input_set_geo'));
	}
	events() {
		this.flowForm.on('submit', () => {
			if (this.phone.input.val().trim()) {
				mbc.tag('030 Пользователь указал номер телефона');
				if (this.phone.valid()) {
					mbc.tag('034 Пользователь указал верно номер телефона');
				} else {
					mbc.tag('033 Пользователь указал неверно номер телефона');
				}
			} else {
				mbc.tag('031 Пользователь не указал номер телефона');
			}
		});
	}
	init() {
		this.phone.init();
		this.events();
	}
}

export {Form};
