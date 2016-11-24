import * as CONSTS from '../utils/constants'

function gatherData(id) {
  const timestamp = Date.now();
  const data = {
    sessionId: 'mySessionId',
    deviceId: 'DESKTOP',
    timestamp: timestamp
  };
  return _.extend(data, {elements: [{id: id, timestamp: timestamp}]});
}

function sendData(data) {
  console.log('sending', JSON.stringify(data, null, 2));
  $.ajax({
    url: CONSTS.URL_M2_END_POINT,
    type: "GET",
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify(data),
    success: function() {console.log('POST success');},
  });
}

function send(id) {
  const data = gatherData(id);
  sendData(data);
}

export {
  send
}