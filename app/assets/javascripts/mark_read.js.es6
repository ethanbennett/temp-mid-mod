$( document ).ready(function(){
  $("body").on("click", ".mark-read", markRead)
})

function markRead(e) {
  e.preventDefault();
  var linkId = $(this).parents('#mark-button').data('id');
  changeReadButton(this);
  changeText(this);
  
  $.ajax({
    type: "PATCH",
    url: "/api/v1/links/" + linkId,
    data: { read: true },
  }).then(console.log("Nice!"))
    .fail(displayFailure);
}

function changeText(button) {
  $(button).parent().toggleClass('read-false').toggleClass('read-true');
}

function changeReadButton(button) {
  $(button).text("Mark Unread").removeClass('mark-read').addClass('mark-unread')
}

function displayFailure(failureData){
  console.log("Failed attempt to update link: " + failureData.responseText);
}
