import $ from 'jquery';
import 'jquery-validation';
import Cleave from 'cleave.js';
import 'cleave.js/dist/addons/cleave-phone.us.js';
import {Tabs} from '../tabs/tabs';

class Form {
	constructor() {
		this.wrapper = $('.js-forms');
		this.form = this.wrapper.find('.js-form');
		this.geo = typeof geo !== 'undefined' ? geo : '';
		this.tabs = new Tabs(this.wrapper.find('.js-forms-tabs'));
	}
	events() {
		const form = this;

		/*this.flowForm.on('submit', function () {
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
		});*/

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
		/*this.form.each(function () {
			$(this).validate({
				errorClass: 'error',
				errorPlacement() {
					return true;
				}
			});
		});*/

		/*this.inputPhone = new Cleave('.js-input_set_geo', {
			phone: true,
			phoneRegionCode: this.geo
		});*/

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
