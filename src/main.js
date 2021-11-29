const splash = document.getElementById("splash");
const mainSection = document.getElementById("main-section");
const mainEvent = document.getElementById("main-event");
const eventKey = document.getElementById("event-key");
const eventCode = document.getElementById("event-code");
const eventWhich = document.getElementById("event-which");

document.addEventListener("click", () => {
  //remove splash screen if visible and clicked
  toggleVisible();
});

document.addEventListener("keypress", (e) => {
  //remove splash screen if visible and keypress
  toggleVisible();

  // return key data fro the keypress event
  mainEvent.innerHTML = e.which;
  eventWhich.innerHTML = e.which;
  eventKey.innerHTML = e.key;
  eventCode.innerHTML = e.code;
});

const toggleVisible = () => {
  for (i = 0; i < splash.classList.length; i++) {
    if (splash.classList[i] === "visible") {
      splash.classList.remove("visible");
      splash.classList.add("hidden");
    }
    break;
  }
};
