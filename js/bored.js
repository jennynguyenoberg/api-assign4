$(function () {
  const API_ADDRESS = "http://www.boredapi.com/api/activity/";

  //getRandomActivity();

  function getRandomActivity() {
    //let id = Math.floor(Math.random());

    fetch(API_ADDRESS)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status)
        } else {
          return response.json();
        }
      })
      .then((data) => {
        $(".activity-name").text(data.activity);
        $(".activity-category").text(data.type);
        $(".participants").text(data.participants);
      })
      .catch(error => {
        $("main").append($("<div class='error'>").text("Something went wrong: " + error));
      })
  }
  // ---- Button ----
  $(".get-activicy").on("click", getRandomActivity);
})