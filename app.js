$(document).ready(function() {
  // all code goes in here
    var color = 'white';
    var colors = 'red blue green yellow white brown';

//set colors on color button click
  $('#brown').on('click', function() {
  	color = 'brown';
    });
  $('#red').on('click', function() {
    color = 'red';
  	});
  $('#blue').on('click', function() {
    color = 'blue';
  	});
  $('#green').on('click', function() {
    color = 'green';
  	});
  $('#yellow').on('click', function() {
    color = 'yellow';
  	});
  $('#white').on('click', function() {
    color = 'white';
	});
 
 //change pixie color on pixie click based on color variable  	
  $('.box').on('click', function() {
  	$(this).removeClass(colors);
   	$(this).addClass(color);
 	});
  $('.box').on('dblclick', function() {
    $(this).removeClass(colors);
  	});
  $('#reset').on('click', function() {
    $('.box').removeClass(colors)
    });
 });