const buttonInstall = document.getElementById("buttonInstall");
console.log("This is install");

// Logic for installing the PWA

// Event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  //Store the triggered events
  window.deferredPrompt = event;
  console.log("before install prompt");

  //Remove the hidden class from the button
  buttonInstall.classList.toggle("hidden", false);
});

// Implement a click event handler on the `buttonInstall` element
buttonInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  console.log("HELLO This is a button");

  if (!promptEvent) {
    return;
  }

  //Show prompt
  promptEvent.prompt();

  //Reset the deferred prompt variable. It can only be used one time.
  window.deferredPrompt = null;

  buttonInstall.classList.toggle("hidden", true);
});

// Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("app installed");
  //Clear prompt
  window.deferredPrompt = null;
});