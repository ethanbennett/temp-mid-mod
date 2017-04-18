$(document).ready(function() {
  var $filter = $("#text_filter")

  $filter.on("keyup", () => {
    var $links = $(".link")
    
    $links.hide()
    $links.filter(function () {
      var $links = $(".link")
      var $title = $links.children('link-title')
      var $url = $links.children('link-url')
      var searchTerm = $filter.val().toLowerCase();

      if ($title.is(":contains('" + searchTerm + "')")) {
        return true;
      } else if ($url.is(":contains('" + searchTerm + "')")) {
        return true;
      } else {
        return false;
      }
    }).show();
  })
})


