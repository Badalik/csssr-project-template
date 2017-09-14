'use strict';

$(function () {
	var App = function () {
		var App = this;

		this.Height = function () {
			var height = this;
			this.wrapper = document.getElementById('js-wrapper');
			this.bottom = document.getElementById('js-footer');
			this.mutation = new MutationObserver(function () {
				height.padding();
			});
		};

		this.Height.prototype = {
			events: function () {
				this.padding = this.padding.bind(this);
				window.addEventListener('load', this.padding);
				window.addEventListener('resize', this.padding);

				if (this.bottom !== null) {
					this.mutation.observe(this.bottom, {subtree: true, childList: true});
				}
			},
			init: function () {
				this.padding();
				this.events();
			},
			padding: function () {
				if (this.wrapper !== null && this.bottom !== null) {
					this.wrapper.style.paddingBottom = this.bottom.offsetHeight + 'px';
				}
			}
		};

		this.Tabs = function (wrapper) {
			this.index = 0;
			this.tab = wrapper.children();
			this.length = this.tab.length;
			this.tabActCl = 'tab_state_active';
		};

		this.Tabs.prototype = {
			skip: function (index) {
				if (typeof index !== 'undefined') {
					this.tab.eq(index).addClass(this.tabActCl).siblings().removeClass(this.tabActCl);
					this.index = index;
				} else if (this.index < this.length - 1) {
					this.tab.eq(this.index).removeClass(this.tabActCl).next().addClass(this.tabActCl);
					this.index++;
				} else {
					this.onTabsEnd();
				}
			},
			onTabsEnd: function () {
			}
		};

		this.IntlTelInput = function (input) {
			this.input = input;
			this.value = 0;
			this.errorCl = 'error';
		};

		this.IntlTelInput.prototype = {
			events: function () {
				this.valid = this.valid.bind(this);
				this.input.on('blur keyup change', this.valid);
			},
			init: function () {
				this.input.intlTelInput({
					nationalMode: false,
					// initialCountry: geo,
					utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.1.0/js/utils.js'
				});
				this.events();
			},
			valid: function () {
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
		};

		this.Form = function () {
			this.wrapper = $('.js-form');
			this.flowForm = this.wrapper.find('.js-flow-form');
			this.inputPhone = this.wrapper.find('.js-input_set_geo');
			this.phone = new App.IntlTelInput(this.inputPhone);
		};

		this.Form.prototype = {
			events: function () {
				var form = this;

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
			},
			init: function () {
				if (this.phone.length) {
					this.phone.init();
				}

				this.events();
			}
		};
	};

	App.prototype = {
		init: function () {
			this.height = new this.Height();
			this.form = new this.Form();

			this.height.init();
			this.form.init();
		}
	};

	var app = new App();
	app.init();

});