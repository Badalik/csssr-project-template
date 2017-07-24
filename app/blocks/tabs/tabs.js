class Tabs {
	constructor(wrapper) {
		this.index = 0;
		this.tab = wrapper.children();
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
	}
	onTabsEnd() {
	}
}

export {Tabs};
