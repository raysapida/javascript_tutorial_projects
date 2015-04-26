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
      JSTasker.updatePage();
    });
    JSTasker.updatePage();
  });
});
var JSTasker = {
  updateTaskCounter: function() {
    var taskCount = $('div#tasks ul').children().not('li.completed').size();
    $('span#task_counter').text(task_count);
  },
  sortTasks: function() {
    var taskList = $('div#tasks ul');
    var allCompleted = taskList.children('.completed');
    allCompleted.detach();
    taskList.append(allCompleted)
  },
  updatePage: function (){
    this.updateTaskCounter();
    this.sortTasks();
  }
};
