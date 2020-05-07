const $ = document.querySelector.bind(document);

const requestButton = $("#request");

requestButton.addEventListener("click", () => {
  navigator.bluetooth
    .requestDevice({
      filters: [
        {
          services: [],
        },
      ],
    })
    .then((device) => console.log("devices:", device));
});
