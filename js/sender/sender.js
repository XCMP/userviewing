function gatherData(id) {
  const timestamp = Date.now();
  const data = {
    sessionId: 'mySessionId',
    deviceId: 'DESKTOP',
    timestamp: timestamp
  };
  return _.extend(data, {elements: [{id: id, timestamp: timestamp}]});
};

function sendData(data) {
  $.ajax({
    url: 'http://localhost:8080',
    type: "GET",
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify(data),
    success: function() {console.log('POST success');},
  });
};

// interface
function send(id) {
  const data = gatherData(id);
  sendData(data);
};

export {
  send
}