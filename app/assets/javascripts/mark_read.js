$( document ).ready(function(){
  $("body").on("click", ".mark-read", markRead)
  $("body").on("click", "#link-clicker", markReadFromLink)
})

function markRead(e) {
  e.preventDefault();
  var linkId = $(this).parents('#mark-button').data('id');
  var currentCount = $(this).parents('#mark-button').data('count');
  var newCount = currentCount + 1
  changeReadButton(this);
  changeText(this);
  
  $.ajax({
    type: "PATCH",
    url: "/api/v1/links/" + linkId,
    data: { read: true, count: newCount },
  }).then(console.log("Nice!"))
    .fail(displayFailure);
}

function markReadFromLink(e) {
  e.preventDefault();
  var linkId = $(this).parents('#mark-button').data('id');
  changeReadButtonFromLink(this);
  changeText(this);
  
  $.ajax({
    type: "PATCH",
    url: "/api/v1/links/" + linkId,
    data: { read: true },
  }).then(window.open(this))
    .fail(displayFailure);
}

function changeText(button) {
  $(button).parent().toggleClass('read-false').toggleClass('read-true');
}

function changeReadButtonFromLink(link) {
  var linkId = $(link).parents('#mark-button').data('id');
  $(link).siblings("#button-" + linkId).text("Mark Unread").removeClass('mark-read').addClass('mark-unread')
}

function changeReadButton(button) {
  $(button).text("Mark Unread").removeClass('mark-read').addClass('mark-unread')
}

function displayFailure(failureData){
  console.log("Failed attempt to update link: " + failureData.responseText);
}
