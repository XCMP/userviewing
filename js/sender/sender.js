import * as CONSTS from '../utils/constants';
import { getUTCDate } from '../utils/date';
import { getViewportDimensions } from '../utils/viewport';

function gatherBaseData() {
  return {
    sendTimestamp: getUTCDate(),
    bltgSessionId: 'mySessionId',
    resolution: getViewportDimensions(),
  };
}

function gatherData(id) {
  const data = gatherBaseData();
  return _.extend(data, {measurements: [{m2Id: id, timestamp: data.timestamp}]});
}

function gatherDataForElements(elements) {
  const data = gatherBaseData();
  return _.extend(data, {measurements: elements});
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

function sendContainer(id) {
  const data = gatherData(id);
  sendData(data);
}

function sendElements(elements) {
  const data = gatherDataForElements(elements);
  sendData(data);
}

export {
  sendContainer,
  sendElements,
}