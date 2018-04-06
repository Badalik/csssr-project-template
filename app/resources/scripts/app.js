'use strict';

var SMSLink = SMSLink || {},
	replaceBody = null,
	ver = '';

SMSLink.detector = SMSLink.detector || function () {
	var a, b, c, d = navigator.userAgent;
	return d.match(/iPad/i) || d.match(/iPhone/i) ? (a = "iOS", c = d.indexOf("OS ")) : d.match(/Android/i) ? (a = "Android", c = d.indexOf("Android ")) : a = null, "iOS" === a && c > -1 ? b = d.substr(c + 3, 3).replace("_", ".") : "Android" === a && c > -1 ? a = d.substr(c + 8, 3) : ver = null, {
		version: function () {
			return b
		}, os: function () {
			return a
		}, isMobile: function () {
			return null !== a
		}
	};
};

SMSLink.link = SMSLink.link || function () {
	function a() {
		SMSLink.linkDetector || (SMSLink.linkDetector = new SMSLink.detector);
	}

	return a(), {
		replaceAll: function () {
			this.replaceWithSelector("[href^='sms:']")
		}, replaceWithSelector: function (a) {
			var elements = document.querySelectorAll(a);
			for (var i in elements) this.replace(elements[i]);
		}, replace: function (a) {
			if (a.href) {
				switch (replaceBody = !1, SMSLink.linkDetector.os()) {
					case "iOS":
						parseFloat(SMSLink.linkDetector.version()) <= 8 ? replaceBody = ";" : replaceBody = ";?&"
				}
				replaceBody && (a.href = a.href.replace(/\?body=/, replaceBody + "body="));
			}
		}
	};
};

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
			this.wrapper = wrapper instanceof jQuery ? wrapper : $(wrapper);
			this.tab = this.wrapper.children();
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

				if (this.index === this.length - 1) {
					this.index++;
					this.onTabsLast();
				}

				if (this.index + 1 === this.length - 1) {
					this.onTabsPreLast();
				}
			},
			onTabsPreLast: function () {
			},
			onTabsLast: function () {
			},
			onTabsEnd: function () {
			}
		};

		this.Form = function () {
			this.wrapper = $('.js-forms');
			this.form = this.wrapper.find('.js-form');
			this.geo = typeof geo !== 'undefined' ? geo : '';
			this.tabs = new App.Tabs(this.wrapper.find('.js-forms-tabs'));
		};

		this.Form.prototype = {
			events: function () {
				var form = this;

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
			},
			init: function () {
				/*this.form.each(function () {
					$(this).validate({
						errorClass: 'error',
						errorPlacement: function () {
							return true;
						}
					});
				});*/

				this.inputPhone = new Cleave('.js-input_set_geo', {
					phone: true,
					phoneRegionCode: this.geo
				});

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