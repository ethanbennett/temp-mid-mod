$(document).ready(function() {
  var $links = $(".link")
  var $filter = $("#text_filter")

  $filter.on("keyup", () => {
    $links.hide()
    var searchTerm = $filter.val().toLowerCase();
    debugger;
    })
})

