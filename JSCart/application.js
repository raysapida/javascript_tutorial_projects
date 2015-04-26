$(function(){
  var inventory = $(rawInventory);
  var prototypeItem = $('#prototype-item');
  prototypeItem.detach();
  inventory.each(function(){
    var item = prototypeItem.clone();
    item.find('h3').text(this.name);
    item.find('span#price').text(this.price);
    item.find('span#qty').text(this.stock);
    item.find('div').attr("id",this.product_id);
    $('#inventory').append(item);
    item.on('click', function () {
      alert("Adding " + $(this).attr('id') + " to the cart." );
    });
  });
});
