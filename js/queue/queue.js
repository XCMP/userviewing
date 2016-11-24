import { getUTCDate } from '../utils/utils'

const queue = [];

function enqueue(id) {
  console.log('enqueue', id);
  queue.push({
        id: id,
        sender: {
          "id": id,
          "timestamp": getUTCDate()
        }
      });
}

function dequeue(id) {
  console.log('dequeue', id);
  const index = queue.findIndex(function(timer) {
    return timer.id === id;
  });
  queue.splice(index, 1)[0];
}

function processor() {
  window.setInterval(function(){
    queue.pop();
  },
  1000);
}

export {
  dequeue,
  enqueue,
  processor
}