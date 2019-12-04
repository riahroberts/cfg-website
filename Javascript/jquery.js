

$('document').ready(function(){
console.log("HI");

// meat or no meat
$('#meatbutton').click(function(){
  $('#veggiebutton').prop("disabled", true);
});

$('#veggiebutton').click(function(){
  $('#meatbutton').prop("disabled", true);
});


});
