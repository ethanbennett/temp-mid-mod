$( document ).ready(function(){
  $("body").on("click", ".mark-read", markRead)
})

function markRead(e) {
  e.preventDefault();
  var linkId = $(this).parents('#mark-button').data('id');
  changeText(this);
  changeButton(this);
  
  $.ajax({
    type: "PATCH",
    url: "/api/v1/links/" + linkId,
    data: { read: true },
  }).then(updateLinkStatus)
    .fail(displayFailure);
}

function changeText(button) {
  $(button).parent().toggleClass('read-false').toggleClass('read-true');
}

function changeButton(button) {
  $(button).parent().find(".mark-read").text("Mark Unread").removeClass('.mark-read').addClass('.mark-unread');
}

function updateLinkStatus(link) {
  $('.link[data-link-id=${link.id}]')
  .find(".read-status").text(link.read)
}

function displayFailure(failureData){
  console.log("Failed attempt to update link: " + failureData.responseText);
}
