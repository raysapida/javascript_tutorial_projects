$(function(){
  var inventory = $(rawInventory);
  var prototypeItem = $('#prototype-item');
  prototypeItem.detach();
  inventory.each(function(){
    var item = prototypeItem.clone();
    item.find('h3').text(this.name);
    $('#inventory').append(item);
  });
});
