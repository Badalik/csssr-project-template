class Tabs {
	constructor(wrapper) {
		this.index = 0;
		this.wrapper = typeof wrapper === 'string' ? document.getElementsByClassName(wrapper)[0] : wrapper;
		this.tab = this.wrapper.children;
		this.length = this.tab.length;
		this.tabActCl = 'tab_state_active';
	}

	skip(index) {
		if (typeof index !== 'undefined') {
			for (let i = 0, l = this.tab.length; i < l; i++) {
				this.tab[i].classList.remove(this.tabActCl);
			}

			this.tab[index].classList.add(this.tabActCl);
			this.index = index;
		} else if (this.index < this.length - 1) {
			this.tab[this.index].classList.remove(this.tabActCl);
			this.tab[this.index + 1].classList.add(this.tabActCl);
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
