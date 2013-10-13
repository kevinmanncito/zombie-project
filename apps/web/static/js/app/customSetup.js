// This file contains setup related items that don't fit elsewhere (default configs, bootstrapped data, etc.)

define([
    'jquery',
], function(
    $
) {

	function getCookie(name) {
	    var cookieValue = null;
	    if (document.cookie && document.cookie != '') {
	        var cookies = document.cookie.split(';');
	        for (var i = 0; i < cookies.length; i++) {
	            var cookie = jQuery.trim(cookies[i]);
	            // Does this cookie string begin with the name we want?
	            if (cookie.substring(0, name.length + 1) == (name + '=')) {
	                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	                break;
	            }
	        }
	    }
	    return cookieValue;
	}

	var csrftoken = getCookie('csrftoken');

	console.log(csrftoken);

	$.ajaxSetup({
        crossDomain: false, // obviates need for sameOrigin test
    	beforeSend: function(xhr, settings) {
	        xhr.setRequestHeader("X-CSRFToken", csrftoken);
	    }
    });

    // Parse bootstrapped model information
    // VARIABLES = $.parseJSON(VARIABLES);

});
