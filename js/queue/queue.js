import * as CONSTS from '../utils/constants'
import {send} from '../sender/sender'

const queue = [];

function enqueue(id) {
  console.log('enqueue', id);
  queue.push({
        id: id,
        sender: setTimeout(
            function () {
              send(id);
            }, CONSTS.TIME_IN_VIEW_MS)
      });
}

function dequeue(id) {
  console.log('dequeue', id);
  const index = queue.findIndex(function(timer) {
    return timer.id === id;
  });
  const timer = queue.splice(index, 1)[0];
  clearTimeout(timer.sender);
}

export {
  dequeue,
  enqueue
}