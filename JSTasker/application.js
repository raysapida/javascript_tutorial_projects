$(function(){
  $('input#task_text').focus();
  $('form#add_task').on('submit', function(event){
    event.preventDefault();
    var taskText = $('input#task_text').val();
    var listText = "<li>"+taskText+"</li>";
    $('div#tasks ul').append(listText);
    $('input#task_text').val('');
  });
});
