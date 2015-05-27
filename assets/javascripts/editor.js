include '../vendor/markdown-0.6.0-beta1/lib/markdown.js'

var editor = $('#editor');
editor.bind('input', function () {
	$('.preview').html(editor.val());
})