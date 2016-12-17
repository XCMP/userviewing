import { setDefaults, DEFAULTS } from './utils/defaults'
import { getContainerId, getItemId } from './finders/finders'
import { sendContainer } from './sender/sender'
import { dequeue, enqueue, startWorker } from './queue/queue'

const initMeasurement = () => {
  setDefaults();

  const containerId = getContainerId();
  sendContainer(containerId);

  inView.threshold(DEFAULTS().PERCENTAGE_IN_VIEW);
  inView(DEFAULTS().ITEM_SELECTOR)
    .on('enter', el => {
      const id = getItemId(el);
      enqueue(id);
    })
    .on('exit',  el => {
      const id = getItemId(el);
      dequeue(id);
    });

  startWorker();
};

initMeasurement();