$( document ).ready(function(){
  $("#show-read").on("click", filterUnread)
})

function filterUnread () {
  var $links = $(".link")
  // $links.hide()

  $links.each(function() {
    var $className = $(this).children().attr("class")
    console.log($className)
    if ($className == "read-false") {
      $(this).hide()
    }
  })
}