function updateTaskCounter(){
  var task_count = $('div#tasks ul').children().not('li.completed').size();
  $('span#task_counter').text(task_count);
}
$(function(){
  $('input#task_text').focus();
  $('form#add_task').on('submit', function(event){
    event.preventDefault();
    var taskText = $('input#task_text').val();
    var listText = "<li>"+taskText+"</li>";
    $('div#tasks ul').append(listText);
    $('input#task_text').val('');
    $('ul li').on('click', function(event){
      $(this).toggleClass('completed');
      updateTaskCounter();
    });
    updateTaskCounter();
  });
});
