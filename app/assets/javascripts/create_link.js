$( document ).ready(function(){
  $("#create-link").on("click", createLink)
});

function createLink(e) {
  e.preventDefault();
  var link = formatLink();
  addLink(link);
}

function formatLink () {
  return {
    link: {
      user_id: $("#user").val(),
      url: $("#url").val(),
      title: $("#title").val()
    }
  }
}

function addLink(link) {
  var linkHtml = formatLinkHtml()

  $.ajax({
    type: "POST",
    url: "/links",
    data: link
  }).then(
    $("#links-list").prepend(linkHtml)
    )
  }

function formatLinkHtml() {
  var title = $("#title").val()
  var url = $("#url").val()
  return "<div class='read-false'><strong>" +
  title + "</strong></br><a href='" +
  url + "'>" +
  url + "</a></br><button class='mark-read'>Mark Read</button></br></br>"
}

