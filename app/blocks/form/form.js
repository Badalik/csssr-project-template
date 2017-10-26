import $ from 'jquery';
import 'jquery-validation';
import {IntlTelInput} from '../intl-tel-input/intl-tel-input';

class Form {
	constructor() {
		this.wrapper = $('.js-forms');
		this.form = this.wrapper.find('.js-form');
		this.flowForm = this.wrapper.find('.js-flow-form');
		this.inputPhone = this.wrapper.find('.js-input_set_geo');
		this.phone = new IntlTelInput(this.inputPhone);
	}
	events() {
		const form = this;

		this.flowForm.on('submit', function () {
			if ($(this).find(form.inputPhone).length) {
				if (form.phone.input.val().trim()) {
					mbc.tag('030 Пользователь указал номер телефона');
					if (form.phone.valid()) {
						mbc.tag('034 Пользователь указал верно номер телефона');
					} else {
						mbc.tag('033 Пользователь указал неверно номер телефона');
					}
				} else {
					mbc.tag('031 Пользователь не указал номер телефона');
				}
			}
		});

		/*this.form.on('submit', function (e) {
			e.preventDefault();
			const $this = $(this);

			form.formRecord($this);
		});*/

		/*this.skipTrig.on('click', function () {
			const data = $(this).data();
			form.skip();

			if (!$.isEmptyObject(data)) {
				for (const key in data) {
					if ({}.hasOwnProperty.call(data, key)) {
						mbc.session.set(key, data[key]);
					}
				}
			}
		});*/

		/*this.check.on('change', function () {
			const $parentForm = $(this).parents('.js-form');

			$parentForm.serializeArray().forEach(function (item) {
				mbc.session.set(item.name, item.value);
			});

			setTimeout(() => {
			}, 600);
		});*/
	}
	init() {
		this.phone.init();
		this.events();
	}
	formRecord(form) {
		if (form.valid()) {
			form.serializeArray().forEach(function (item) {
				mbc.session.set(item.name, item.value);
			});
		}
	}
}

export {Form};
