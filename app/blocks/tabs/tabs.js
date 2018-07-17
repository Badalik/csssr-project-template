import $ from 'jquery';

class Tabs {
	constructor(wrapper) {
		this.index = 0;
		this.wrapper = wrapper instanceof jQuery ? wrapper : $(wrapper);
		this.tab = this.wrapper.children();
		this.length = this.tab.length;
		this.tabActCl = 'tab_state_active';
	}
	skip(index) {
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
			this.onTabsLast();
		}

		if (this.index + 1 === this.length - 1) {
			this.onTabsPreLast();
		}
	}
	onTabsPreLast() {
	}
	onTabsLast() {
	}
	onTabsEnd() {
	}
}

export {Tabs};
