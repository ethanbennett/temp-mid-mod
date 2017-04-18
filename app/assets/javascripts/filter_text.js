$(document).ready(function() {
  var $filter = $("#text_filter")

  $filter.on("keyup", () => {
    var $links = $(".link")
    
    $links.hide()
    // $links.filter(function () {
    //   var $links = $(".link")
    //   var $title = $links.children('link-title')
    //   var $url = $links.children('link-url')
    //   var searchTerm = $filter.val().toLowerCase();

    //   if ($title.is(":contains('" + searchTerm + "')")) {
    //     return true;
    //   } else if ($url.is(":contains('" + searchTerm + "')")) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }).show();
  })

  $("#show-read").on('click', function() {
    var $links = $(".link");

    $links.hide();

    $links.filter(function() {
      var $links = $(".link");
      var $read = $links.children('.read-true');
      $read.show();
    })
  })

  $("#show-unread").on('click', function() {
    var $links = $(".link");

    $links.hide();

    $links.filter(function() {
      var $links = $(".link");
      var $unread = $links.children('.read-false');
      $unread.show();
    })
  })
})


