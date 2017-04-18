$( document ).ready(function(){
  $("#create-link").on("click", createLink)
});

function createLink(e) {
  e.preventDefault();
  formatLink();
  debugger;
}

function newFunction() {
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

