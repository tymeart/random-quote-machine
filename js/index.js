$(document).ready(function(){
	$.ajaxSetup({ cache: false });

	getQuote();

	function getQuote(){
		$.getJSON('https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en', function(data){
				$('.quote').html(data.quoteText);
			$('.twitter a').attr('href', 'https://twitter.com/home?status="' + data.quoteText + '"' + ' -' + data.quoteAuthor);
				$('.quote-source').html('<p>' + data.quoteAuthor + '</p>');
			})
	};

	$('.new-quote').on('click touch', getQuote);
});
