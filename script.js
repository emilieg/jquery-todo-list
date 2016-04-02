


// ----------------------- Event Listeners -------------------------------

$('#myForm').submit(function(event){
  event.preventDefault();


var todoText = $('#todo-input').val();

if(!todoText) {
  alert('Please enter something to do!');
  return;
} else {
  createToDo(todoText);
}
});

var createToDo = function(text) {
  // var html = '<li>' + text + " " + '<input type="checkbox" value="X" class="X"/> </li>';
   var html = '<li>' + '<input type="checkbox" value="X" class="X"/>' + " " + text + '</li>';
  $('#toDo').append(html);
  $('#todo-input').val('');
}

$(document).on('click', '.X', function(){
  var listItem = $(this).closest('li');
    listItem.fadeOut(300, function(){
      listItem.remove();
    }); 
  });

  // $('.X').attr('checked', true);
  // $(this).parent().remove();
//   $('.X').fadeOut(300, function() { $('this').parent().remove(); });

// })

$('#toDo').sortable();

// $('#myForm').submit(function(event){
//   event.preventDefault();
  

//   $(this).children('input[type="text"]').each(function(index,elem){
//     var value = $(elem).val();

//      $(elem).val('');
//     $('ul').append('<li>' + value + " " + '<input type="checkbox" value="X" class="X"/> </li>');
   
//   });
// });


// $(document).on('click', '.X', function(){
//   $(this).parent().remove();
// })

//make the entire ul list sortable using the plug in
// $('#toDo').sortable();