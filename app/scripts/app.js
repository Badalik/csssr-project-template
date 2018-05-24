import $ from 'jquery';
import {Height} from '../blocks/helpers/helpers';
import {Form} from '../blocks/form/form';

$(() => {
	const height = new Height();
	const form = new Form();

	height.init();
	form.init();
});
