$(function () {
  const API_ADDRESS = "https://www.boredapi.com/api/activity/";

  function getRandomActivity() {
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
  $(".get-activity").on("click", getRandomActivity);
})