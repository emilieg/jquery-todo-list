var myItems = [];
var myList = $("#toDo")


$('#myForm').submit(function(event){
  event.preventDefault();
  $(this).children('input[type="text"]').each(function(index,elem){
    var value = $(elem).val();
    $('ul').append('<li>' + value + " " + '<input type="button" value="X" class="X"/> </li>');
    $(elem).val('');
  });
});


$(document).on('click', '.X', function(){
  $(this).parent().remove();
})








