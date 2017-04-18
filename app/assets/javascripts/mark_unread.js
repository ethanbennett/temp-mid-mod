$( document ).ready(function(){
  $("body").on("click", ".mark-unread", markUnread)
})

function markUnread(e) {
  e.preventDefault();
  var linkId = $(this).parents('#mark-button').data('id');
  changeUnreadButton(this);
  changeText(this);
  
  $.ajax({
    type: "PATCH",
    url: "/api/v1/links/" + linkId,
    data: { read: false },
  }).then(console.log("Nice!"))
    .fail(displayFailure);
}

function changeText(button) {
  $(button).parent().toggleClass('read-true').toggleClass('read-false');
}

function changeUnreadButton(button) {
  $(button).text("Mark Read").removeClass('mark-unread').addClass('mark-read');
}

function displayFailure(failureData){
  console.log("Failed attempt to update link: " + failureData.responseText);
}
