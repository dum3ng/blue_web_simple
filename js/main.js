navigator.bluetooth.requestDevice({
  filters: [{
    services: [],
  }]
}).then(device => console.log('devices:', device))