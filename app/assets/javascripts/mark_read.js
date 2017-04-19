$( document ).ready(function(){
  $("body").on("click", ".mark-read", markRead)
  $("body").on("click", "#link-clicker", markReadFromLink)
})

function markRead(e) {
  e.preventDefault();
  var linkId = $(this).parents('#mark-button').data('id');
  
  $.ajax({
    type: "PATCH",
    url: "/api/v1/links/" + linkId,
    data: { read: true },
  }).then(
  changeReadButton(this)
  ).then(
  changeText(this)
  ).fail(displayFailure);
}

function markReadFromLink(e) {
  e.preventDefault();
  var linkId = $(this).parents('#mark-button').data('id');
  
  $.ajax({
    type: "PATCH",
    url: "/api/v1/links/" + linkId,
    data: { read: true },
  }).then(
    changeReadButtonFromLink(this),
    changeText(this)
  ).then(window.open(this)
  ).fail(displayFailure)
}

function changeText(button) {
  debugger;
  $(button).parent().removeClass("read-false").addClass("read-true")
}

function changeReadButtonFromLink(link) {
  var linkId = $(link).parents('#mark-button').data('id');
  $(link).find("#button-" + linkId).text("Mark Unread").removeClass('mark-read').addClass('mark-unread')
}

function changeReadButton(button) {
  // debugger;
  $(button).text("Mark Unread").removeClass('mark-read').addClass('mark-unread')
}

function displayFailure(failureData){
  console.log("Failed attempt to update link: " + failureData.responseText);
}
