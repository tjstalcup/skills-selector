// import React from 'react';
// import $ from 'jquery';
$(document).ready(function() {

    $('.skills-selector').change(function() {
        var skill = $(this).val();
        $(this).val('');
        $('option[value="' + skill + '"').remove();

        $('.skills').append('<span class="skill">' + skill + ' <a href="#">x</a></span>');
    });

    $('.skills').on('click','.skill a',function(e){
    	e.preventDefault();
    	var skill = $(this).parent().text().replace(' x','');
    	$('.skills-selector').append('<option value="'+skill+'">'+skill+'</option>');
    	$(this).parent().remove();
    });

});
