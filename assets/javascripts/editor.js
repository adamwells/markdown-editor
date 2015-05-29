var input = $('.input-box');
input.bind('input', function () {
	$('.rendered-markdown').html(markdown.toHTML(input.val()));
})

var downloadButton = $('.download');
downloadButton.bind('click', function () {
	getMardownFile(input);
})

var getMardownFile = function(input, filename) {
	var content = input.val();
	console.log(content);
}