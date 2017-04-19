$( document ).ready(function(){
  $("#show-unread").on("click", filterRead)
})

function filterRead () {
  var $links = $(".link")

  for (i = 0; i < $links.length; i++) {
    var $thisLink = $($links[i]).children().eq(1)
    var $className = $thisLink.attr("class")
    if ($className == "read-true") {
      $thisLink.hide()
    }
  }
}