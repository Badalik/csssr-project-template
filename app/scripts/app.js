import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import {Height} from '../blocks/helpers/helpers';
import {Form} from '../blocks/form/form';

$(() => {
	const height = new Height();
	const form = new Form();

	svg4everybody();
	height.init();
	form.init();
});
