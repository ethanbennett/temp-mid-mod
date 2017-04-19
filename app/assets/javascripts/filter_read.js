$( document ).ready(function(){
  $("#show-unread").on("click", filterRead)
})

function filterRead () {
  var $links = $(".link")
  $links.hide()
  $links.filter(".read-false").show()
}