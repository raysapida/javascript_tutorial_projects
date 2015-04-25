$(function (){
  var backToTop = "<a href='#top'>Back to Top</a>";
  $("div.article").append(backToTop);
  var toc = "<h2 id='toc_header'>Table of Contents</h2>";
  var list = "<ul id='toc_list'></ul>";
  $("h1").after(toc);
  $("h2:first").after(list);
  $("div.article h2").css("background-color","#CCF")
  $("div.article h2").each(function (){
    var title = $(this).text();
    var slug = title.trim().toLowerCase().replace(" ", "_");
    $(this).attr('id', slug);
    var listLink = "<a href="+"'#"+slug+"'>"+title+"</a>"
    var listItem = "<li>" + listLink + "</li>";
    $("ul").append(listItem);

    var toggleLink = $("<a href=''>(hide)</a>");
    toggleLink.on('click', function (event){
      event.preventDefault();
      var oldText = $(this).text();
      var newText = (oldText === '(hide)') ? '(show)' : '(hide)';
      toggleLink.text(newText);
      $(this).siblings('p').toggle();
    });
    $(this).after(toggleLink);

  });
});
