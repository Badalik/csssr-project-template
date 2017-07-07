import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import {Height} from '../blocks/helpers/helpers';

$(() => {
	const height = new Height();

	svg4everybody();
	height.init();
});
