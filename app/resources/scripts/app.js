'use strict';

$(function () {
	var App = function () {
		var App = this;

		this.Height = function () {
			this.wrapper = document.getElementById('js-wrapper');
			this.bottom = document.getElementById('js-footer');
		};

		this.Height.prototype = {
			events: function () {
				this.padding = this.padding.bind(this);
				window.addEventListener('load', this.padding);
				window.addEventListener('resize', this.padding);
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

		this.Form = function () {
			this.form = $('.js-form');
			this.inputPhone = this.form.find('.js-input-phone');
			this.geo = this.form.data('geo');
		};

		this.Form.prototype = {
			init: function () {
				this.form.each(function () {
					$(this).validate({
						errorClass: 'error',
						errorPlacement: function () {
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
