import * as CONSTS from '../utils/constants'
import { getUTCDate } from '../utils/utils'
import { sendElements } from '../sender/sender'

const queue = new Map();

function isTimeInViewReached(timestamp) {
  return (getUTCDate() - timestamp) >= CONSTS.TIME_IN_VIEW_MS;
}

function process() {
  const elements = [];
  queue.forEach(function(element, key) {
    console.log(key);
    if (isTimeInViewReached(element.timestamp)) {
      elements.push(element);
      queue.delete(key);
    }
  });

  if (elements.length > 0) {
    sendElements(elements);
  } else {
    console.log('nothing to send. queue size: ' + queue.size);
  }
}

function enqueue(id) {
  console.log('enqueue', id);
  queue.set(id, {
    'm2Id': id,
    'timestamp': getUTCDate(),
    "what": 'view',
  });
}

function dequeue(id) {
  console.log('dequeue', id);
  queue.delete(id);
}

function startWorker() {
  window.setInterval(function(){
      process();
    }, CONSTS.WORKER_TIMER_MS
  );
}

export {
  dequeue,
  enqueue,
  startWorker
}