$( document ).ready(function(){
  $("#show-unread").on("click", filterRead)
})

function filterRead () {
  var $links = $(".link")
  $links.filter(".read-true").hide()
}