import { DEFAULTS } from '../utils/defaults';
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
  return Object.assign(
    {},
    data, {
    measurements: [{
        m2Id: id,
        timestamp: data.sendTimestamp,
        event: DEFAULTS().EVENT_VIEW,
      }]
  });
}

function gatherDataForElements(elements) {
  const data = gatherBaseData();
  return Object.assign({}, data, {measurements: elements});
}

function sendData(data) {
  console.log('sending', JSON.stringify(data, null, 2));
  $.ajax({
    url: DEFAULTS().URL_END_POINT,
    type: "GET",
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify(data),
    success: function() {console.log('POST success');},
  });
}

export function sendContainer(id) {
  const data = gatherData(id);
  sendData(data);
}

export function sendElements(elements) {
  const data = gatherDataForElements(elements);
  sendData(data);
}

