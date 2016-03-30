var myItems = [];
var myList = $("#toDo")


$('#myForm').submit(function(event){
  event.preventDefault();
  
  
  $(this).children('input[type="text"]').each(function(index,elem){
    var value = $(elem).val();
     $(elem).val('');
    $('ul').append('<li>' + value + " " + '<input type="checkbox" value="X" class="X"/> </li>');
   
  });
});


$(document).on('click', '.X', function(){
  $(this).parent().remove();
})








