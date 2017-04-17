$( document ).ready(function(){
  $("body").on("click", ".mark-read", markRead)
  $("body").on("click", ".mark-unread", markUnread)
})

function markRead(e) {
  e.preventDefault();
  var linkId = $(this).parents('#mark-button').data('id');
  $(this).parent().toggleClass('read-false').toggleClass('read-true');
  // debugger;


  $.ajax({
    type: "PATCH",
    url: "/api/v1/links/" + linkId,
    data: { read: true },
  }).then(updateLinkStatus)
    .fail(displayFailure);
}

function updateLinkStatus(link) {
  $('.link[data-link-id=${link.id}]')
  .find(".read-status").text(link.read)
}

function displayFailure(failureData){
  console.log("FAILED attempt to update Link: " + failureData.responseText);
}
