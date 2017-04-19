$( document ).ready(function(){
  $("body").on("click", ".mark-unread", markUnread)
})

function markUnread(e) {
  e.preventDefault();
  var linkId = $(this).parents('#mark-button').data('id');
  
  $.ajax({
    type: "PATCH",
    url: "/api/v1/links/" + linkId,
    data: { read: false },
  }).then(() => {
    changeUnreadButton(this)
  }).then(() => {
    changeText(this);
  }).fail(displayFailure);
}

function changeText(button) {
  $(button).parent().parent().removeClass('read-true').addClass('read-false');
}

function changeUnreadButton(button) {
  $(button).text("Mark Read").removeClass('mark-unread').addClass('mark-read');
}

function displayFailure(failureData){
  console.log("Failed attempt to update link: " + failureData.responseText);
}
