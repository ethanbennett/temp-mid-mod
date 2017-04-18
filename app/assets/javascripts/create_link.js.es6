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
  $.ajax({
    type: "POST",
    url: "/links",
    data: link
  }).done( (response) => {
    $("body").html(response)
  })}

