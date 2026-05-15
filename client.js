if (window._devSocket) window._devSocket.close();
window._styleElement = document.getElementById('blyrics-custom-style');

window._devSocket = new WebSocket('ws://localhost:8080');

window._devSocket.onopen = () => {
  console.log('WebSocket connection established');
};

window._devSocket.onmessage = (event) => {
  window._styleElement.textContent = event.data;
  console.log('Received updated CSS');
};

window._devSocket.onclose = () => {
  console.log('WebSocket connection closed');
};
