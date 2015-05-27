var editor = $('#input-box');
editor.bind('input', function () {
	$('.preview').html(markdown.toHTML(editor.val()));
})