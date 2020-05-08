const $ = document.querySelector.bind(document);

const requestButton = $("#request");

requestButton.addEventListener("click", () => {
  navigator.bluetooth
    .requestDevice()
    .then((device) => console.log("devices:", device));
});

const devicesButton = $("#button2");

devicesButton.addEventListener("click", async () => {
  const devices = await navigator.bluetooth.getDevices();
  console.log("get devices ", devices);
});
