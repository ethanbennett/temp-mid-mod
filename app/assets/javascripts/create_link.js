$( document ).ready(function(){
  $("#create-link").on("click", createLink)
});

function createLink(e) {
  e.preventDefault();
  var link = formatLink();
  if (addLink(link)) {
    addLink(link);
  }
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
  }).done( () =>
    $("#links-list").prepend(linkHtml),
    renderSuccess()
  )}

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

function renderSuccess() {
  var success = "<div id='flash_message'><p>Success!</p></div>"
  
  $("body").prepend(
  $(success).
    hide().fadeIn(1000, function(){
      $(this).fadeOut(1000);
    })
  );
}

