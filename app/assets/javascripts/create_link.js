$( document ).ready(function(){
  $("#create-link").on("click", createLink)

function createLink(e) {
  e.preventDefault();
  var link = formatLink();
  addLink(link);
}

function formatLink () {
  return {
    link: {
      url: $("#url").val(),
      title: $("#title").val()
    }
  }
}

function addLink(link) {
  var newHtml = formatLinkHtml()

  $.ajax({
    type: "POST",
    url: "/api/v1/links",
    data: link
  }).done( (response) => {
    $("#links-list").prepend(newHtml)
  }).fail(error => console.log(error))
}

  function formatLinkHtml() {
    var title = $("#title").val()
    var url = $("#url").val()
    var linkId = $("#link-id").val()

    return "<div class='read-false'><strong>" +
    title + "</strong></br><a href='" +
    url + "'>" +
    url + "</a></br><a href='/links/" +
    linkId +"/edit'>Edit</a></br><button class='mark-read'>Mark Read</button></br></br>"
}
});


