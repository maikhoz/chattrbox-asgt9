let socket;

function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

export default {
    init, //same as init: init
}
