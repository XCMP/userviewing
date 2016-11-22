import * as CONSTS from './utils/constants'
import {getContainerId} from './finders/container';
import {send} from './sender/sender';
import {dequeue, enqueue} from './queue/queue';

const containerId = getContainerId();
send(containerId);

inView.threshold(CONSTS.PERCENTAGE_ITEM_IN_VIEW);
inView('[data-uvi]')
    .on('enter', el => {
      const id = $(el).attr('data-uvi');
      enqueue(id);
    })
    .on('exit',  el => {
      const id = $(el).attr('data-uvi');
      dequeue(id);
    });