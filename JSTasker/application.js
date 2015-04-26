$(function(){
  $('form#add_task').on('submit', function(event){
    event.preventDefault();
    var taskText = $('input#task_text').val();
    alert(taskText);
  });
});
