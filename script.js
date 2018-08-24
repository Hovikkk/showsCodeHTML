$(document).ready(function() {
	$("body").append('<div class="footer"><p id="myScript"></p></div>');
	$("#myScript").css({
        "position":"fixed",
        "left":"0",
        "bottom":"0",
		"width": "70%",
		"height": "30px",
		"line-height": "30px",
		"background-color": "red",
		"color": "white",
		"text-align": "center",
		"margin": "0"
    })
	
	$("body").mouseover(function(){  
		var tag;
		tag = window.event.srcElement.tagName;
		var attributes = window.event.srcElement.attributes;
		$("#myScript").text(tag + " ");
		$('#myScript').append($('<span>').attr('id', 'result'));
		for (var key in attributes) {
		  if (attributes[key].nodeName) {
			$('<span>', {
			  text: attributes[key].nodeName + ': ' + attributes[key].nodeValue + ', '
			}).appendTo('#result');
		  }
		}
    }); 
	
	$("body").mouseout(function(){
		$('#result').remove();
	});
});