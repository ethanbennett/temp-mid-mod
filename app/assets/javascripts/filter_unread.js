$( document ).ready(function(){
  $("#show-read").on("click", filterUnread)
})

function filterUnread () {
  var $links = $(".link")
  $links.filter(".read-false").hide()
}