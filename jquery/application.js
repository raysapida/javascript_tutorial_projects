$(function (){
  var backToTop = "<a href='#top'>Back to Top</a>";
  $("div.article").append(backToTop);
  var toc = "<h2 id='toc_header'>Table of Contents</h2>";
  var list = "<ul id='toc_list'></ul>";
  $("h1").after(toc).after(list);
});
