$(function () {
  const API_ADDRESS = "https://www.boredapi.com/api/activity/";

  function getRandomActivity() {
    container.classList.replace("invisible", "visible");
    header.classList.replace("visible", "invisible");
    button.style.top = "75%";
    button.style.transform = "translate(-50%, -50%) scale(1.4)";
    fetch(API_ADDRESS)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status)
        } else {
          return response.json();
        }
      })
      .then((data) => {
        activity.innerHTML = `<span class="title">Activity: </span><span class="suggestion">${data.activity}</span>`;
        type.innerHTML = `<span class="title">Type: </span><span class="suggestion">${data.type}</span>`;
        participants.innerHTML = `<span class="title">Number of participants: </span><span class="suggestion">${data.participants}</span>`;
      })
      .catch(error => {
        $("main").append($("<div class='error'>").text("Something went wrong: " + error));
      })
  }
  // ---- Button ----
  $(".get-activity").on("click", getRandomActivity);
})