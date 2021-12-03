const splash = document.getElementById("splash");
const section = document.querySelector(".section")
const eventKey = document.getElementById("event-key");
const eventCode = document.getElementById("event-code");
const eventWhich = document.querySelectorAll(".event-which");


// click events
document.addEventListener("click", () => {
  //remove splash screen if visible and clicked
  toggleVisible();
});


//keypress events
document.addEventListener("keypress", (e) => {
  //remove splash screen if visible and keypress
  toggleVisible();
  // return key data from the keypress event
  eventWhich.forEach((ew) => ew.innerHTML = e.which)
  eventKey.innerHTML = e.key;
  eventCode.innerHTML = e.code;
});


// screen toggle
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
