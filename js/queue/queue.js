import * as CONSTS from '../utils/constants'
import { getUTCDate } from '../utils/date'
import { sendElements } from '../sender/sender'

const queue = new Map();

function isTimeInViewReached(timestamp) {
  return (getUTCDate() - timestamp) >= CONSTS.TIME_IN_VIEW_MS;
}

function process() {
  console.log('queue size: ' + queue.size);
  if (queue.size === 0) return;

  const elements = [];

  queue.forEach(function(element, key) {

    console.log(key);
    if (isTimeInViewReached(element.timestamp)) {
      elements.push(element);
      queue.delete(key);
    }
  });

  if (elements.length > 0) {
    console.log(`sending ${elements.length} elements. queue size: ${queue.size}`);
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
    "what": CONSTS.EVENT_VIEW,
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