const splash = document.getElementById("splash");
const section = document.querySelector(".section")
const mainEvent = document.getElementById("main-event");
const eventKey = document.getElementById("event-key");
const eventCode = document.getElementById("event-code");
const eventWhich = document.querySelectorAll(".event-which");

document.addEventListener("click", () => {
  //remove splash screen if visible and clicked
  toggleVisible();
});

document.addEventListener("keypress", (e) => {
  //remove splash screen if visible and keypress
  toggleVisible();
  // return key data from the keypress event
  console.log(eventWhich)
  for (let i = 0; i < eventWhich.length; i++){
    eventWhich[i].innerHTML = e.which;a
  }
  eventKey.innerHTML = e.key;
  eventCode.innerHTML = e.code;
});

const toggleVisible = () => {
  for (i = 0; i < splash.classList.length; i++) {
    if (splash.classList[i] === "visible") {
      splash.classList.remove("visible");
      splash.classList.add("hidden");
      section.classList.add("visible");
      section.classList.remove("hidden")
    }
    break;
  }
};
