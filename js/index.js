import * as CONSTS from './utils/constants'
import { getContainerId, getItemId } from './finders/finders'
import { sendContainer } from './sender/sender'
import { dequeue, enqueue, startWorker } from './queue/queue'

const containerId = getContainerId();
sendContainer(containerId);

inView.threshold(CONSTS.PERCENTAGE_ITEM_IN_VIEW);
inView(CONSTS.ITEM_SELECTOR)
    .on('enter', el => {
      const id = getItemId(el);
      enqueue(id);
    })
    .on('exit',  el => {
      const id = getItemId(el);
      dequeue(id);
    });

startWorker();