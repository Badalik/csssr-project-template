import svg4everybody from 'svg4everybody';

const wrapper = document.getElementById('js-wrapper');
const footer = document.getElementById('js-footer');
const addPadding = function () {
	if (wrapper) {
		wrapper.style.paddingBottom = footer.offsetHeight + 'px';
	}
};

svg4everybody();

addPadding();
window.addEventListener('load', addPadding);
window.addEventListener('resize', addPadding);

