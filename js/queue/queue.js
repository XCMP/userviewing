import { DEFAULTS } from '../utils/defaults'
import { getUTCDate } from '../utils/date'
import { sendElements } from '../sender/sender'

const queue = new Map();

function isTimeInViewReached(timestamp) {
  return (getUTCDate() - timestamp) >= DEFAULTS().TIME_IN_VIEW;
}

function process() {
  console.log('queue size: ' + queue.size);
  if (queue.size === 0) return;

  const elements = [];

  queue.forEach(function(element, key) {

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

export function enqueue(id) {
  console.log('enqueue', id);
  queue.set(id, {
    'm2Id': id,
    'timestamp': getUTCDate(),
    'event': DEFAULTS().EVENT_VIEW,
  });
}

export function dequeue(id) {
  console.log('dequeue', id);
  queue.delete(id);
}

export function startWorker() {
  window.setInterval(function(){
      process();
    }, DEFAULTS().WORKER_TIMER
  );
}