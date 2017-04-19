$( document ).ready(function(){
  $("#show-unread").on("click", filterRead)
})

function filterRead () {
  var $links = $(".link")
  $links.hide()

  $links.each(function() {
    var $className = $(this).children().attr("class")
    if ($className == "read-false") {
      $(this).show()
    }
  })
}