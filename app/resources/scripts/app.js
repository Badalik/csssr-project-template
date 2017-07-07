'use strict';

$(function () {
	var App = function () {
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
	};

	App.prototype = {
		init: function () {
			this.height = new this.Height();

			this.height.init();
		}
	};

	var app = new App();
	app.init();

});