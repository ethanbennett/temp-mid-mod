$(document).ready(function(){
  bindSubmitListenerAndPostLink();

function bindSubmitListenerAndPostLink() {
  $("#new_link").submit(function(event) {
      event.preventDefault();
      postLink();
  });
}

function postLink() {
  var linkData = {
    link: {
      title: $("#link_title").val(),
      url: $("#link_url").val(),
    }
  }
  console.log(linkData);

    $.ajax({
              url: "/api/v1/links",
              method: "POST",
              data: linkData
              })
              .done(function(newLinkMarkup) {
                  $(".link-list").append(newLinkMarkup);
                  $("#link_title").val("");
                  $("#link_url").val("");
              });
  }

});