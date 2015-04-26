$(function(){
  var inventory = $(rawInventory);
  var prototypeItem = $('#prototype-item');
  prototypeItem.detach();
  inventory.each(function(){
    alert("Inserting " + this.name);
  });
});
