

$('document').ready(function(){

// meat or no meat
$('#meatbutton').click(function(){
  $('#veggiebutton').prop("disabled", true);
});

$('#veggiebutton').click(function(){
  $('#meatbutton').prop("disabled", true);
});


});
